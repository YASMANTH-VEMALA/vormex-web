import type { Socket } from 'socket.io-client';
const CHAT_CONNECT_GRACE_MS = 10_000;
const CHAT_AUTH_GRACE_MS = 5_000;

export class ChatSocketError extends Error {
  code?: string;
  retryable?: boolean;

  constructor(message: string, code?: string, retryable?: boolean) {
    super(message);
    this.name = 'ChatSocketError';
    this.code = code;
    this.retryable = retryable;
  }
}

export function waitForSocketConnect(
  sock: Socket,
  timeoutMs = CHAT_CONNECT_GRACE_MS
): Promise<boolean> {
  if (sock.connected) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    let settled = false;

    function finish(connected: boolean) {
      if (settled) {
        return;
      }

      settled = true;
      clearTimeout(timer);
      sock.off('connect', handleConnect);
      sock.off('connect_error', handleConnectError);
      resolve(connected);
    }

    function handleConnect() {
      finish(true);
    }

    function handleConnectError() {
      finish(false);
    }

    const timer = setTimeout(() => finish(false), timeoutMs);

    sock.once('connect', handleConnect);
    sock.once('connect_error', handleConnectError);
    sock.connect();
  });
}

export function waitForSocketReady(
  sock: Socket,
  state: { authenticated: boolean },
  timeoutMs = CHAT_AUTH_GRACE_MS
): Promise<boolean> {
  if (sock.connected && state.authenticated) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    let settled = false;

    function finish(ready: boolean) {
      if (settled) {
        return;
      }

      settled = true;
      clearTimeout(timer);
      sock.off('socket:authenticated', handleAuthenticated);
      sock.off('socket:unauthenticated', handleUnauthenticated);
      sock.off('connect_error', handleConnectError);
      sock.off('disconnect', handleDisconnect);
      resolve(ready);
    }

    function handleAuthenticated() {
      state.authenticated = true;
      finish(true);
    }

    function handleUnauthenticated() {
      state.authenticated = false;
      finish(false);
    }

    function handleConnectError() {
      state.authenticated = false;
      finish(false);
    }

    function handleDisconnect() {
      state.authenticated = false;
      finish(false);
    }

    const timer = setTimeout(() => finish(false), timeoutMs);

    sock.once('socket:authenticated', handleAuthenticated);
    sock.once('socket:unauthenticated', handleUnauthenticated);
    sock.once('connect_error', handleConnectError);
    sock.once('disconnect', handleDisconnect);

    if (!sock.connected) {
      sock.connect();
    } else if (state.authenticated) {
      finish(true);
    }
  });
}
