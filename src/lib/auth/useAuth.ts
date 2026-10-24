import '@/types/auth';
import { useAuthContext } from './authContext';

export function useAuth() {
  const context = useAuthContext();

  return {
    user: context.user,
    isAuthenticated: context.isAuthenticated,
    loading: context.loading,
    sessionError: context.sessionError,
    retrySession: context.retrySession,
    login: context.login,
    logout: context.logout,
    register: context.register,
    setAuth: context.setAuth,
    updateUser: context.updateUser,
  };
}
