'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      token: null,
      isAuthenticated: false,

      // Login method: stores token in cookie and updates state
      login: (user: User, token: string) => {
        // Store token in cookie (already done in the component, but ensure it's set)
        if (typeof window !== 'undefined') {
          Cookies.set('authToken', token, { 
            expires: 7, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict' 
          });
        }
        // Update state
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },

      // Logout method: removes token from cookie and resets state
      logout: () => {
        // Remove token from cookie
        if (typeof window !== 'undefined') {
          Cookies.remove('authToken');
        }
        // Reset state to initial
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      // Set user method: updates user in state
      setUser: (user: User) => {
        set({ user });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;

