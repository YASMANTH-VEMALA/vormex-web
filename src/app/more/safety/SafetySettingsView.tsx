'use client';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type * as React from 'react';

interface SafetySettingsViewProps {
  StatusPill: ({ active, label }: { active: boolean; label: string }) => React.JSX.Element;
  blockManualUser: (event: React.FormEvent<Element>) => Promise<void>;
  blocks: import('@/lib/api/safety').UserBlock[];
  busy: string | null;
  confirmPhoneCode: (event: React.FormEvent<Element>) => Promise<void>;
  confirmStudentCode: (event: React.FormEvent<Element>) => Promise<void>;
  error: string | null;
  formatDate: (value: string | null | undefined) => string;
  identity: import('@/lib/api/identity').IdentitySummary | null;
  loading: boolean;
  manualBlockQuery: string;
  manualBlockResults: import('@/lib/api/mentions').MentionUser[];
  manualBlockSearching: boolean;
  manualBlockTarget: import('@/lib/api/mentions').MentionUser | null;
  message: string | null;
  pendingIdReview: import('@/lib/api/identity').IdentityVerificationRecord | undefined;
  phoneCode: string;
  phoneNumber: string;
  proofFile: File | null;
  reports: import('@/lib/api/reports').MyReport[];
  requestStudentCode: (event: React.FormEvent<Element>) => Promise<void>;
  sendPhoneCode: (event: React.FormEvent<Element>) => Promise<void>;
  setManualBlockQuery: React.Dispatch<React.SetStateAction<string>>;
  setManualBlockResults: React.Dispatch<
    React.SetStateAction<import('@/lib/api/mentions').MentionUser[]>
  >;
  setManualBlockTarget: React.Dispatch<
    React.SetStateAction<import('@/lib/api/mentions').MentionUser | null>
  >;
  setPhoneCode: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  setProofFile: React.Dispatch<React.SetStateAction<File | null>>;
  setStudentCode: React.Dispatch<React.SetStateAction<string>>;
  setStudentEmail: React.Dispatch<React.SetStateAction<string>>;
  studentCode: string;
  studentEmail: string;
  submitProof: (event: React.FormEvent<Element>) => Promise<void>;
  trustLabel: (level: string | undefined) => string;
  unblockUser: (userId: string) => Promise<void>;
}

