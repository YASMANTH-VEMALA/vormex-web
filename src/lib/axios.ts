import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import type { LoginRequest, RegisterRequest, AuthResponse, GoogleSignInRequest } from '@/types';

// Create axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor: Add auth token to requests
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from cookies (client-side only)
    if (typeof window !== 'undefined') {
      const token = Cookies.get('authToken');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle responses and errors
apiClient.interceptors.response.use(
  (response) => {
    // Return response data directly
    return response.data;
  },
  (error: AxiosError) => {
    // Handle 401 Unauthorized errors
    // Only redirect if we're not already on the login page and it's not a login/register request
    if (error.response?.status === 401) {
      // Remove token from cookies
      if (typeof window !== 'undefined') {
        Cookies.remove('authToken');
        // Only redirect if not already on login/register page and not during login/register request
        const currentPath = window.location.pathname;
        const isAuthPage = currentPath === '/login' || currentPath === '/register';
        const isAuthRequest = error.config?.url?.includes('/auth/login') || error.config?.url?.includes('/auth/register');
        
        // Don't redirect if we're on auth page or making auth request (let the component handle the error)
        if (!isAuthPage && !isAuthRequest) {
          window.location.href = '/login';
        }
      }
    }
    // Return rejected promise with error
    return Promise.reject(error);
  }
);

// Auth API methods
export const authAPI = {
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    return apiClient.post('/auth/register', data) as Promise<AuthResponse>;
  },
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    return apiClient.post('/auth/login', data) as Promise<AuthResponse>;
  },
  googleSignIn: async (data: GoogleSignInRequest): Promise<AuthResponse> => {
    return apiClient.post('/auth/google', data) as Promise<AuthResponse>;
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

export default apiClient;

