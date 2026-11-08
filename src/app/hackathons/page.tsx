'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { asApiError } from '@/lib/api/errors';
import { hackathonsAPI, type Hackathon, type HackathonTeam } from '@/lib/api/hackathons';
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  MapPin,
  Plus,
  Search,
  Trophy,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const STATUS_FILTERS = [
  { id: 'open', label: 'Open' },
  { id: 'active', label: 'Active' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'past', label: 'Past' },
];

const STATUS_STYLES: Record<string, string> = {
  open: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  active: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
  upcoming: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  past: 'bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-neutral-300',
};

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function dateParts(value: string): { month: string; day: string } | null {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return {
    month: date.toLocaleDateString(undefined, { month: 'short' }),
    day: String(date.getDate()),
  };
}

function Tags({ values, max = 5 }: { values: string[]; max?: number }) {
  const unique = Array.from(new Set(values));
  if (unique.length === 0) return null;
  const extra = unique.length - max;
  return (
    <>
      {unique.slice(0, max).map((value) => (
        <span
          key={value}
          className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-neutral-300"
        >
          {value}
        </span>
      ))}
      {extra > 0 && <span className="px-1 py-0.5 text-xs text-gray-500">+{extra}</span>}
    </>
  );
}

function TeamPanel({
  hackathon,
  teams,
  loading,
  onApply,
}: {
  hackathon: Hackathon;
  teams: HackathonTeam[];
  loading: boolean;
  onApply: (teamId: string) => void;
}) {
  return (
    <div className="mt-5 border-t border-gray-100 pt-4 dark:border-neutral-800">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Teams for {hackathon.title}</h3>
        <span className="text-xs text-gray-500 dark:text-neutral-400">{teams.length} listed</span>
      </div>
      {loading ? (
        <div className="space-y-2" aria-busy="true">
          {[0, 1].map((i) => (
            <div key={i} className="h-14 animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800" />
          ))}
        </div>
      ) : teams.length === 0 ? (
        <p className="py-3 text-sm text-gray-500 dark:text-neutral-400">
          No teams yet. Be the first to form one.
        </p>
      ) : (
        <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
          {teams.map((team) => (
            <li key={team.id} className="flex flex-wrap items-start justify-between gap-3 py-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{team.name}</p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                  {team.memberCount}/{team.maxMembers} members ·{' '}
                  <span className="capitalize">{team.status}</span>
                </p>
                {team.pitch && (
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-neutral-400">{team.pitch}</p>
                )}
                {team.requiredSkills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <Tags values={team.requiredSkills} max={4} />
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => onApply(team.id)}
                disabled={team.status !== 'open' || Boolean(team.myApplication)}
                className="h-8 shrink-0 rounded-lg border border-gray-300 px-3 text-xs font-semibold capitalize text-gray-800 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
              >
                {team.myApplication ? team.myApplication.status : 'Apply'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function HackathonSkeleton() {
  return (
    <div className="flex animate-pulse gap-4 py-5 border-b border-gray-100 dark:border-neutral-800">
      <div className="h-14 w-14 shrink-0 rounded-lg bg-gray-100 dark:bg-neutral-800" />
      <div className="flex-1 space-y-3">
        <div className="h-4 w-1/3 rounded bg-gray-100 dark:bg-neutral-800" />
        <div className="h-3 w-3/4 rounded bg-gray-100 dark:bg-neutral-800" />
        <div className="h-3 w-1/2 rounded bg-gray-100 dark:bg-neutral-800" />
      </div>
    </div>
  );
}

export default function HackathonsPage() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [myTeamsCount, setMyTeamsCount] = useState(0);
  const [myApplicationsCount, setMyApplicationsCount] = useState(0);
  const [status, setStatus] = useState('open');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [teamsByHackathon, setTeamsByHackathon] = useState<Record<string, HackathonTeam[]>>({});
  const [busyId, setBusyId] = useState<string | null>(null);

  const loadHackathons = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [board, mine] = await Promise.all([
        hackathonsAPI.list({ status, search, limit: 30 }),
        hackathonsAPI.getMyTeams().catch(() => ({ teams: [], applications: [] })),
      ]);
      setHackathons(board.hackathons);
      setMyTeamsCount(mine.teams.length);
      setMyApplicationsCount(mine.applications.length);
    } catch (err: unknown) {
      const apiError = asApiError(err);
      setError(apiError.response?.data?.error || apiError.message || 'Could not load hackathons.');
    } finally {
      setLoading(false);
    }
  }, [search, status]);

  useEffect(() => {
    const handle = window.setTimeout(loadHackathons, 250);
    return () => window.clearTimeout(handle);
  }, [loadHackathons]);

  const toggleSave = async (hackathon: Hackathon) => {
    setBusyId(hackathon.id);
    try {
      const response = hackathon.isSaved
        ? await hackathonsAPI.unsave(hackathon.id)
        : await hackathonsAPI.save(hackathon.id);
      setHackathons((current) =>
        current.map((item) =>
          item.id === hackathon.id
            ? {
                ...item,
                isSaved: response.saved,
                savesCount: Math.max(0, item.savesCount + (response.saved ? 1 : -1)),
              }
            : item
        )
      );
    } catch (err: unknown) {
      const apiError = asApiError(err);
      setError(
        apiError.response?.data?.error || apiError.message || 'Could not update saved hackathon.'
      );
    } finally {
      setBusyId(null);
    }
  };

  const toggleTeams = async (hackathonId: string) => {
    setExpandedId((current) => (current === hackathonId ? null : hackathonId));
    if (teamsByHackathon[hackathonId]) return;
    setBusyId(hackathonId);
    try {
      const response = await hackathonsAPI.getTeams(hackathonId);
      setTeamsByHackathon((current) => ({ ...current, [hackathonId]: response.teams }));
    } catch (err: unknown) {
      const apiError = asApiError(err);
      setError(apiError.response?.data?.error || apiError.message || 'Could not load teams.');
    } finally {
      setBusyId(null);
    }
  };

  const formTeam = async (hackathon: Hackathon) => {
    setBusyId(hackathon.id);
    try {
      const response = await hackathonsAPI.formTeam(hackathon.id, {
        name: `${hackathon.title} team`,
        pitch: 'Looking for focused teammates to build and ship.',
        requiredSkills: hackathon.skills.slice(0, 5),
        maxMembers: hackathon.teamMax,
      });
      setTeamsByHackathon((current) => ({
        ...current,
        [hackathon.id]: [response.team, ...(current[hackathon.id] || [])],
      }));
      setHackathons((current) =>
        current.map((item) =>
          item.id === hackathon.id ? { ...item, myTeam: response.team } : item
        )
      );
      setExpandedId(hackathon.id);
    } catch (err: unknown) {
      const apiError = asApiError(err);
      setError(apiError.response?.data?.error || apiError.message || 'Could not form team.');
    } finally {
      setBusyId(null);
    }
  };

  const applyToTeam = async (teamId: string) => {
    setBusyId(teamId);
    try {
      await hackathonsAPI.applyToTeam(teamId, {
        role: 'Contributor',
        message: 'I would like to join this team.',
      });
      await loadHackathons();
    } catch (err: unknown) {
      const apiError = asApiError(err);
      setError(apiError.response?.data?.error || apiError.message || 'Could not apply to team.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-white pb-28 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <header className="border-b border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mx-auto max-w-2xl px-4 pt-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="/more"
                  className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  aria-label="Back to More"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <div>
                  <h1 className="text-lg font-semibold">Hackathons</h1>
                  <p className="text-sm text-gray-500 dark:text-neutral-400">
                    Find events, form teams and join builders.
                  </p>
                </div>
              </div>
              <dl className="hidden items-center gap-6 text-right sm:flex">
                <div>
                  <dt className="text-xs text-gray-500 dark:text-neutral-400">My teams</dt>
                  <dd className="text-base font-semibold tabular-nums">{myTeamsCount}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500 dark:text-neutral-400">Applications</dt>
                  <dd className="text-base font-semibold tabular-nums">{myApplicationsCount}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <nav
                className="scrollbar-hide -mb-px flex gap-1 overflow-x-auto"
                aria-label="Hackathon status"
              >
                {STATUS_FILTERS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-current={status === item.id ? 'page' : undefined}
                    onClick={() => setStatus(item.id)}
                    className={`border-b-2 px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                      status === item.id
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <label className="relative mb-3 block sm:mb-2 sm:w-72">
                <span className="sr-only">Search hackathons</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search hackathons"
                  className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:focus:bg-neutral-900"
                />
              </label>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-2xl space-y-4 px-4 py-6 sm:px-6">
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300"
            >
              {error}
            </div>
          )}

          {loading ? (
            <div className="space-y-4" aria-busy="true">
              {[0, 1, 2].map((i) => (
                <HackathonSkeleton key={i} />
              ))}
            </div>
          ) : hackathons.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <Trophy className="mx-auto h-8 w-8 text-gray-400" />
              <h2 className="mt-3 text-base font-semibold">No hackathons found</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                Try a different search or status.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {hackathons.map((hackathon) => {
                const start = dateParts(hackathon.startsAt);
                return (
                  <li key={hackathon.id}>
                    <article className="py-5 border-b border-gray-100 dark:border-neutral-800">
                      <div className="flex gap-4">
                        <div
                          className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-neutral-700 dark:bg-neutral-800"
                          aria-hidden="true"
                        >
                          {start ? (
                            <>
                              <span className="text-[11px] font-medium uppercase text-gray-500 dark:text-neutral-400">
                                {start.month}
                              </span>
                              <span className="text-lg font-semibold leading-none">{start.day}</span>
                            </>
                          ) : (
                            <Trophy className="h-5 w-5 text-gray-400" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-base font-semibold">{hackathon.title}</h2>
                                <span
                                  className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                                    STATUS_STYLES[hackathon.status] || STATUS_STYLES.past
                                  }`}
                                >
                                  {hackathon.status}
                                </span>
                              </div>
                              {hackathon.source && (
                                <p className="mt-0.5 text-xs text-gray-500 dark:text-neutral-400">
                                  {hackathon.source}
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => toggleSave(hackathon)}
                              disabled={busyId === hackathon.id}
                              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-800"
                              aria-label={hackathon.isSaved ? 'Unsave hackathon' : 'Save hackathon'}
                              aria-pressed={hackathon.isSaved}
                            >
                              {hackathon.isSaved ? (
                                <BookmarkCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              ) : (
                                <Bookmark className="h-5 w-5" />
                              )}
                            </button>
                          </div>

                          <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-neutral-400">
                            {hackathon.description}
                          </p>

                          <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-gray-600 dark:text-neutral-400">
                            <div className="flex items-center gap-1.5">
                              <dt className="sr-only">Dates</dt>
                              <dd>
                                {formatDate(hackathon.startsAt)} – {formatDate(hackathon.endsAt)}
                              </dd>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <dt className="sr-only">Location</dt>
                              <MapPin className="h-4 w-4 text-gray-400" aria-hidden="true" />
                              <dd>
                                {hackathon.isOnline
                                  ? 'Online'
                                  : hackathon.location || hackathon.college || 'Venue to be announced'}
                              </dd>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <dt className="sr-only">Teams</dt>
                              <Users className="h-4 w-4 text-gray-400" aria-hidden="true" />
                              <dd>{hackathon.teamsCount} teams</dd>
                            </div>
                          </dl>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            <Tags values={[...hackathon.skills, ...hackathon.tags]} />
                          </div>

                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => formTeam(hackathon)}
                              disabled={Boolean(hackathon.myTeam) || busyId === hackathon.id}
                              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {!hackathon.myTeam && <Plus className="h-4 w-4" />}
                              {hackathon.myTeam ? 'Team formed' : 'Form a team'}
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleTeams(hackathon.id)}
                              aria-expanded={expandedId === hackathon.id}
                              className="inline-flex h-9 items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
                            >
                              {expandedId === hackathon.id ? 'Hide teams' : 'Browse teams'}
                            </button>
                            {hackathon.sourceUrl && (
                              <a
                                href={hackathon.sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/30"
                              >
                                Event page
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>

                          {expandedId === hackathon.id && (
                            <TeamPanel
                              hackathon={hackathon}
                              teams={teamsByHackathon[hackathon.id] || []}
                              loading={
                                busyId === hackathon.id && !teamsByHackathon[hackathon.id]
                              }
                              onApply={applyToTeam}
                            />
                          )}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
