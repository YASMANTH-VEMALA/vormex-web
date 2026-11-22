import type { LanguageType, ToneType } from '@/lib/api/ai-chat';
import type { AIFeature, FeatureOption } from './AIChatAssistant.types';
import { FeatureIcon } from './aiAssistantIcons';

const icon = (feature: AIFeature) => <FeatureIcon feature={feature} className="h-5 w-5" />;

export const FEATURES: FeatureOption[] = [
  {
    id: 'starters',
    label: 'Ice breakers',
    icon: icon('starters'),
    description: 'Ways to open the chat',
  },
  {
    id: 'revival',
    label: 'Pick it back up',
    icon: icon('revival'),
    description: 'Restart a quiet chat',
  },
  {
    id: 'smart-reply',
    label: 'Quick reply',
    icon: icon('smart-reply'),
    description: 'Answer their last message',
    requiresReceivedMessage: true,
  },
  {
    id: 'grammar',
    label: 'Fix grammar',
    icon: icon('grammar'),
    description: 'Clean up spelling and grammar',
    requiresMessage: true,
  },
  {
    id: 'tone',
    label: 'Change tone',
    icon: icon('tone'),
    description: 'Make it sound different',
    requiresMessage: true,
  },
  {
    id: 'translate',
    label: 'Translate',
    icon: icon('translate'),
    description: 'Send it in another language',
    requiresMessage: true,
  },
  {
    id: 'expand',
    label: 'Say more',
    icon: icon('expand'),
    description: 'Turn a short note into more',
    requiresMessage: true,
  },
];

export const REPLY_FEATURES: AIFeature[] = ['starters', 'revival', 'smart-reply'];
export const DRAFT_FEATURES: AIFeature[] = ['grammar', 'tone', 'translate', 'expand'];

export const TONE_OPTIONS: { value: ToneType; label: string }[] = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'formal', label: 'Formal' },
  { value: 'enthusiastic', label: 'Enthusiastic' },
  { value: 'concise', label: 'Concise' },
];

export const LANGUAGE_OPTIONS: { value: LanguageType; label: string }[] = [
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'hinglish', label: 'Hinglish' },
  { value: 'tenglish', label: 'Tenglish' },
];

export const findFeature = (id: AIFeature) => FEATURES.find((feature) => feature.id === id)!;
