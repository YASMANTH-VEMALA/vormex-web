const benefits = [
  {
    title: 'Wider reach',
    description: 'Eligible posts get priority placement so your work reaches more of the right people.',
  },
  {
    title: 'Unlimited connections',
    description: 'Send as many connection requests as you need and get priority in discovery.',
  },
  {
    title: 'Stand-out profile',
    description: 'A Premium badge, profile customization and a featured project showcase.',
  },
  {
    title: 'AI assistant',
    description: 'Refine your bio, shape a pitch and find teammates with the Vormex agent.',
  },
];

export function PremiumBenefits() {
  return (
    <section aria-labelledby="premium-benefits">
      <h2 id="premium-benefits" className="text-base font-semibold text-gray-900 dark:text-white">
        What&apos;s included
      </h2>
      <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {benefits.map(({ title, description }) => (
          <div key={title}>
            <dt className="text-sm font-medium text-gray-900 dark:text-white">{title}</dt>
            <dd className="mt-0.5 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
              {description}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-xs leading-relaxed text-gray-500 dark:text-neutral-500">
        Post priority applies to content eligible for the viewer. Actual reach varies with
        relevance, freshness and engagement.
      </p>
    </section>
  );
}
