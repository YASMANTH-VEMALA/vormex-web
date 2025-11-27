import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import type { LoginRequest, RegisterRequest, AuthResponse } from '@/types';

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
    // Get token from localStorage (client-side only)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
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
    if (error.response?.status === 401) {
      // Remove token from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        // Redirect to login page
        window.location.href = '/login';
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
};

export default apiClient;

