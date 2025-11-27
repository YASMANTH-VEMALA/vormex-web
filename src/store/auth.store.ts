'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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

      // Login method: stores token and updates state
      login: (user: User, token: string) => {
        // Store token in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('authToken', token);
        }
        // Update state
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },

      // Logout method: removes token and resets state
      logout: () => {
        // Remove token from localStorage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
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

