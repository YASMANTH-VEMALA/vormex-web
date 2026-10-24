'use client';

import { AuthFooter } from './AuthFooter';
import { AuthPanel } from './AuthPanel';
import { AuthShowcase } from './AuthShowcase';
import { useAuthForm } from './useAuthForm';
import styles from './auth-community.module.css';

export function AuthPage() {
  const auth = useAuthForm();
  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <AuthShowcase />
        <AuthPanel auth={auth} />
      </div>
      <AuthFooter />
    </main>
  );
}
