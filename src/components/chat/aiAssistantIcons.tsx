import type { AIFeature } from './AIChatAssistant.types';

/**
 * Hand-drawn line icons for the message assistant. All use `currentColor`, a 24px
 * grid and 1.7 stroke so they sit together as one set and follow the theme.
 */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

/** Two overlapping speech bubbles. */
function IceBreakerIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h7A2.5 2.5 0 0 1 16 5.5v4a2.5 2.5 0 0 1-2.5 2.5H9l-3 2.5V12h-.5A1.5 1.5 0 0 1 4 10.5z" />
      <path d="M16 8.5h1.5A2.5 2.5 0 0 1 20 11v3.5a2.5 2.5 0 0 1-2.5 2.5H17v2.5L14 17h-3a2.5 2.5 0 0 1-2-1" />
    </svg>
  );
}

/** A bubble with a loop arrow: pick the conversation back up. */
function ContinueIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12a8 8 0 1 1-2.4-5.7" />
      <path d="M20 4.5v4h-4" />
      <path d="M9 11.5h6M9 14.5h4" />
    </svg>
  );
}

/** Reply arrow curling back from a bubble. */
function QuickReplyIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M9.5 8 4.5 12.5l5 4.5" />
      <path d="M4.5 12.5H14a5.5 5.5 0 0 1 5.5 5.5V19" />
    </svg>
  );
}

/** Lines of text with a tick. */
function GrammarIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h9M4 12h6M4 17h5" />
      <path d="m13.5 15.5 2.5 2.5 4.5-5.5" />
    </svg>
  );
}

/** A mixing-desk slider: tone is adjusted, not replaced. */
function ToneIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4v16M12 4v16M19 4v16" />
      <circle cx="5" cy="14" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
      <circle cx="19" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Two glyph cards, as on a translation switch. */
function TranslateIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 6h9M8 4v2M5 6c.5 3 2.5 5.5 5.5 7M10.5 6c-.5 3-2.8 5.7-6 7.2" />
      <path d="m12.5 20 3.8-9 3.8 9M13.8 17h4.9" />
    </svg>
  );
}

/** Arrows pushing outward from a short line. */
function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

const ICONS: Record<AIFeature, (props: { className?: string }) => React.ReactElement> = {
  starters: IceBreakerIcon,
  revival: ContinueIcon,
  'smart-reply': QuickReplyIcon,
  grammar: GrammarIcon,
  tone: ToneIcon,
  translate: TranslateIcon,
  expand: ExpandIcon,
};

export function FeatureIcon({ feature, className }: { feature: AIFeature; className?: string }) {
  const Icon = ICONS[feature];
  return <Icon className={className} />;
}

/** The assistant's mark: a quill nib, so it reads as "writing help", not "AI". */
export function AssistantMark({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M19.5 4.5c-6 .3-11 3.8-12.5 9.5L5 19.5l5.5-2c5.7-1.500 9.200-6.500 9-13z" />
      <path d="M5 19.5 12 12" />
    </svg>
  );
}
