'use client';

import { useAppInstall } from '@/components/providers/AppInstallProvider';
import { Check, Download, MonitorSmartphone } from 'lucide-react';
import { useState } from 'react';

function getInstallInstructions() {
  const userAgent = navigator.userAgent;
  const ios =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (ios)
    return 'Open Vormex in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if shown, then tap Add.';
  if (/Android/i.test(userAgent))
    return 'Open Vormex in Chrome, tap the three-dot menu, then Add to Home screen → Install. If you are in another app’s browser, open this page in Chrome first.';
  return 'In Chrome or Edge, use the install icon in the address bar, or open the browser menu and choose Install Vormex / Install this site as an app. On Safari for Mac, choose File → Add to Dock. If installation is unavailable, try Chrome or Edge, or check whether Vormex is already installed.';
}

export function DownloadAppCard() {
  const { installed, install } = useAppInstall();
  const [busy, setBusy] = useState(false);
  const [instructions, setInstructions] = useState<string | null>(null);

  async function handleInstall() {
    setBusy(true);
    setInstructions(null);
    try {
      const result = await install();
      if (result === 'unavailable') setInstructions(getInstallInstructions());
      if (result === 'accepted')
        setInstructions('Finish installing in your browser. Vormex will appear with your apps.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      aria-label="Download Vormex"
      className="rounded-2xl border border-blue-100 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <MonitorSmartphone className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-white">Vormex, one tap away</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
              Add the app to your phone or desktop.
            </p>
          </div>
        </div>
        <button
          onClick={handleInstall}
          disabled={installed || busy}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-default disabled:opacity-60"
        >
          {installed ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
          {installed ? 'App installed' : busy ? 'Opening…' : 'Download app'}
        </button>
      </div>
      {!installed && instructions && (
        <p
          role="status"
          className="mt-4 border-t border-gray-100 pt-4 text-sm leading-6 text-gray-600 dark:border-neutral-800 dark:text-neutral-400"
        >
          {instructions}
        </p>
      )}
    </section>
  );
}
