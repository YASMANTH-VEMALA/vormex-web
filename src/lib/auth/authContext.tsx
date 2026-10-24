'use client';

import { authAPI } from '@/lib/api/auth';
import { clearChatBrowserCache } from '@/lib/chat/browserCache';
import { clearChatOutbox } from '@/lib/chat/outbox';
import { clearCachedFeed } from '@/lib/feed/browserCache';
import { clearDailyModules } from '@/lib/feed/dailyModulesCache';
import { clearRecentPeople } from '@/lib/findPeopleRecent';
import { disconnectSocket } from '@/lib/socket';
import { clearCachedStories } from '@/lib/stories/browserCache';
import { handleApiError } from '@/lib/utils/errorHandler';
import type { AuthResponse, LoginCredentials, RegisterData, User } from '@/types/auth';
import Cookies from 'js-cookie';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { persistBrowserSession, sessionCookieOptions } from './sessionCookies';
import { resolveSession } from './resolveSession';
import {
  clearCachedUser,
  getPendingUser,
  readCachedUser,
  removeToken,
  writeCachedUser,
} from './authHelpers';

const AUTH_PRESENT_COOKIE = 'vx_auth_present';
const CSRF_COOKIE = 'vx_csrf';

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  sessionError: boolean;
  retrySession: () => void;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<AuthResponse>;
  setAuth: (response: AuthResponse) => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionError, setSessionError] = useState(false);
  const [sessionAttempt, setSessionAttempt] = useState(0);
  const retrySession = useCallback(() => {
    setSessionError(false);
    setLoading(true);
    setSessionAttempt((attempt) => attempt + 1);
  }, []);

  // Initialize auth state from storage
  useEffect(() => {
    const initAuth = async () => {
      try {
        const hasSession =
          Cookies.get(AUTH_PRESENT_COOKIE) === 'true' || Boolean(Cookies.get(CSRF_COOKIE));
        if (hasSession) {
          setTokenState('cookie');
          const pendingUser = getPendingUser();
          const cachedUser = (pendingUser ?? readCachedUser()) as User | null;
          if (cachedUser) {
            // Render immediately from the last-known user and revalidate the
            // session in the background instead of blocking first paint on
            // the /me round-trip.
            setUser(cachedUser as User);
            setLoading(false);
          }
          const session = await resolveSession(authAPI.getCurrentUser);
          if (session.status === 'authenticated') {
            const userData = session.user;
            setUser(userData);
            writeCachedUser(userData);
            persistBrowserSession(undefined, undefined, userData.onboardingCompleted);
            if (userData.onboardingCompleted) {
              Cookies.set('onboardingCompleted', 'true', sessionCookieOptions());
            }
          } else {
            if (session.status === 'expired') {
              clearCachedFeed(cachedUser?.id);
              clearDailyModules(cachedUser?.id);
              clearCachedStories(cachedUser?.id);
              clearChatBrowserCache();
              void clearChatOutbox(cachedUser?.id);
              clearRecentPeople(cachedUser?.id);
              Cookies.remove('authToken');
              Cookies.remove(AUTH_PRESENT_COOKIE);
              Cookies.remove(CSRF_COOKIE);
              removeToken();
              clearCachedUser();
              setTokenState(null);
              setUser(null);
            } else if (!cachedUser) {
              setSessionError(true);
            }
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        setSessionError(true);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [sessionAttempt]);

  const login = useCallback(async (credentials: LoginCredentials): Promise<void> => {
    try {
      const response = await authAPI.login(credentials);
      disconnectSocket();
      Cookies.remove('authToken');
      removeToken();
      persistBrowserSession(
        response.csrfToken,
        response.session?.expiresAt,
        response.user.onboardingCompleted
      );

      setUser(response.user);
      setSessionError(false);
      writeCachedUser(response.user);
      setTokenState('cookie');
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }, []);

  const register = useCallback(async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await authAPI.register(data);
      setSessionError(false);
      disconnectSocket();

      Cookies.remove('authToken');
      removeToken();

      if (response.session && response.user.isVerified) {
        persistBrowserSession(
          response.csrfToken,
          response.session?.expiresAt,
          response.user.onboardingCompleted
        );
        setUser(response.user);
        writeCachedUser(response.user);
        setTokenState('cookie');
      } else {
        Cookies.remove(AUTH_PRESENT_COOKIE);
        Cookies.remove(CSRF_COOKIE);
        clearCachedUser();
        setUser(null);
        setTokenState(null);
      }

      return response;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }, []);

  const logout = useCallback(() => {
    setSessionError(false);
    disconnectSocket();
    clearCachedFeed(user?.id);
    clearDailyModules(user?.id);
    clearCachedStories(user?.id);
    clearChatBrowserCache();
    void clearChatOutbox(user?.id);
    clearRecentPeople(user?.id);
    authAPI.logout().catch(() => undefined);
    Cookies.remove('authToken');
    Cookies.remove(AUTH_PRESENT_COOKIE);
    Cookies.remove(CSRF_COOKIE);
    Cookies.remove('onboardingCompleted');
    removeToken();
    clearCachedUser();
    setUser(null);
    setTokenState(null);
  }, [user?.id]);

  const setAuth = useCallback((response: AuthResponse) => {
    setSessionError(false);
    disconnectSocket();
    Cookies.remove('authToken');
    removeToken();
    persistBrowserSession(
      response.csrfToken,
      response.session?.expiresAt,
      response.user.onboardingCompleted
    );

    setUser(response.user);
    writeCachedUser(response.user);
    setTokenState('cookie');
  }, []);

  const updateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser);
    writeCachedUser(updatedUser);
    if (updatedUser.onboardingCompleted) {
      Cookies.set('onboardingCompleted', 'true', sessionCookieOptions());
    }
  }, []);

  const value: AuthContextType = {
    user,
    token,
    loading,
    sessionError,
    retrySession,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    setAuth,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
