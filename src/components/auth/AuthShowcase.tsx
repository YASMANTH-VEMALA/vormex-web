import Image from 'next/image';
import Link from 'next/link';
import { BrandMark } from './BrandMark';
import styles from './auth-showcase.module.css';

function Scribble({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 60" fill="none" aria-hidden="true">
      <path
        d="m10 39 19 5M19 15l15 17M45 5l5 23"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AuthShowcase() {
  return (
    <section className={styles.showcase} aria-labelledby="community-title">
      <Link href="/" className={styles.wordmark} aria-label="Vormex home">
        <BrandMark />
        <span>Vormex</span>
      </Link>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>YOUR PEOPLE ARE HERE</p>
        <h1 id="community-title">
          Find <span>your</span> people.
        </h1>
        <p className={styles.heroDescription}>
          Meet students, creators, and builders who share what you
          <br className={styles.wideBreak} /> want to learn, build, and achieve.
        </p>
      </div>
      <div className={`${styles.note} ${styles.noteTop}`} aria-hidden="true">
        Real
        <br />
        conversations.
        <br />
        Real progress.
        <i />
      </div>
      <Scribble className={styles.sparkTop} />
      <div className={styles.collage}>
        <div className={`${styles.photo} ${styles.photoCommunity}`}>
          <Image
            src="/auth/community.png"
            alt="Students sharing ideas at a community gathering"
            fill
            sizes="(max-width: 900px) 35vw, 23vw"
          />
        </div>
        <div className={`${styles.photo} ${styles.photoConversation}`}>
          <Image
            src="/auth/conversation.png"
            alt="Two students enjoying a conversation"
            fill
            priority
            sizes="(max-width: 900px) 52vw, 35vw"
          />
        </div>
        <div className={`${styles.photo} ${styles.photoSpeaker}`}>
          <Image
            src="/auth/speaker.png"
            alt="A student speaking into a microphone"
            fill
            sizes="(max-width: 900px) 25vw, 17vw"
          />
        </div>
        <div className={`${styles.photo} ${styles.photoFriends}`}>
          <Image
            src="/auth/friends.png"
            alt="Three friends celebrating with a trophy"
            fill
            sizes="(max-width: 900px) 28vw, 19vw"
          />
        </div>
        <div className={`${styles.note} ${styles.noteIdeas}`} aria-hidden="true">
          Ideas
          <br />
          Friends
          <br />
          Progress
          <i />
        </div>
        <div className={`${styles.note} ${styles.noteTogether}`} aria-hidden="true">
          Learn
          <br />
          Share
          <br />
          Build
          <br />
          Together
          <i />
        </div>
        <Scribble className={styles.sparkIdeas} />
        <Scribble className={styles.sparkPhoto} />
        <Scribble className={styles.sparkSpeaker} />
      </div>
    </section>
  );
}
