'use client';
import { runOutboxTransaction as runTransaction } from './outboxDatabase';

import { sendMessage, uploadChatMedia, type Message } from '@/lib/api/chat';
import { isTerminalSafetyError, getStructuredApiError } from '@/lib/api/errors';
import { isChatSocketReady, sendChatMessage as sendRealtimeChatMessage } from '@/lib/socket';

const MAX_AUTO_ATTEMPTS = 5;
const BASE_RETRY_DELAY_MS = 1_000;
const MAX_RETRY_DELAY_MS = 30_000;

export const CHAT_OUTBOX_UPDATED_EVENT = 'vormex:chat-outbox-updated';
export const CHAT_MESSAGE_CONFIRMED_EVENT = 'vormex:chat-message-confirmed';
export const CHAT_OUTBOX_REMOVED_EVENT = 'vormex:chat-outbox-removed';

export type ChatOutboxStatus = 'pending' | 'sending' | 'failed';

export interface ChatOutboxEntry {
  clientMessageId: string;
  ownerId: string;
  conversationId: string;
  content: string;
  contentType: string;
  mediaUrl?: string;
  mediaType?: string;
  fileName?: string;
  fileSize?: number;
  replyToId?: string;
  createdAt: string;
  attempts: number;
  status: ChatOutboxStatus;
  nextAttemptAt?: number;
  lastError?: string;
  localFile?: Blob;
  localFileType?: 'image' | 'video' | 'document' | 'audio';
}

type AttemptOptions = {
  manual?: boolean;
  onUploadProgress?: (progress: number) => void;
};

const inFlightAttempts = new Map<string, Promise<Message>>();
const drainTimers = new Map<string, ReturnType<typeof setTimeout>>();

function dispatchOutboxUpdate(entry: ChatOutboxEntry): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CHAT_OUTBOX_UPDATED_EVENT, { detail: entry }));
}

function dispatchConfirmedMessage(entry: ChatOutboxEntry, message: Message): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(CHAT_MESSAGE_CONFIRMED_EVENT, {
      detail: { conversationId: entry.conversationId, message },
    })
  );
}

function dispatchRemovedEntry(entry: ChatOutboxEntry, reason: string): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(CHAT_OUTBOX_REMOVED_EVENT, {
      detail: {
        clientMessageId: entry.clientMessageId,
        conversationId: entry.conversationId,
        reason,
      },
    })
  );
}

function shouldFallbackToRestSend(error: unknown): boolean {
  const message =
    error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
  return (
    message.includes('realtime connection unavailable') ||
    message.includes('not authenticated') ||
    message.includes('socket authentication failed') ||
    message.includes('acknowledgement timed out')
  );
}

function retryDelay(attempts: number): number {
  return Math.min(MAX_RETRY_DELAY_MS, BASE_RETRY_DELAY_MS * 2 ** Math.max(0, attempts - 1));
}

