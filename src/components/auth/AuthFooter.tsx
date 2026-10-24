import { Globe2 } from 'lucide-react';
import Link from 'next/link';
import styles from './auth-community.module.css';

export function AuthFooter() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Vormex</span>
      <nav aria-label="Footer">
        <Link href="/people">Discover</Link>
        <Link href="/terms">Community Guidelines</Link>
        <Link href="/support">Help &amp; Support</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a
          href="https://play.google.com/store/apps/details?id=com.vormex.android"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the app
        </a>
      </nav>
      <span className={styles.language}>
        <Globe2 size={17} aria-hidden="true" />
        English
      </span>
    </footer>
  );
}
