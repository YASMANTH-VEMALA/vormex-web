'use client';

import { Eye, EyeOff, LockKeyhole, Mail, UserRound, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { PASSWORD_MIN_LENGTH } from '@/lib/validations/auth';
import { BrandMark } from './BrandMark';
import { GoogleSignInButton } from './GoogleSignInButton';
import type { useAuthForm } from './useAuthForm';
import styles from './auth-community.module.css';

export function AuthPanel({ auth }: { auth: ReturnType<typeof useAuthForm> }) {
  const [showPassword, setShowPassword] = useState(false);
  const signup = auth.isSignUp;
  const email = signup ? auth.signupEmail : auth.loginEmail;
  const password = signup ? auth.signupPassword : auth.loginPassword;
  const setEmail = signup ? auth.setSignupEmail : auth.setLoginEmail;
  const setPassword = signup ? auth.setSignupPassword : auth.setLoginPassword;
  return (
    <section className={styles.panel} aria-labelledby="auth-title">
      <div className={styles.panelContent}>
        <BrandMark className={styles.panelMark} />
        <h2 id="auth-title">Join Vormex</h2>
        <p className={styles.panelDescription}>
          Continue to connect, learn, and build
          <br />
          with your community.
        </p>
        <div className={styles.provider}>
          <GoogleSignInButton
            onClick={auth.handleGoogleLogin}
            onError={auth.handleGoogleError}
            disabled={auth.isLoading}
            text="Continue with Google"
            fullWidth
          />
        </div>
        <div className={styles.divider}>
          <span />
          OR
          <span />
        </div>
        <form
          id={signup ? 'a-form' : 'b-form'}
          onSubmit={auth.handleSubmit}
          className={styles.form}
          aria-label={signup ? 'Create your account' : 'Log in'}
        >
          <fieldset disabled={auth.isLoading}>
            {signup && (
              <label className={styles.inputField}>
                <UserRound size={19} aria-hidden="true" />
                <span className={styles.srOnly}>Your name</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={auth.signupName}
                  onChange={(event) => auth.setSignupName(event.target.value)}
                  required
                />
              </label>
            )}
            <label className={styles.inputField}>
              <Mail size={19} aria-hidden="true" />
              <span className={styles.srOnly}>Email address</span>
              <input
                name="email"
                type="email"
                autoComplete={signup ? 'email' : 'username'}
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label className={styles.inputField}>
              <LockKeyhole size={19} aria-hidden="true" />
              <span className={styles.srOnly}>Password</span>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete={signup ? 'new-password' : 'current-password'}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={signup ? PASSWORD_MIN_LENGTH : undefined}
                maxLength={128}
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
              >
                {showPassword ? <Eye size={19} /> : <EyeOff size={19} />}
              </button>
            </label>
            {signup && (
              <p className={styles.passwordHint}>
                Use at least 6 characters with three of: uppercase, lowercase, numbers, or symbols.
              </p>
            )}
            {auth.error && (
              <p role="alert" className={styles.error}>
                {auth.error}
              </p>
            )}
            {auth.success && (
              <p role="status" className={styles.success}>
                {auth.success}
              </p>
            )}
            <button type="submit" className={styles.submit}>
              {auth.isLoading ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  Please wait…
                </>
              ) : signup ? (
                'Create account'
              ) : (
                'Log in'
              )}
            </button>
          </fieldset>
        </form>
        {signup ? (
          <p className={styles.legal}>
            By creating an account, you agree to our <Link href="/terms">Terms</Link> and{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        ) : (
          <Link
            className={styles.forgot}
            href={
              email
                ? `/forgot-password?email=${encodeURIComponent(email.trim())}`
                : '/forgot-password'
            }
          >
            Forgot password?
          </Link>
        )}
        <p className={styles.switch}>
          {signup ? 'Already part of Vormex?' : 'New to Vormex?'}{' '}
          <button
            type="button"
            onClick={() => {
              setShowPassword(false);
              auth.handleSwitch();
            }}
            disabled={auth.isLoading}
          >
            {signup ? 'Log in' : 'Create an account'}
          </button>
        </p>
      </div>
    </section>
  );
}