export function SafetySettingsView({
  StatusPill,
  blockManualUser,
  blocks,
  busy,
  confirmPhoneCode,
  confirmStudentCode,
  error,
  formatDate,
  identity,
  loading,
  manualBlockQuery,
  manualBlockResults,
  manualBlockSearching,
  manualBlockTarget,
  message,
  pendingIdReview,
  phoneCode,
  phoneNumber,
  proofFile,
  reports,
  requestStudentCode,
  sendPhoneCode,
  setManualBlockQuery,
  setManualBlockResults,
  setManualBlockTarget,
  setPhoneCode,
  setPhoneNumber,
  setProofFile,
  setStudentCode,
  setStudentEmail,
  studentCode,
  studentEmail,
  submitProof,
  trustLabel,
  unblockUser,
}: SafetySettingsViewProps) {
  const input =
    'h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-gray-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white';
  const primary =
    'h-10 shrink-0 whitespace-nowrap rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50';
  const secondary =
    'h-10 shrink-0 whitespace-nowrap rounded-lg bg-gray-100 px-5 text-sm font-semibold text-gray-900 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700';
  const sectionTitle = 'text-base font-bold text-gray-900 dark:text-white';
  const sectionText = 'mt-1 text-sm text-gray-500 dark:text-neutral-400';

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white pb-28 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <main className="mx-auto max-w-xl px-4 pt-6">
          <div className="flex items-center gap-2">
            <Link
              href="/more"
              aria-label="Back to settings"
              className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold">Identity & safety</h1>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16 text-sm text-gray-500">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </div>
          ) : (
            <div className="mt-6 space-y-10">
              {message && (
                <p role="status" className="text-sm text-emerald-700 dark:text-emerald-400">
                  {message}
                </p>
              )}
              {error && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}

              <section aria-label="Verification status">
                <h2 className={sectionTitle}>Verification</h2>
                <p className={sectionText}>
                  Your trust level is{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {trustLabel(identity?.trustLevel)}
                  </span>
                  . Verifying more makes your profile more trusted.
                </p>
                <div className="mt-3 divide-y divide-gray-100 dark:divide-neutral-800">
                  <StatusPill active={Boolean(identity?.email.verified)} label="Email" />
                  <StatusPill active={Boolean(identity?.phone.verified)} label="Phone" />
                  <StatusPill
                    active={Boolean(
                      identity?.verifications.some(
                        (item) => item.type === 'STUDENT_EMAIL' && item.status === 'VERIFIED'
                      )
                    )}
                    label="Student email"
                  />
                  <StatusPill
                    active={Boolean(
                      identity?.verifications.some(
                        (item) => item.type === 'ID_DOCUMENT' && item.status === 'VERIFIED'
                      )
                    )}
                    label="ID"
                  />
                </div>
              </section>

              <section aria-label="Phone number">
                <h2 className={sectionTitle}>Phone number</h2>
                <p className={sectionText}>
                  {identity?.phone.masked
                    ? `Current number: ${identity.phone.masked}`
                    : 'Add a phone number to verify your account.'}
                </p>
                <form onSubmit={sendPhoneCode} className="mt-3 flex gap-2">
                  <input
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="+15551234567"
                    aria-label="Phone number"
                    className={input}
                  />
                  <button
                    type="submit"
                    disabled={busy === 'phone-send' || !phoneNumber.trim()}
                    className={primary}
                  >
                    {busy === 'phone-send' ? 'Sending' : 'Send code'}
                  </button>
                </form>
                <form onSubmit={confirmPhoneCode} className="mt-2 flex gap-2">
                  <input
                    value={phoneCode}
                    onChange={(event) => setPhoneCode(event.target.value)}
                    placeholder="6-digit code"
                    aria-label="Phone verification code"
                    className={input}
                  />
                  <button
                    type="submit"
                    disabled={busy === 'phone-confirm' || !phoneCode.trim()}
                    className={secondary}
                  >
                    {busy === 'phone-confirm' ? 'Verifying' : 'Verify'}
                  </button>
                </form>
                <div id="phone-recaptcha" />
              </section>

              <section aria-label="Student email">
                <h2 className={sectionTitle}>Student email</h2>
                <p className={sectionText}>Confirm you are a student with your college address.</p>
                <form onSubmit={requestStudentCode} className="mt-3 flex gap-2">
                  <input
                    value={studentEmail}
                    onChange={(event) => setStudentEmail(event.target.value)}
                    placeholder="name@college.edu"
                    type="email"
                    aria-label="Student email"
                    className={input}
                  />
                  <button
                    type="submit"
                    disabled={busy === 'student-request' || !studentEmail.trim()}
                    className={primary}
                  >
                    {busy === 'student-request' ? 'Sending' : 'Send code'}
                  </button>
                </form>
                <form onSubmit={confirmStudentCode} className="mt-2 flex gap-2">
                  <input
                    value={studentCode}
                    onChange={(event) => setStudentCode(event.target.value)}
                    placeholder="6-digit code"
                    aria-label="Student email verification code"
                    className={input}
                  />
                  <button
                    type="submit"
                    disabled={busy === 'student-confirm' || !studentCode.trim()}
                    className={secondary}
                  >
                    {busy === 'student-confirm' ? 'Verifying' : 'Verify'}
                  </button>
                </form>
              </section>

              <section aria-label="ID proof">
                <h2 className={sectionTitle}>
                  ID proof
                  {pendingIdReview && (
                    <span className="ml-2 text-sm font-normal text-amber-600 dark:text-amber-400">
                      Pending review
                    </span>
                  )}
                </h2>
                <p className={sectionText}>Upload a photo or PDF of a government or college ID.</p>
                <form onSubmit={submitProof} className="mt-3 space-y-2">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp,application/pdf"
                    aria-label="ID proof file"
                    onChange={(event) => setProofFile(event.target.files?.[0] ?? null)}
                    className="block w-full text-sm text-gray-700 file:mr-3 file:h-9 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-gray-200 dark:text-neutral-300 dark:file:bg-neutral-800 dark:file:text-white"
                  />
                  <button
                    type="submit"
                    disabled={busy === 'id-submit' || !proofFile}
                    className={primary}
                  >
                    {busy === 'id-submit' ? 'Submitting' : 'Submit proof'}
                  </button>
                </form>
              </section>

              <section id="blocked" aria-label="Blocked accounts" className="scroll-mt-6">
                <h2 className={sectionTitle}>Blocked accounts</h2>
                <p className={sectionText}>
                  Blocked people cannot message you or see your profile.
                </p>
                <form onSubmit={blockManualUser} className="mt-3 flex items-start gap-2">
                  <div className="relative flex-1">
                    <input
                      value={manualBlockQuery}
                      onChange={(event) => {
                        setManualBlockQuery(event.target.value);
                        setManualBlockTarget(null);
                      }}
                      placeholder="Search by name or @username"
                      aria-label="Find an account to block"
                      autoComplete="off"
                      className={input}
                    />
                    {manualBlockSearching && (
                      <Loader2 className="absolute right-3 top-3 h-4 w-4 animate-spin text-gray-400" />
                    )}
                    {manualBlockTarget && (
                      <p className="mt-2 text-xs text-gray-500 dark:text-neutral-400">
                        Selected: {manualBlockTarget.name} (@{manualBlockTarget.username})
                      </p>
                    )}
                    {!manualBlockTarget && manualBlockResults.length > 0 && (
                      <div className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 dark:border-neutral-700 dark:bg-neutral-900">
                        {manualBlockResults
                          .filter(
                            (candidate) =>
                              !blocks.some((block) => block.blockedUserId === candidate.id)
                          )
                          .map((candidate) => (
                            <button
                              key={candidate.id}
                              type="button"
                              onClick={() => {
                                setManualBlockTarget(candidate);
                                setManualBlockQuery(`@${candidate.username}`);
                                setManualBlockResults([]);
                              }}
                              className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-neutral-800"
                            >
                              <div className="relative h-9 w-9 flex-none overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                                {candidate.profileImage || candidate.avatar ? (
                                  <Image
                                    src={candidate.profileImage || candidate.avatar || ''}
                                    alt=""
                                    fill
                                    sizes="36px"
                                    className="object-cover"
                                  />
                                ) : null}
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-semibold">{candidate.name}</p>
                                <p className="truncate text-xs text-gray-500 dark:text-neutral-400">
                                  @{candidate.username}
                                </p>
                              </div>
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={busy === 'block-user' || !manualBlockTarget}
                    className="h-10 rounded-lg bg-red-600 px-5 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {busy === 'block-user' ? 'Blocking' : 'Block'}
                  </button>
                </form>

                <div className="mt-2">
                  {blocks.length === 0 ? (
                    <p className="py-3 text-sm text-gray-500 dark:text-neutral-400">
                      You haven&apos;t blocked anyone.
                    </p>
                  ) : (
                    blocks.map((block) => (
                      <div key={block.id} className="flex items-center gap-3 py-3">
                        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">
                          {block.user.profileImage ? (
                            <Image
                              src={block.user.profileImage}
                              alt=""
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          ) : null}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold">
                            {block.user.name || block.user.username}
                          </p>
                          <p className="truncate text-xs text-gray-500 dark:text-neutral-400">
                            @{block.user.username} · {trustLabel(block.user.identityTrustLevel)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => unblockUser(block.blockedUserId)}
                          disabled={busy === `unblock-${block.blockedUserId}`}
                          className={`${secondary} h-9 min-w-24 px-4`}
                        >
                          {busy === `unblock-${block.blockedUserId}` ? 'Unblocking…' : 'Unblock'}
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </section>

              <section aria-label="Report history">
                <h2 className={sectionTitle}>Your reports</h2>
                <div className="mt-2 divide-y divide-gray-100 dark:divide-neutral-800">
                  {reports.length === 0 ? (
                    <p className="py-3 text-sm text-gray-500 dark:text-neutral-400">
                      You haven&apos;t reported anything.
                    </p>
                  ) : (
                    reports.map((report) => (
                      <div key={report.id} className="py-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold">{report.reason}</p>
                          <span className="text-xs capitalize text-gray-500 dark:text-neutral-400">
                            {report.status.replace('_', ' ').toLowerCase()}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                          {report.reportType} · {formatDate(report.createdAt)}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
