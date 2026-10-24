import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
  type MessagePayload,
  type Messaging,
} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp | null = null;
let messaging: Messaging | null = null;

/**
 * Initialize Firebase app (singleton, client-side only)
 */
export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === 'undefined') return null;
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;

  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }
  return app;
}

/**
 * Get Firebase Cloud Messaging instance
 * Returns null if not supported (SSR, no permission, missing config)
 */
export async function getFirebaseMessaging(): Promise<Messaging | null> {
  if (typeof window === 'undefined') return null;

  const supported = await isSupported();
  if (!supported) return null;

  const firebaseApp = getFirebaseApp();
  if (!firebaseApp) return null;

  if (!messaging) {
    messaging = getMessaging(firebaseApp);
  }
  return messaging;
}

/**
 * Request notification permission and get FCM token
 * Returns the token string, or null if denied/unsupported
 */
export async function requestNotificationToken(): Promise<string | null> {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return null;

    const msg = await getFirebaseMessaging();
    if (!msg) return null;

    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
    if (!vapidKey) {
      console.warn('NEXT_PUBLIC_FIREBASE_VAPID_KEY not set');
      return null;
    }

    const token = await getToken(msg, {
      vapidKey,
      serviceWorkerRegistration: await navigator.serviceWorker.register(
        '/firebase-messaging-sw.js'
      ),
    });

    return token;
  } catch (err) {
    console.error('Failed to get notification token:', err);
    return null;
  }
}

/**
 * Listen for foreground messages
 */
export function onForegroundMessage(
  callback: (payload: MessagePayload) => void
): (() => void) | null {
  if (typeof window === 'undefined') return null;

  let disposed = false;
  let unsubscribe: (() => void) | undefined;
  void getFirebaseMessaging()
    .then((msg) => {
      if (!msg || disposed) return;
      unsubscribe = onMessage(msg, callback);
    })
    .catch((error) => console.error('Could not initialize foreground notifications:', error));

  return () => {
    disposed = true;
    unsubscribe?.();
  };
}
