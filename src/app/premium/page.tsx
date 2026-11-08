'use client';
import { useAuth as useResourceAuth } from '@/lib/auth/useAuth';
import { useQuery } from '@tanstack/react-query';

import { PremiumBenefits } from '@/components/premium/PremiumBenefits';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import {
  premiumAPI,
  type CreatorProState,
  type PremiumPlanOption,
  type PremiumSubscription,
} from '@/lib/api/premium';
import { openRazorpayCheckout } from '@/lib/payments/razorpay';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type BusyAction = 'checkout' | 'cancel' | 'boost' | null;
type CheckoutStage = 'idle' | 'creating' | 'awaiting-payment' | 'verifying';
type PremiumTier = 'premium' | 'creator_pro';

const CHECKOUT_STAGE_LABEL: Record<Exclude<CheckoutStage, 'idle'>, string> = {
  creating: 'Starting secure checkout...',
  'awaiting-payment': 'Waiting for payment...',
  verifying: 'Verifying payment...',
};

function formatDate(value?: string | null): string {
  if (!value) return 'Not scheduled';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not scheduled';
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function readErrorMessage(err: unknown, fallback: string): string {
  const response = (err as { response?: { data?: { error?: string } } })?.response;
  return response?.data?.error || (err as Error)?.message || fallback;
}

export default function PremiumPage() {
  const [initialSubscription] = useState<PremiumSubscription | null>(null);
  const [initialCreatorPro] = useState<CreatorProState | null>(null);
  const [tierChoice, setTierChoice] = useState<PremiumTier | null>(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<string>('monthly');
  const [message, setMessage] = useState<string | null>(null);
  const [actionError, setError] = useState<string | null>(null);

  const [busyAction, setBusyAction] = useState<BusyAction>(null);
  const [checkoutStage, setCheckoutStage] = useState<CheckoutStage>('idle');
  // Only the first load picks a tier for the member; later refreshes must not override
  // whatever tab they are looking at.

  const resourceViewer = useResourceAuth().user;
  const loadPremiumResource = useQuery({
    queryKey: ['web-resource', 'premium', resourceViewer?.id ?? 'anonymous'],
    queryFn: async () => {
      const [subscription, creatorPro] = await Promise.all([
        premiumAPI.getSubscription(),
        premiumAPI.getCreatorPro(),
      ]);
      return { subscription, creatorPro };
    },
    retry: false,
  });
  const subscription = loadPremiumResource.data?.subscription ?? initialSubscription;
  const creatorPro = loadPremiumResource.data?.creatorPro ?? initialCreatorPro;
  const error = loadPremiumResource.isError
    ? readErrorMessage(loadPremiumResource.error, 'Could not load premium state.')
    : actionError;
  const loading = loadPremiumResource.isPending;
  const loadPremium = () => loadPremiumResource.refetch();

  const plansByTier = useMemo<Record<PremiumTier, PremiumPlanOption[]>>(
    () => ({
      premium: subscription?.planOptions || [],
      creator_pro: subscription?.creatorPro?.planOptions || [],
    }),
    [subscription]
  );
  const planFor = (tier: PremiumTier): PremiumPlanOption | undefined => {
    const plans = plansByTier[tier];
    return plans.find((plan) => plan.billingCycle === selectedBillingCycle) || plans[0];
  };
  const billingCycles = useMemo(() => {
    const cycles = new Set<string>();
    [...plansByTier.premium, ...plansByTier.creator_pro].forEach((plan) =>
      cycles.add(plan.billingCycle)
    );
    return Array.from(cycles);
  }, [plansByTier]);

  const runAction = async (action: BusyAction, fn: () => Promise<string | null>) => {
    setBusyAction(action);
    setMessage(null);
    setError(null);
    try {
      const nextMessage = await fn();
      setMessage(nextMessage || 'Premium state updated.');
      await loadPremium();
    } catch (err: unknown) {
      setError(readErrorMessage(err, 'Action failed.'));
    } finally {
      setBusyAction(null);
    }
  };

  const tierActive = (tier: PremiumTier): boolean =>
    tier === 'creator_pro' ? Boolean(subscription?.isCreatorPro) : Boolean(subscription?.isPremium);

  const startCheckout = async (tier: PremiumTier) => {
    const selectedPlan = planFor(tier);
    if (!selectedPlan || tierActive(tier)) return;
    setTierChoice(tier);

    setBusyAction('checkout');
    setMessage(null);
    setError(null);

    let checkoutOpened = false;

    try {
      setCheckoutStage('creating');
      const checkout = await premiumAPI.createCheckout({
        plan: tier,
        billingCycle: selectedPlan.billingCycle,
      });

      if (!checkout.orderId || !checkout.keyId) {
        throw new Error('Checkout could not be started. Please try again.');
      }

      setCheckoutStage('awaiting-payment');
      checkoutOpened = true;
      const outcome = await openRazorpayCheckout({
        keyId: checkout.keyId,
        orderId: checkout.orderId,
        amountMinor: checkout.amountMinor ?? selectedPlan.amountMinor,
        currency: checkout.currency || selectedPlan.currency,
        name: checkout.title || 'Vormex',
        description: checkout.description,
        prefill: checkout.prefill,
      });

      if (outcome.status === 'dismissed') {
        setMessage('Payment cancelled. You have not been charged.');
        return;
      }

      if (outcome.status === 'failed') {
        setError(outcome.message);
        return;
      }

      setCheckoutStage('verifying');
      const verified = await premiumAPI.verifyCheckout(outcome.payment);
      setMessage(verified.message || 'Payment successful. Your plan is now active.');
    } catch (err: unknown) {
      setError(readErrorMessage(err, 'Payment could not be completed.'));
    } finally {
      setCheckoutStage('idle');
      setBusyAction(null);
      // The Razorpay webhook can activate the plan even when the browser step fails, so
      // always resync before deciding what the member sees.
      if (checkoutOpened) {
        await loadPremium();
      }
    }
  };

  const ctaLabel = (tier: PremiumTier): string => {
    if (checkoutStage !== 'idle' && tierChoice === tier) return CHECKOUT_STAGE_LABEL[checkoutStage];
    if (tierActive(tier)) return 'Current plan';
    if (!subscription?.checkoutEnabled) return 'Unavailable';
    return tier === 'creator_pro' ? 'Get Creator Pro' : 'Get Premium';
  };


  const boostActive = Boolean(
    subscription?.profileBoost?.isActive || subscription?.profileBoost?.active
  );

  const tiers: {
    id: PremiumTier;
    name: string;
    description: string;
    features: string[];
    featured?: boolean;
  }[] = [
    {
      id: 'premium',
      name: subscription?.title || 'Premium',
      description: subscription?.description || 'Visibility, connections and a stand-out profile.',
      features: subscription?.features || [],
    },
    {
      id: 'creator_pro',
      name: 'Creator Pro',
      description:
        creatorPro?.access.description ||
        subscription?.creatorPro?.description ||
        'Advanced tools for people who publish regularly.',
      features: creatorPro?.access.features || subscription?.creatorPro?.features || [],
      featured: true,
    },
  ];

  const allPlans = [...plansByTier.premium, ...plansByTier.creator_pro];

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-white pb-28 text-gray-900 dark:bg-neutral-950 dark:text-white">
        <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-6">
          <Link
            href="/more"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            More
          </Link>

          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Vormex+</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Choose a plan, or manage the one you have.
          </p>

          {loading ? (
            <div className="flex min-h-[260px] items-center justify-center">
              <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
            </div>
          ) : (
            <>
              {(message || error) && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-6 text-sm ${
                    error
                      ? 'text-red-700 dark:text-red-400'
                      : 'text-emerald-700 dark:text-emerald-400'
                  }`}
                >
                  {error || message}
                </p>
              )}

              {/* Current plan */}
              <section aria-label="Your plan" className="mt-8">
                <h2 className="text-sm font-medium text-gray-500 dark:text-neutral-400">
                  Your plan
                </h2>
                <p className="mt-1 text-lg font-semibold capitalize">
                  {(subscription?.plan || 'free').replace(/_/g, ' ')}
                  <span className="ml-2 text-sm font-normal text-gray-500 dark:text-neutral-400">
                    {subscription?.status || 'inactive'}
                  </span>
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  AI agent: {subscription?.canUseAgent ? 'included' : 'limited'}. Renewal:{' '}
                  {(subscription?.renewalModeLabel || 'manual').toLowerCase()}. Ends:{' '}
                  {formatDate(subscription?.premiumEndsAt).toLowerCase()}.
                  {subscription?.isPremium && subscription?.provider
                    ? ` Billed via ${
                        subscription.provider === 'razorpay' ? 'Razorpay' : subscription.provider
                      }.`
                    : ''}
                </p>
              </section>

              {/* Plans */}
              <section aria-label="Plans" className="mt-10">
                <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 pb-3 dark:border-neutral-800">
                  <h2 className="text-base font-semibold">Plans</h2>
                  {billingCycles.length > 1 && (
                    <div role="group" aria-label="Billing period" className="flex gap-4 text-sm">
                      {billingCycles.map((cycle) => {
                        const saving = allPlans.find(
                          (plan) => plan.billingCycle === cycle && plan.savingsLabel
                        )?.savingsLabel;
                        const on = selectedBillingCycle === cycle;
                        return (
                          <button
                            key={cycle}
                            type="button"
                            aria-pressed={on}
                            onClick={() => setSelectedBillingCycle(cycle)}
                            className={
                              on
                                ? 'font-semibold underline underline-offset-4'
                                : 'text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white'
                            }
                          >
                            {cycle === 'yearly' ? 'Yearly' : cycle === 'monthly' ? 'Monthly' : cycle}
                            {saving && !on ? ` (${saving})` : ''}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <ul className="divide-y divide-gray-200 dark:divide-neutral-800">
                  {tiers.map((tier) => {
                    const plan = planFor(tier.id);
                    const active = tierActive(tier.id);
                    const disabled =
                      !subscription?.checkoutEnabled || active || !plan || busyAction !== null;
                    const busyHere = checkoutStage !== 'idle' && tierChoice === tier.id;
                    return (
                      <li key={tier.id} className="py-6">
                        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold">{tier.name}</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                              {tier.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-right">
                              <span className="text-lg font-semibold">
                                {plan?.displayAmount ?? '-'}
                              </span>
                              {plan && (
                                <span className="block text-xs text-gray-500 dark:text-neutral-400">
                                  per {plan.billingCycle === 'yearly' ? 'year' : 'month'}
                                </span>
                              )}
                            </p>
                            <button
                              type="button"
                              onClick={() => startCheckout(tier.id)}
                              disabled={disabled}
                              className={`inline-flex h-9 min-w-28 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium disabled:cursor-not-allowed ${
                                active
                                  ? 'border border-gray-300 text-gray-500 dark:border-neutral-700 dark:text-neutral-400'
                                  : 'bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                              }`}
                            >
                              {busyHere && <Loader2 className="h-4 w-4 animate-spin" />}
                              {ctaLabel(tier.id)}
                            </button>
                          </div>
                        </div>
                        {plan?.savingsLabel && plan.billingCycle === 'yearly' && (
                          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            {plan.savingsLabel}
                          </p>
                        )}
                        {tier.features.length > 0 && (
                          <ul className="mt-4 grid gap-x-8 gap-y-1.5 text-sm text-gray-700 dark:text-neutral-300 sm:grid-cols-2">
                            {tier.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <p className="border-t border-gray-200 pt-3 text-xs text-gray-500 dark:border-neutral-800 dark:text-neutral-500">
                  {subscription?.checkoutEnabled
                    ? subscription.paymentMode === 'test'
                      ? 'Test mode: payments are processed by Razorpay and no real charges are made.'
                      : 'Payments are processed securely by Razorpay.'
                    : 'Payments are not available right now. Please try again later.'}
                </p>
              </section>

              {/* Profile boost */}
              <section
                aria-label="Profile boost"
                className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 dark:border-neutral-800"
              >
                <div className="max-w-md">
                  <h2 className="text-base font-semibold">
                    Profile boost
                    <span className="ml-2 text-sm font-normal text-gray-500 dark:text-neutral-400">
                      {boostActive ? 'active' : 'inactive'}
                    </span>
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    Rank higher in discovery and matching for 24 hours.
                    {boostActive && ` Ends ${formatDate(subscription?.profileBoost?.endsAt)}.`}
                    {!subscription?.isPremium && ' Requires an active Premium plan.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    runAction(
                      'boost',
                      async () => (await premiumAPI.activateProfileBoost(24)).message || null
                    )
                  }
                  disabled={!subscription?.isPremium || busyAction !== null}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-gray-300 px-4 text-sm font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
                >
                  {busyAction === 'boost' && <Loader2 className="h-4 w-4 animate-spin" />}
                  Activate 24h boost
                </button>
              </section>

              {/* Manage subscription */}
              {(subscription?.canCancel || subscription?.canManageInGooglePlay) && (
                <section
                  aria-label="Manage subscription"
                  className="mt-10 border-t border-gray-200 pt-6 dark:border-neutral-800"
                >
                  <h2 className="text-base font-semibold">Manage subscription</h2>
                  {subscription?.canManageInGooglePlay && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      This plan was bought in the Android app. Manage or cancel it in Google Play.
                    </p>
                  )}
                  {subscription?.canCancel && (
                    <button
                      type="button"
                      onClick={() =>
                        runAction(
                          'cancel',
                          async () => (await premiumAPI.cancelSubscription()).message || null
                        )
                      }
                      disabled={busyAction !== null}
                      className="mt-3 inline-flex h-9 items-center rounded-md border border-gray-300 px-4 text-sm font-medium hover:bg-gray-50 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-900"
                    >
                      {busyAction === 'cancel' ? 'Cancelling...' : 'Cancel subscription'}
                    </button>
                  )}
                </section>
              )}

              <div className="mt-10 border-t border-gray-200 pt-6 dark:border-neutral-800">
                <PremiumBenefits />
              </div>
            </>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
