'use client';

import { authAPI } from '@/lib/api/auth';
import { applyReferralCode } from '@/lib/api/referrals';
import { setPendingUser } from '@/lib/auth/authHelpers';
import { useAuth } from '@/lib/auth/useAuth';
import { handleApiError } from '@/lib/utils/errorHandler';
import { loginSchema, registerSchema } from '@/lib/validations/auth';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export function useAuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: loginUser, register: registerUser, setAuth } = useAuth();
  const [isSignUp, setIsSignUp] = useState(
    () => searchParams.get('mode') === 'signup' || Boolean(searchParams.get('ref'))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const college = '';
  const branch = '';
  const referralCode = searchParams.get('ref');

  const handleGoogleLogin = async (idToken: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const authResponse = await authAPI.googleSignIn(idToken);
      setAuth(authResponse);
      setPendingUser(authResponse.user);

      if (referralCode) {
        try {
          await applyReferralCode(referralCode);
        } catch (referralError) {
          console.error('Failed to apply referral code after Google sign-in:', referralError);
        }
      }

      router.replace('/');
    } catch (err) {
      setError(handleApiError(err));
      setIsLoading(false);
    }
  };

  const handleGoogleError = (message: string) => {
    setError(message);
    setSuccess(null);
    setIsLoading(false);
  };

  const handleSwitch = () => {
    setIsSignUp((previous) => !previous);
    setError(null);
    setSuccess(null);
    setSignupPassword('');
    setLoginPassword('');
  };
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const formId = (e.currentTarget as HTMLFormElement).id;
    const isSignUpForm = formId === 'a-form';

    try {
      if (isSignUpForm) {
        // Validate signup form
        const validationResult = registerSchema.safeParse({
          name: signupName,
          email: signupEmail,
          password: signupPassword,
          college: college || undefined,
          branch: branch || undefined,
        });

        if (!validationResult.success) {
          const firstError = validationResult.error.issues[0];
          setError(firstError.message);
          setIsLoading(false);
          return;
        }

        const validatedSignup = validationResult.data;

        const authResponse = await registerUser({
          email: validatedSignup.email,
          password: validatedSignup.password,
          name: validatedSignup.name,
          college: college || undefined,
          branch: branch || undefined,
        });

        if (referralCode) {
          try {
            await applyReferralCode(referralCode);
          } catch (referralError) {
            console.error('Failed to apply referral code after signup:', referralError);
          }
        }

        // Show success message about email verification
        setSuccess(
          referralCode
            ? 'Registration successful! Your invite has been applied. Please check your email to verify your account.'
            : 'Registration successful! Please check your email to verify your account.'
        );

        if (!authResponse.user.isVerified) {
          router.push(`/verify-email?email=${encodeURIComponent(validatedSignup.email)}`);
          return;
        }

        // Don't redirect immediately - user needs to verify email
        if (authResponse.user.isVerified) {
          setTimeout(() => router.push('/'), 2000);
        }
      } else {
        // Validate login form
        const validationResult = loginSchema.safeParse({
          email: loginEmail,
          password: loginPassword,
        });

        if (!validationResult.success) {
          const firstError = validationResult.error.issues[0];
          setError(firstError.message);
          setIsLoading(false);
          return;
        }

        const validatedLogin = validationResult.data;

        try {
          await loginUser(validatedLogin);

          // Check if email verification is required (this should be handled by the API)
          // But we'll check the user state after login
          // Redirect to home
          router.push('/');
        } catch (loginErr) {
          const errorMessage = handleApiError(loginErr);
          if (
            (axios.isAxiosError(loginErr) &&
              loginErr.response?.status === 403 &&
              loginErr.response?.data?.requiresVerification) ||
            errorMessage.toLowerCase().includes('verify your email')
          ) {
            router.push(`/verify-email?email=${encodeURIComponent(validatedLogin.email)}`);
            return;
          }
          setError(errorMessage);
          setIsLoading(false);
          return;
        }
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isSignUp,
    isLoading,
    error,
    success,
    signupName,
    signupEmail,
    signupPassword,
    loginEmail,
    loginPassword,
    setSignupName,
    setSignupEmail,
    setSignupPassword,
    setLoginEmail,
    setLoginPassword,
    handleSwitch,
    handleSubmit,
    handleGoogleLogin,
    handleGoogleError,
  };
}
