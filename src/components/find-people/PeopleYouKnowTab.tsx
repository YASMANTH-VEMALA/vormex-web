'use client';
import { KnownPeopleView } from './KnownPeopleView';
import type { NavigatorWithContacts, PeopleDiscoveryError } from './PeopleYouKnowTab.types';
export type {
  ContactPickerContact,
  NavigatorWithContacts,
  PeopleDiscoveryError,
} from './PeopleYouKnowTab.types';

import {
  clearPeopleYouKnow,
  discoverPeopleYouKnow,
  getPeopleYouKnow,
  markPeopleYouKnowInviteSent,
  type PeopleYouKnowImportInput,
  type PeopleYouKnowInvite,
  type PeopleYouKnowResponse,
  type PersonRelationship,
} from '@/lib/api/people';
import { getShareLinks } from '@/lib/api/referrals';
import { withPersonRelationship } from '@/lib/findPeoplePolicy';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { type ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

const EMPTY_RESPONSE: PeopleYouKnowResponse = {
  lastSyncedAt: null,
  matched: [],
  invites: [],
  stats: {
    totalContacts: 0,
    matchedCount: 0,
    inviteCount: 0,
  },
};

function asPeopleDiscoveryError(error: unknown): PeopleDiscoveryError {
  return typeof error === 'object' && error !== null ? (error as PeopleDiscoveryError) : {};
}

const CSV_NAME_HEADERS = new Set(['name', 'full name', 'display name', 'given name', 'first name']);

function parseCsv(text: string): PeopleYouKnowImportInput[] {
  const rows: string[][] = [];
  let currentCell = '';
  let currentRow: string[] = [];
  let insideQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell);
      currentCell = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        index += 1;
      }
      currentRow.push(currentCell);
      currentCell = '';
      if (currentRow.some((value) => value.trim().length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      continue;
    }

    currentCell += char;
  }

  currentRow.push(currentCell);
  if (currentRow.some((value) => value.trim().length > 0)) {
    rows.push(currentRow);
  }

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  const nameIndex = headers.findIndex((header) => CSV_NAME_HEADERS.has(header));
  const emailIndexes = headers
    .map((header, index) => ({ header, index }))
    .filter(({ header }) => header.includes('email'))
    .map(({ index }) => index);

  if (emailIndexes.length === 0) {
    return [];
  }

  return rows.slice(1).flatMap((row) => {
    const name = nameIndex >= 0 ? row[nameIndex]?.trim() : '';
    const email = emailIndexes.map((index) => row[index]?.trim()).find((value) => Boolean(value));

    if (!email) {
      return [];
    }

    return [{ name: name || null, email }];
  });
}

