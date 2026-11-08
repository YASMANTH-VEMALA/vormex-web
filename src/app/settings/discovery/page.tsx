'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import {
  getMyDiscoveryVisibility,
  updateMyDiscoveryVisibility,
  type DiscoveryVisibility,
} from '@/lib/api/publicDiscovery';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Field = 'webDiscoveryEnabled' | 'aiDiscoveryEnabled';

function SwitchRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6 py-4">
      <div className="min-w-0">
        <p id={`${title}-label`} className="text-sm font-semibold">
          {title}
        </p>
        <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-neutral-400">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${title}-label`}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-60 dark:focus-visible:ring-offset-neutral-950 ${
          checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-neutral-700'
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

export default function DiscoverySettingsPage() {
  const [visibility, setVisibility] = useState<DiscoveryVisibility | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    void getMyDiscoveryVisibility()
      .then(setVisibility)
      .catch(() => setMessage('Could not load discovery settings.'));
  }, []);

  const update = async (field: Field, enabled: boolean) => {
    if (!visibility || saving) return;
    const previous = visibility;
    setVisibility({ ...visibility, [field]: enabled });
    setSaving(true);
    setMessage('');
    try {
      const next = await updateMyDiscoveryVisibility({ [field]: enabled });
      setVisibility(next);
      setMessage(
        'Saved. Search engines and AI results will refresh as their caches update.'
      );
    } catch {
      setVisibility(previous);
      setMessage('Could not save that setting. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-white px-4 pb-28 pt-6 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center gap-2">
            <Link
              href="/more"
              aria-label="Back to settings"
              className="-ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold">Public search & AI discovery</h1>
          </div>

          <p className="mt-4 text-sm leading-5 text-gray-500 dark:text-neutral-400">
            Control whether your public profile can appear on search engines and in read-only AI
            recommendations.
          </p>

          {!visibility ? (
            <div className="flex justify-center py-14">
              {message ? (
                <p className="text-sm text-gray-500" role="status">
                  {message}
                </p>
              ) : (
                <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
              )}
            </div>
          ) : (
            <>
              <div className="mt-4">
                <SwitchRow
                  title="Search engine discovery"
                  description="Allow your public profile page to be indexed by Google, Bing and search-enabled assistants."
                  checked={visibility.webDiscoveryEnabled}
                  disabled={saving}
                  onChange={(value) => void update('webDiscoveryEnabled', value)}
                />
                <SwitchRow
                  title="AI people recommendations"
                  description="Allow Vormex's public discovery API and MCP integration to recommend your profile for relevant goals."
                  checked={visibility.aiDiscoveryEnabled}
                  disabled={saving}
                  onChange={(value) => void update('aiDiscoveryEnabled', value)}
                />
              </div>

              <p className="mt-6 text-xs leading-5 text-gray-500 dark:text-neutral-400">
                Vormex never shares your email, phone number, private messages, connections,
                contact imports or precise location through public discovery.
              </p>
              {message && (
                <p className="mt-3 text-xs text-gray-500 dark:text-neutral-400" role="status">
                  {message}
                </p>
              )}
            </>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
