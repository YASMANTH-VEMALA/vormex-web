'use client';
import type { AIChatAssistantProps, AIFeature, FeatureOption } from './AIChatAssistant.types';
export type { AIChatAssistantProps, AIFeature, FeatureOption } from './AIChatAssistant.types';

import {
  changeTone,
  expandMessage,
  fixGrammar,
  getAIErrorMessage,
  getChatRevivalSuggestions,
  getConversationStarters,
  getSmartReplies,
  translateMessage,
  type LanguageType,
  type ToneType,
} from '@/lib/api/ai-chat';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { AssistantMark } from './aiAssistantIcons';
import {
  DRAFT_FEATURES,
  LANGUAGE_OPTIONS,
  REPLY_FEATURES,
  TONE_OPTIONS,
  findFeature,
} from './aiAssistantOptions';
import { WritingIndicator } from './AIAssistantWriting';

// ============================================
// Constants
// ============================================

// ============================================
// Small pieces
// ============================================

function OptionChips<T extends string>({
  options,
  value,
  onSelect,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onSelect: (value: T) => void;
  label: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="-mx-1 mb-3 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(option.value)}
            className={cn(
              'shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors',
              active
                ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/10'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function FeatureButton({
  feature,
  disabledReason,
  onClick,
}: {
  feature: FeatureOption;
  disabledReason: string | null;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={Boolean(disabledReason)}
      className={cn(
        'group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors',
        disabledReason
          ? 'cursor-not-allowed border-transparent opacity-45'
          : 'border-transparent hover:border-neutral-200 hover:bg-neutral-100 active:scale-[0.99] dark:hover:border-white/10 dark:hover:bg-white/[0.07]'
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110 dark:bg-white/10 dark:text-neutral-200">
        {feature.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-neutral-900 dark:text-white">
          {feature.label}
        </span>
        <span className="block truncate text-xs text-neutral-500 dark:text-neutral-400">
          {disabledReason || feature.description}
        </span>
      </span>
    </button>
  );
}

// ============================================
// Component
// ============================================

export default function AIChatAssistant({
  conversationId,
  otherUserId,
  currentMessage,
  lastReceivedMessage,
  onSuggestionSelect,
  onClose,
}: AIChatAssistantProps) {
  const reduceMotion = useReducedMotion();
  const [selectedFeature, setSelectedFeature] = useState<AIFeature | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedTone, setSelectedTone] = useState<ToneType>('casual');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('english');

  const disabledReasonFor = (feature: FeatureOption): string | null => {
    if (feature.requiresMessage && !currentMessage.trim()) return 'Type a message first';
    if (feature.requiresReceivedMessage && !lastReceivedMessage) return 'Nothing to reply to yet';
    return null;
  };

  const fetchSuggestions = async (
    feature: AIFeature,
    extraParams?: { tone?: ToneType; language?: LanguageType }
  ) => {
    setLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      let result: string[] = [];

      switch (feature) {
        case 'starters': {
          const response = await getConversationStarters(otherUserId);
          result = response.starters;
          break;
        }
        case 'revival': {
          const response = await getChatRevivalSuggestions(conversationId, otherUserId);
          result = response.suggestions;
          break;
        }
        case 'grammar': {
          const response = await fixGrammar(currentMessage);
          result = [response.corrected, ...response.changes];
          break;
        }
        case 'smart-reply': {
          const response = await getSmartReplies(lastReceivedMessage || '', conversationId);
          result = response.replies;
          break;
        }
        case 'tone': {
          const response = await changeTone(currentMessage, extraParams?.tone || selectedTone);
          result = [response.transformed];
          break;
        }
        case 'translate': {
          const response = await translateMessage(
            currentMessage,
            extraParams?.language || selectedLanguage
          );
          result = [response.translated];
          break;
        }
        case 'expand': {
          const response = await expandMessage(currentMessage);
          result = [response.expanded];
          break;
        }
      }

      setSuggestions(result);
    } catch (caught) {
      console.error('AI suggestion error:', caught);
      setError(getAIErrorMessage(caught, 'The assistant is unavailable right now.'));
    } finally {
      setLoading(false);
    }
  };

  const handleFeatureClick = async (feature: AIFeature) => {
    if (disabledReasonFor(findFeature(feature))) return;
    setSelectedFeature(feature);
    setError(null);
    setSuggestions([]);
    // Tone and translate wait for the user to pick an option.
    if (feature === 'tone' || feature === 'translate') return;
    await fetchSuggestions(feature);
  };

  const handleBack = () => {
    setSelectedFeature(null);
    setSuggestions([]);
    setError(null);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionSelect(suggestion);
    onClose?.();
  };

  const active = selectedFeature ? findFeature(selectedFeature) : null;
  const canRegenerate =
    selectedFeature !== null &&
    selectedFeature !== 'tone' &&
    selectedFeature !== 'translate' &&
    suggestions.length > 0 &&
    !loading;

  return (
    <motion.div
      role="dialog"
      aria-label="Message assistant"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
      style={{ maxHeight: 'calc(100vh - 200px)', transformOrigin: 'bottom center' }}
      className="absolute bottom-full left-0 right-0 z-50 mb-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white/95 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/90"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 dark:border-white/10">
        {active ? (
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back to all options"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.9}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>
        ) : (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            <AssistantMark className="h-4 w-4" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
            {active ? active.label : 'Message assistant'}
          </h3>
          <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
            {active ? active.description : 'Help writing this message'}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close assistant"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="max-h-80 overflow-y-auto p-3">
        <AnimatePresence mode="wait" initial={false}>
          {!selectedFeature ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              {[
                { title: 'Reply', ids: REPLY_FEATURES },
                { title: 'Polish your draft', ids: DRAFT_FEATURES },
              ].map((group) => (
                <div key={group.title} className="mb-2 last:mb-0">
                  <p className="px-3 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-neutral-500">
                    {group.title}
                  </p>
                  <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                    {group.ids.map((id) => {
                      const feature = findFeature(id);
                      return (
                        <FeatureButton
                          key={id}
                          feature={feature}
                          disabledReason={disabledReasonFor(feature)}
                          onClick={() => handleFeatureClick(id)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              {selectedFeature === 'tone' && (
                <OptionChips
                  label="Tone"
                  options={TONE_OPTIONS}
                  value={selectedTone}
                  onSelect={(tone) => {
                    setSelectedTone(tone);
                    void fetchSuggestions('tone', { tone });
                  }}
                />
              )}
              {selectedFeature === 'translate' && (
                <OptionChips
                  label="Language"
                  options={LANGUAGE_OPTIONS}
                  value={selectedLanguage}
                  onSelect={(language) => {
                    setSelectedLanguage(language);
                    void fetchSuggestions('translate', { language });
                  }}
                />
              )}

              {(selectedFeature === 'tone' || selectedFeature === 'translate') &&
                !loading &&
                !error &&
                suggestions.length === 0 && (
                  <p className="px-1 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    {selectedFeature === 'tone'
                      ? 'Pick a tone to rewrite your message.'
                      : 'Pick a language to translate your message.'}
                  </p>
                )}

              {loading && <WritingIndicator reduceMotion={Boolean(reduceMotion)} />}

              {error && !loading && (
                <div
                  role="alert"
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3 dark:border-white/10"
                >
                  <p className="min-w-0 flex-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {error}
                  </p>
                  <button
                    type="button"
                    onClick={() => fetchSuggestions(selectedFeature)}
                    className="shrink-0 rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                  >
                    Try again
                  </button>
                </div>
              )}

              {!loading && !error && suggestions.length > 0 && (
                <ul className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <motion.li
                      key={`${selectedFeature}-${index}-${suggestion.slice(0, 12)}`}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                        delay: reduceMotion ? 0 : index * 0.06,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="group flex w-full items-start gap-3 rounded-2xl rounded-bl-md bg-neutral-100 px-4 py-3 text-left transition-colors hover:bg-neutral-200/70 dark:bg-white/[0.07] dark:hover:bg-white/[0.12]"
                      >
                        <span className="min-w-0 flex-1 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
                          {suggestion}
                          {index === 0 && selectedFeature === 'grammar' && (
                            <span className="mt-1 block text-xs font-medium text-neutral-500 dark:text-neutral-400">
                              Corrected version
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 flex h-6 shrink-0 items-center gap-1 text-xs font-medium text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">
                          Use
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17 17 7M8 7h9v9" />
                          </svg>
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}

              {canRegenerate && (
                <button
                  type="button"
                  onClick={() => fetchSuggestions(selectedFeature!)}
                  className="mx-auto mt-3 flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 12a8 8 0 1 1-2.4-5.7M20 4.5v4h-4" />
                  </svg>
                  Show different options
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Draft context */}
      <div className="border-t border-neutral-200 px-4 py-2 dark:border-white/10">
        <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
          {currentMessage.trim()
            ? `Your draft: “${currentMessage.trim().slice(0, 48)}${currentMessage.trim().length > 48 ? '…' : ''}”`
            : 'Write a draft to unlock grammar, tone and translate.'}
        </p>
      </div>
    </motion.div>
  );
}