export function PeopleYouKnowTab() {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [processingInviteId, setProcessingInviteId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [justFoundCount, setJustFoundCount] = useState<number | null>(null);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(50);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { data = EMPTY_RESPONSE, isLoading } = useQuery({
    queryKey: ['people-you-know'],
    queryFn: getPeopleYouKnow,
    staleTime: 5 * 60 * 1000,
  });

  const supportsContactPicker = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const navigatorWithContacts = navigator as NavigatorWithContacts;
    return typeof navigatorWithContacts.contacts?.select === 'function';
  }, []);

  const handleConnectionChange = (personId: string, relationship: PersonRelationship) => {
    queryClient.setQueryData<PeopleYouKnowResponse>(['people-you-know'], (previous) => {
      if (!previous) return previous;
      return {
        ...previous,
        matched: previous.matched.map((person) =>
          person.id === personId ? withPersonRelationship(person, relationship) : person
        ),
      };
    });
  };

  const persistDiscoveryResult = (response: PeopleYouKnowResponse) => {
    queryClient.setQueryData(['people-you-know'], response);
    setJustFoundCount(response.stats.matchedCount);
    setError(null);
    setIsGateOpen(false);
  };

  const discoverFromContacts = async (
    contacts: PeopleYouKnowImportInput[],
    source: 'picker' | 'file'
  ) => {
    setIsDiscovering(true);
    try {
      const response = await discoverPeopleYouKnow(contacts, source);
      persistDiscoveryResult(response);
    } catch (discoverError: unknown) {
      const failure = asPeopleDiscoveryError(discoverError);
      setError(failure.response?.data?.error || 'We could not find your people right now.');
    } finally {
      setIsDiscovering(false);
    }
  };

  const handlePickerContinue = async () => {
    const navigatorWithContacts = navigator as NavigatorWithContacts;

    if (!supportsContactPicker) {
      setError('Direct discovery is not available in this browser yet. Use a file instead.');
      return;
    }

    setIsDiscovering(true);
    setError(null);

    try {
      const selectedContacts = await navigatorWithContacts.contacts!.select(['name', 'email'], {
        multiple: true,
      });

      const contacts = selectedContacts.flatMap((contact) => {
        const name = contact.name?.find((value) => value.trim()) || null;
        return (contact.email || [])
          .filter((email) => email?.trim())
          .map((email) => ({
            name,
            email,
          }));
      });

      if (contacts.length === 0) {
        setIsDiscovering(false);
        return;
      }

      const response = await discoverPeopleYouKnow(contacts, 'picker');
      persistDiscoveryResult(response);
    } catch (pickerError: unknown) {
      const failure = asPeopleDiscoveryError(pickerError);
      if (failure.name === 'AbortError') {
        return;
      }
      setError(failure.response?.data?.error || 'We could not find your people right now.');
    } finally {
      setIsDiscovering(false);
    }
  };

  const handleFileSelected = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const contacts = parseCsv(text);
      if (contacts.length === 0) {
        setError('We could not find any email rows in that file yet.');
        return;
      }
      await discoverFromContacts(contacts, 'file');
    } catch {
      setError('We could not read that file right now.');
    }
  };

  const handleClear = async () => {
    setIsClearing(true);
    try {
      await clearPeopleYouKnow();
      queryClient.setQueryData(['people-you-know'], EMPTY_RESPONSE);
      setJustFoundCount(null);
      setError(null);
    } catch (clearError: unknown) {
      const failure = asPeopleDiscoveryError(clearError);
      setError(failure.response?.data?.error || 'We could not clear this list right now.');
    } finally {
      setIsClearing(false);
    }
  };

  const getInviteLink = async () => {
    if (shareLink) return shareLink;
    const response = await getShareLinks();
    setShareLink(response.link);
    return response.link;
  };

  const handleInvite = async (invite: PeopleYouKnowInvite) => {
    if (processingInviteId) return;

    setProcessingInviteId(invite.id);
    try {
      const link = await getInviteLink();

      if (navigator.share) {
        await navigator.share({
          title: 'Join me on Vormex',
          text: 'Come build your network with me on Vormex.',
          url: link,
        });
      } else {
        await navigator.clipboard.writeText(link);
      }

      const response = await markPeopleYouKnowInviteSent(invite.id);
      queryClient.setQueryData<PeopleYouKnowResponse>(['people-you-know'], (previous) => {
        if (!previous) return previous;
        return {
          ...previous,
          invites: previous.invites.map((entry) =>
            entry.id === invite.id ? { ...entry, invitedAt: response.invitedAt } : entry
          ),
        };
      });
    } catch (inviteError: unknown) {
      const failure = asPeopleDiscoveryError(inviteError);
      if (failure.name === 'AbortError') {
        return;
      }
      setError(failure.response?.data?.error || 'We could not share that invite right now.');
    } finally {
      setProcessingInviteId(null);
    }
  };

  const hasSavedResults = data.stats.totalContacts > 0;
  const hasMoreSavedResults =
    visibleCount < data.matched.length || visibleCount < data.invites.length;

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || !hasMoreSavedResults) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleCount((count) => count + 50);
      },
      { rootMargin: '300px 0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMoreSavedResults, visibleCount]);

  return (
    <KnownPeopleView
      data={data}
      error={error}
      fileInputRef={fileInputRef}
      handleClear={handleClear}
      handleConnectionChange={handleConnectionChange}
      handleFileSelected={handleFileSelected}
      handleInvite={handleInvite}
      handlePickerContinue={handlePickerContinue}
      hasMoreSavedResults={hasMoreSavedResults}
      hasSavedResults={hasSavedResults}
      isClearing={isClearing}
      isDiscovering={isDiscovering}
      isGateOpen={isGateOpen}
      isLoading={isLoading}
      justFoundCount={justFoundCount}
      loadMoreRef={loadMoreRef}
      processingInviteId={processingInviteId}
      setError={setError}
      setIsGateOpen={setIsGateOpen}
      setVisibleCount={setVisibleCount}
      supportsContactPicker={supportsContactPicker}
      visibleCount={visibleCount}
    />
  );
}

export default PeopleYouKnowTab;
