'use client';

import { onboardingAPI } from '@/lib/api/onboarding';
import { useAuthContext } from '@/lib/auth/authContext';
import { handleApiError } from '@/lib/utils/errorHandler';
import { OnboardingFrame, ONBOARDING_STEPS as STEPS } from './OnboardingFrame';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import StepInterests from './steps/StepInterests';
import StepMatches from './steps/StepMatches';
import StepProfile from './steps/StepProfile';

export default function OnboardingWizard() {
  const router = useRouter();
  const { updateUser, user } = useAuthContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [stepData, setStepData] = useState<Record<number, Record<string, unknown>>>({});

  const [error, setError] = useState<string | null>(null);

  const handleStepComplete = useCallback(async (step: number, data: Record<string, unknown>) => {
    setSaving(true);
    setError(null);
    try {
      setStepData((prev) => ({ ...prev, [step]: data }));
      await onboardingAPI.updateStep(step, data);

      if (step < STEPS.length - 2) {
        setCurrentStep(step + 1);
      } else if (step === STEPS.length - 2) {
        await onboardingAPI.completeOnboarding();
        setCurrentStep(step + 1);
      }
    } catch (err: unknown) {
      console.error('Failed to save step:', err);
      setError(handleApiError(err));
    } finally {
      setSaving(false);
    }
  }, []);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleFinish = useCallback(() => {
    if (user) {
      updateUser({ ...user, onboardingCompleted: true });
    }
    router.replace('/');
  }, [router, user, updateUser]);

  return (
    <OnboardingFrame step={currentStep} onBack={handleBack} saving={saving} error={error}>
      <div key={currentStep}>
        {currentStep === 0 && (
          <StepProfile
            initialData={stepData[0]}
            onComplete={(data) => handleStepComplete(0, data)}
            saving={saving}
            userCollege={user?.college || ''}
          />
        )}
        {currentStep === 1 && (
          <StepInterests
            initialData={stepData[1]}
            onComplete={(data) => handleStepComplete(1, data)}
            saving={saving}
          />
        )}
        {currentStep === 2 && <StepMatches onFinish={handleFinish} />}
      </div>
    </OnboardingFrame>
  );
}
