'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type InstallResult = 'accepted' | 'dismissed' | 'unavailable';
const AppInstallContext = createContext<{
  installed: boolean;
  install: () => Promise<InstallResult>;
} | null>(null);

function isInstalled() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone)
  );
}

function subscribeInstalled(onChange: () => void) {
  const standalone = window.matchMedia('(display-mode: standalone)');
  const fullscreen = window.matchMedia('(display-mode: fullscreen)');
  standalone.addEventListener('change', onChange);
  fullscreen.addEventListener('change', onChange);
  return () => {
    standalone.removeEventListener('change', onChange);
    fullscreen.removeEventListener('change', onChange);
  };
}

// Capture the prompt on every route, including before the user visits More.
export function AppInstallProvider({ children }: { children: React.ReactNode }) {
  const promptRef = useRef<InstallPromptEvent | null>(null);
  const standalone = useSyncExternalStore(subscribeInstalled, isInstalled, () => false);
  const [installedHere, setInstalledHere] = useState(false);

  useEffect(() => {
    function onPrompt(event: Event) {
      event.preventDefault();
      promptRef.current = event as InstallPromptEvent;
    }
    function onInstalled() {
      promptRef.current = null;
      setInstalledHere(true);
    }
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  async function install(): Promise<InstallResult> {
    const prompt = promptRef.current;
    if (!prompt) return 'unavailable';
    promptRef.current = null;
    try {
      await prompt.prompt();
      return (await prompt.userChoice).outcome;
    } catch {
      return 'unavailable';
    }
  }

  return (
    <AppInstallContext.Provider value={{ installed: standalone || installedHere, install }}>
      {children}
    </AppInstallContext.Provider>
  );
}

export function useAppInstall() {
  const context = useContext(AppInstallContext);
  if (!context) throw new Error('useAppInstall requires AppInstallProvider');
  return context;
}
