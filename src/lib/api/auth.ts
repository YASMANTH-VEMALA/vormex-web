import apiClient from './client';
import type { AuthResponse, LoginCredentials, RegisterData } from '@/types/auth';

export const authAPI = {
  register: async (data: RegisterData): Promise<AuthResponse> => {
    return apiClient.post('/auth/register', data) as Promise<AuthResponse>;
  },

  login: async (data: LoginCredentials): Promise<AuthResponse> => {
    return apiClient.post('/auth/login', data) as Promise<AuthResponse>;
  },

  googleSignIn: async (idToken: string): Promise<AuthResponse> => {
    return apiClient.post('/auth/google', { idToken }) as Promise<AuthResponse>;
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    return apiClient.post('/auth/forgot-password', { email }) as Promise<{ message: string }>;
  },

  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    return apiClient.post(`/auth/reset-password?token=${token}`, { newPassword }) as Promise<{ message: string }>;
  },

  verifyEmail: async (token: string): Promise<{ message: string }> => {
    return apiClient.get(`/auth/verify-email?token=${token}`) as Promise<{ message: string }>;
  },

  resendVerification: async (email: string): Promise<{ message: string }> => {
    return apiClient.post('/auth/resend-verification', { email }) as Promise<{ message: string }>;
  },
};

