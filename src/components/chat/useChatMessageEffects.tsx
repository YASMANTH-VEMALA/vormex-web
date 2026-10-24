'use client';
import React, { useCallback, useEffect } from 'react';

interface useChatMessageEffectsOptions {
  availableMessageEffects: ('confetti' | 'fireworks')[];
  enabledMessageEffects: { confetti: boolean; fireworks: boolean; voiceSfx: boolean } | undefined;
  selectedMessageEffect: 'confetti' | 'fireworks' | 'none';
  setSelectedMessageEffect: React.Dispatch<React.SetStateAction<'confetti' | 'fireworks' | 'none'>>;
}
export function useChatMessageEffects({
  availableMessageEffects,
  enabledMessageEffects,
  selectedMessageEffect,
  setSelectedMessageEffect,
}: useChatMessageEffectsOptions) {
  useEffect(() => {
    if (selectedMessageEffect === 'none') return;
    if (!availableMessageEffects.includes(selectedMessageEffect)) {
      setSelectedMessageEffect('none');
    }
  }, [availableMessageEffects, selectedMessageEffect, setSelectedMessageEffect]);

  const cycleMessageEffect = () => {
    const cycle: Array<'none' | 'confetti' | 'fireworks'> = ['none', ...availableMessageEffects];
    if (cycle.length <= 1) return;

    const currentIndex = cycle.indexOf(selectedMessageEffect);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % cycle.length;
    setSelectedMessageEffect(cycle[nextIndex]);
  };

  const triggerMessageEffect = useCallback(async (effect: 'confetti' | 'fireworks') => {
    try {
      const confetti = (await import('canvas-confetti')).default;

      if (effect === 'confetti') {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.7 },
          colors: ['#22c55e', '#38bdf8', '#f59e0b', '#f43f5e'],
        });
        return;
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { x: 0.2, y: 0.7 },
        colors: ['#f97316', '#facc15', '#fb7185', '#60a5fa'],
      });
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { x: 0.8, y: 0.7 },
        colors: ['#f97316', '#facc15', '#fb7185', '#60a5fa'],
      });
    } catch {
      // Ignore silently if canvas-confetti cannot load
    }
  }, []);

  const playVoiceSfx = useCallback(() => {
    if (!enabledMessageEffects?.voiceSfx || typeof window === 'undefined') return;

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.12);

      gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.14);

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.14);
    } catch {
      // Ignore silently when browser blocks autoplay/audio context
    }
  }, [enabledMessageEffects?.voiceSfx]);
  return { cycleMessageEffect, playVoiceSfx, triggerMessageEffect };
}
