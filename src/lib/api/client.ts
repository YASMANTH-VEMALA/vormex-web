import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '@/lib/utils/constants';
import { getToken, removeToken } from '@/lib/auth/authHelpers';

// Create axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor: Add auth token to requests
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from cookies (for backward compatibility) or localStorage
    if (typeof window !== 'undefined') {
      const token = Cookies.get('authToken') || getToken();
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
      // Remove token from both cookies and localStorage
      if (typeof window !== 'undefined') {
        Cookies.remove('authToken');
        removeToken();
        // Only redirect if not already on login page and not during auth request
        const currentPath = window.location.pathname;
        const isAuthPage = currentPath === '/login';
        const isAuthRequest = error.config?.url?.includes('/auth/login') || 
                            error.config?.url?.includes('/auth/register');
        
        if (!isAuthPage && !isAuthRequest) {
          window.location.href = '/login';
        }
      }
    }
    
    // Handle 403 Forbidden (email not verified)
    if (error.response?.status === 403) {
      // Let the component handle this error
    }
    
    // Return rejected promise with error
    return Promise.reject(error);
  }
);

export default apiClient;

