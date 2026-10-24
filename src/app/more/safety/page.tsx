'use client';
import { SafetySettingsView } from './SafetySettingsView';

import { identityAPI, type IdentitySummary } from '@/lib/api/identity';
import { searchUsersForMention, type MentionUser } from '@/lib/api/mentions';
import { reportAPI, type MyReport } from '@/lib/api/reports';
import { safetyAPI, type UserBlock } from '@/lib/api/safety';
import { useAuth } from '@/lib/auth/useAuth';
import { getFirebaseApp } from '@/lib/firebase';
import {
  refreshSafetySensitiveQueries,
  removeUnavailableConversations,
} from '@/lib/safety/clientCleanup';
import { useQueryClient } from '@tanstack/react-query';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  type ConfirmationResult,
} from 'firebase/auth';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

function getErrorMessage(error: unknown): string {
  const data = (error as { response?: { data?: { error?: string; message?: string } } })?.response
    ?.data;
  if (data?.error) return data.error;
  if (data?.message) return data.message;
  if (error instanceof Error) return error.message;
  return 'Something went wrong';
}

function formatDate(value: string | null | undefined): string {
  if (!value) return 'Not set';
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(
    new Date(value)
  );
}

function trustLabel(level: string | undefined): string {
  switch (level) {
    case 'ID_VERIFIED':
      return 'ID verified';
    case 'STUDENT_VERIFIED':
      return 'Student verified';
    case 'PHONE_VERIFIED':
      return 'Phone verified';
    case 'EMAIL_VERIFIED':
      return 'Email verified';
    default:
      return 'Basic';
  }
}