export async function putChatOutboxEntry(entry: ChatOutboxEntry): Promise<void> {
  await runTransaction<void>('readwrite', (store, resolve, reject) => {
    const request = store.put(entry);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function getChatOutboxEntry(
  clientMessageId: string
): Promise<ChatOutboxEntry | undefined> {
  return runTransaction<ChatOutboxEntry | undefined>('readonly', (store, resolve, reject) => {
    const request = store.get(clientMessageId);
    request.onsuccess = () => resolve(request.result as ChatOutboxEntry | undefined);
    request.onerror = () => reject(request.error);
  });
}

export async function listChatOutboxEntries(ownerId: string): Promise<ChatOutboxEntry[]> {
  return runTransaction<ChatOutboxEntry[]>('readonly', (store, resolve, reject) => {
    const request = store.index('ownerId').getAll(ownerId);
    request.onsuccess = () =>
      resolve(
        (request.result as ChatOutboxEntry[]).sort(
          (left, right) => Date.parse(left.createdAt) - Date.parse(right.createdAt)
        )
      );
    request.onerror = () => reject(request.error);
  });
}

export async function deleteChatOutboxEntry(clientMessageId: string): Promise<void> {
  await runTransaction<void>('readwrite', (store, resolve, reject) => {
    const request = store.delete(clientMessageId);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function clearChatOutbox(ownerId: string | undefined | null): Promise<void> {
  if (!ownerId) return;
  const timer = drainTimers.get(ownerId);
  if (timer) clearTimeout(timer);
  drainTimers.delete(ownerId);

  const entries = await listChatOutboxEntries(ownerId).catch(() => []);
  await Promise.allSettled(entries.map((entry) => deleteChatOutboxEntry(entry.clientMessageId)));
}

export async function clearConversationChatOutbox(
  ownerId: string | undefined | null,
  conversationIds: string[]
): Promise<void> {
  if (!ownerId || conversationIds.length === 0) return;
  const unavailableIds = new Set(conversationIds);
  const entries = await listChatOutboxEntries(ownerId).catch(() => []);
  await Promise.all(
    entries
      .filter((entry) => unavailableIds.has(entry.conversationId))
      .map(async (entry) => {
        await deleteChatOutboxEntry(entry.clientMessageId);
        dispatchRemovedEntry(entry, 'resource_unavailable');
      })
  );
}

async function sendEntry(
  entry: ChatOutboxEntry,
  onUploadProgress?: (progress: number) => void
): Promise<Message> {
  let activeEntry = entry;

  if (!activeEntry.mediaUrl && activeEntry.localFile && activeEntry.localFileType) {
    const uploadFile = new File(
      [activeEntry.localFile],
      activeEntry.fileName || `attachment-${activeEntry.clientMessageId}`,
      { type: activeEntry.localFile.type || 'application/octet-stream' }
    );
    const upload = await uploadChatMedia(
      uploadFile,
      activeEntry.localFileType,
      onUploadProgress,
      activeEntry.clientMessageId
    );
    activeEntry = {
      ...activeEntry,
      mediaUrl: upload.mediaUrl,
      mediaType: upload.mediaType,
      fileName: upload.fileName,
      fileSize: upload.fileSize,
    };
    await putChatOutboxEntry(activeEntry);
  }

  const payload = {
    content: activeEntry.content,
    contentType: activeEntry.contentType,
    mediaUrl: activeEntry.mediaUrl,
    mediaType: activeEntry.mediaType,
    fileName: activeEntry.fileName,
    fileSize: activeEntry.fileSize,
    replyToId: activeEntry.replyToId,
    clientMessageId: activeEntry.clientMessageId,
  };

  if (isChatSocketReady()) {
    try {
      return await sendRealtimeChatMessage({
        conversationId: activeEntry.conversationId,
        ...payload,
      });
    } catch (error) {
      if (!shouldFallbackToRestSend(error)) throw error;
    }
  }

  return sendMessage(activeEntry.conversationId, payload);
}

export async function attemptChatOutboxEntry(
  clientMessageId: string,
  options: AttemptOptions = {}
): Promise<Message> {
  const existingAttempt = inFlightAttempts.get(clientMessageId);
  if (existingAttempt) return existingAttempt;

  const attempt = (async () => {
    let entry = await getChatOutboxEntry(clientMessageId);
    if (!entry) throw new Error('Outbox message no longer exists');

    if (!options.manual && entry.attempts >= MAX_AUTO_ATTEMPTS) {
      throw new Error('Automatic retry limit reached');
    }

    if (options.manual && entry.attempts >= MAX_AUTO_ATTEMPTS) {
      entry = { ...entry, attempts: 0, nextAttemptAt: undefined };
    }

    const sendingEntry: ChatOutboxEntry = {
      ...entry,
      status: 'sending',
      attempts: entry.attempts + 1,
      nextAttemptAt: undefined,
    };
    await putChatOutboxEntry(sendingEntry);
    dispatchOutboxUpdate(sendingEntry);

    try {
      const message = await sendEntry(sendingEntry, options.onUploadProgress);
      await deleteChatOutboxEntry(clientMessageId);
      dispatchConfirmedMessage(sendingEntry, message);
      return message;
    } catch (error) {
      if (isTerminalSafetyError(error)) {
        await deleteChatOutboxEntry(clientMessageId);
        dispatchRemovedEntry(sendingEntry, 'resource_unavailable');
        throw error;
      }
      const failedEntry: ChatOutboxEntry = {
        ...((await getChatOutboxEntry(clientMessageId)) ?? sendingEntry),
        status: 'failed',
        attempts: sendingEntry.attempts,
        nextAttemptAt: Date.now() + retryDelay(sendingEntry.attempts),
        lastError: getStructuredApiError(error).message,
      };
      const status = getStructuredApiError(error).status;
      const retryAfter = Number(
        (error as { response?: { data?: { retryAfterSeconds?: number } } })?.response?.data
          ?.retryAfterSeconds
      );
      if (status === 429 && retryAfter > 0)
        failedEntry.nextAttemptAt = Date.now() + retryAfter * 1000;
      if (status && [400, 403, 413, 415].includes(status)) failedEntry.attempts = MAX_AUTO_ATTEMPTS;
      await putChatOutboxEntry(failedEntry);
      dispatchOutboxUpdate(failedEntry);
      if (failedEntry.attempts < MAX_AUTO_ATTEMPTS) {
        scheduleChatOutboxDrain(failedEntry.ownerId);
      }
      throw error;
    }
  })();

  inFlightAttempts.set(clientMessageId, attempt);
  try {
    return await attempt;
  } finally {
    inFlightAttempts.delete(clientMessageId);
  }
}

export async function retryChatOutboxEntry(clientMessageId: string): Promise<Message> {
  const entry = await getChatOutboxEntry(clientMessageId);
  if (!entry) throw new Error('This failed message is no longer available to retry');
  const pendingEntry: ChatOutboxEntry = {
    ...entry,
    status: 'pending',
    attempts: entry.attempts >= MAX_AUTO_ATTEMPTS ? 0 : entry.attempts,
    nextAttemptAt: undefined,
  };
  await putChatOutboxEntry(pendingEntry);
  dispatchOutboxUpdate(pendingEntry);
  return attemptChatOutboxEntry(clientMessageId, { manual: true });
}

export async function drainChatOutbox(ownerId: string): Promise<void> {
  if (!ownerId) return;
  const now = Date.now();
  const entries = await listChatOutboxEntries(ownerId);
  const eligibleEntries = entries.filter(
    (entry) => entry.attempts < MAX_AUTO_ATTEMPTS && (entry.nextAttemptAt ?? 0) <= now
  );

  await Promise.allSettled(
    eligibleEntries.map((entry) => attemptChatOutboxEntry(entry.clientMessageId))
  );
  scheduleChatOutboxDrain(ownerId);
}

export async function scheduleChatOutboxDrain(ownerId: string): Promise<void> {
  const existingTimer = drainTimers.get(ownerId);
  if (existingTimer) clearTimeout(existingTimer);

  const entries = await listChatOutboxEntries(ownerId);
  const retryable = entries.filter((entry) => entry.attempts < MAX_AUTO_ATTEMPTS);
  if (retryable.length === 0) {
    drainTimers.delete(ownerId);
    return;
  }

  const nextAttemptAt = Math.min(...retryable.map((entry) => entry.nextAttemptAt ?? Date.now()));
  const timer = setTimeout(
    () => {
      drainTimers.delete(ownerId);
      void drainChatOutbox(ownerId);
    },
    Math.max(0, nextAttemptAt - Date.now())
  );
  drainTimers.set(ownerId, timer);
}