function StatusPill({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        active
          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
          : 'bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-neutral-400'
      }`}
    >
      {active ? (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ) : (
        <AlertTriangle className="h-3.5 w-3.5" />
      )}
      {label}
    </span>
  );
}

export default function SafetySettingsPage() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [identity, setIdentity] = useState<IdentitySummary | null>(null);
  const [blocks, setBlocks] = useState<UserBlock[]>([]);
  const [reports, setReports] = useState<MyReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneConfirmation, setPhoneConfirmation] = useState<ConfirmationResult | null>(null);
  const [studentEmail, setStudentEmail] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [manualBlockQuery, setManualBlockQuery] = useState('');
  const [manualBlockTarget, setManualBlockTarget] = useState<MentionUser | null>(null);
  const [manualBlockResults, setManualBlockResults] = useState<MentionUser[]>([]);
  const [manualBlockSearching, setManualBlockSearching] = useState(false);
  const recaptchaRef = useRef<RecaptchaVerifier | null>(null);

  const pendingIdReview = useMemo(
    () =>
      identity?.verifications.find(
        (item) => item.type === 'ID_DOCUMENT' && item.status === 'PENDING'
      ),
    [identity]
  );

  const refresh = useCallback(async () => {
    const [identityResponse, blocksResponse, reportsResponse] = await Promise.all([
      identityAPI.getMe(),
      safetyAPI.getBlocks(),
      reportAPI.getMyReports(1, 10),
    ]);
    setIdentity(identityResponse.identity);
    setBlocks(blocksResponse.blocks);
    setReports(reportsResponse.reports);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      void refresh()
        .catch((err) => {
          if (!cancelled) setError(getErrorMessage(err));
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      recaptchaRef.current?.clear();
      recaptchaRef.current = null;
    };
  }, [refresh]);

  useEffect(() => {
    const query = manualBlockQuery.trim();
    let cancelled = false;
    const timer = window.setTimeout(
      () => {
        if (query.length < 2 || manualBlockTarget) {
          setManualBlockResults([]);
          setManualBlockSearching(false);
          return;
        }
        setManualBlockSearching(true);
        void searchUsersForMention(query, 8)
          .then((response) => {
            if (!cancelled) {
              setManualBlockResults(
                response.users.filter((candidate) => candidate.id !== user?.id)
              );
            }
          })
          .catch(() => {
            if (!cancelled) setManualBlockResults([]);
          })
          .finally(() => {
            if (!cancelled) setManualBlockSearching(false);
          });
      },
      query.length >= 2 ? 250 : 0
    );
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [manualBlockQuery, manualBlockTarget, user?.id]);

  const runAction = async (key: string, action: () => Promise<string | void>) => {
    setBusy(key);
    setError(null);
    setMessage(null);
    try {
      const nextMessage = await action();
      await refresh();
      if (nextMessage) setMessage(nextMessage);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setBusy(null);
    }
  };

  const sendPhoneCode = async (event: FormEvent) => {
    event.preventDefault();
    await runAction('phone-send', async () => {
      const app = getFirebaseApp();
      if (!app) throw new Error('Firebase phone verification is not configured.');
      const auth = getAuth(app);
      if (!recaptchaRef.current) {
        recaptchaRef.current = new RecaptchaVerifier(auth, 'phone-recaptcha', {
          size: 'invisible',
        });
      }
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber.trim(),
        recaptchaRef.current
      );
      setPhoneConfirmation(confirmation);
      return 'Code sent.';
    });
  };

  const confirmPhoneCode = async (event: FormEvent) => {
    event.preventDefault();
    await runAction('phone-confirm', async () => {
      if (!phoneConfirmation) throw new Error('Send a phone code first.');
      const credential = await phoneConfirmation.confirm(phoneCode.trim());
      const idToken = await credential.user.getIdToken(true);
      const response = await identityAPI.verifyPhone(idToken);
      setPhoneCode('');
      setPhoneConfirmation(null);
      return response.message;
    });
  };

  const requestStudentCode = async (event: FormEvent) => {
    event.preventDefault();
    await runAction('student-request', async () => {
      const response = await identityAPI.requestStudentEmail(studentEmail.trim());
      return response.message;
    });
  };

  const confirmStudentCode = async (event: FormEvent) => {
    event.preventDefault();
    await runAction('student-confirm', async () => {
      const response = await identityAPI.confirmStudentEmail(
        studentEmail.trim(),
        studentCode.trim()
      );
      setStudentCode('');
      return response.message;
    });
  };

  const submitProof = async (event: FormEvent) => {
    event.preventDefault();
    await runAction('id-submit', async () => {
      if (!proofFile) throw new Error('Choose an ID or student proof file.');
      const upload = await identityAPI.requestIdUpload();
      const response = await identityAPI.submitIdProof(upload.verificationId, proofFile);
      setProofFile(null);
      return response.message;
    });
  };

  const blockManualUser = async (event: FormEvent) => {
    event.preventDefault();
    await runAction('block-user', async () => {
      if (!manualBlockTarget) throw new Error('Select a user from the search results first.');
      const response = await safetyAPI.blockUser(
        manualBlockTarget.id,
        'Manual block from safety settings'
      );
      if (user?.id) {
        await removeUnavailableConversations({
          queryClient,
          ownerId: user.id,
          conversationIds: response.effects?.affectedConversationIds ?? [],
        });
      }
      await refreshSafetySensitiveQueries(queryClient, user?.id);
      setManualBlockQuery('');
      setManualBlockTarget(null);
      setManualBlockResults([]);
      return 'User blocked.';
    });
  };

  const unblockUser = async (userId: string) => {
    await runAction(`unblock-${userId}`, async () => {
      await safetyAPI.unblockUser(userId);
      await refreshSafetySensitiveQueries(queryClient, user?.id);
      return 'User unblocked.';
    });
  };

  return (
    <SafetySettingsView
      StatusPill={StatusPill}
      blockManualUser={blockManualUser}
      blocks={blocks}
      busy={busy}
      confirmPhoneCode={confirmPhoneCode}
      confirmStudentCode={confirmStudentCode}
      error={error}
      formatDate={formatDate}
      identity={identity}
      loading={loading}
      manualBlockQuery={manualBlockQuery}
      manualBlockResults={manualBlockResults}
      manualBlockSearching={manualBlockSearching}
      manualBlockTarget={manualBlockTarget}
      message={message}
      pendingIdReview={pendingIdReview}
      phoneCode={phoneCode}
      phoneNumber={phoneNumber}
      proofFile={proofFile}
      reports={reports}
      requestStudentCode={requestStudentCode}
      sendPhoneCode={sendPhoneCode}
      setManualBlockQuery={setManualBlockQuery}
      setManualBlockResults={setManualBlockResults}
      setManualBlockTarget={setManualBlockTarget}
      setPhoneCode={setPhoneCode}
      setPhoneNumber={setPhoneNumber}
      setProofFile={setProofFile}
      setStudentCode={setStudentCode}
      setStudentEmail={setStudentEmail}
      studentCode={studentCode}
      studentEmail={studentEmail}
      submitProof={submitProof}
      trustLabel={trustLabel}
      unblockUser={unblockUser}
    />
  );
}
