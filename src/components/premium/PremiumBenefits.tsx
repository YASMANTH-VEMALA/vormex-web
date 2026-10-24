import { Bot, Rocket, Sparkles, Users } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Get your posts discovered',
    description:
      'Automatic priority for eligible posts helps your ideas reach more of the right people.',
  },
  {
    icon: Users,
    title: 'Grow your network',
    description:
      'Unlimited connection requests and priority discovery help you meet future teammates and collaborators.',
  },
  {
    icon: Sparkles,
    title: 'Make your profile stand out',
    description:
      'Show your work with a Premium badge, profile customization, and a featured project showcase.',
  },
  {
    icon: Bot,
    title: 'Create with AI support',
    description:
      'Use the AI agent to refine your bio, shape a pitch, and find teammates for your next idea.',
  },
];

export function PremiumBenefits() {
  return (
    <section
      aria-labelledby="premium-benefits"
      className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
        Why Vormex Premium?
      </p>
      <h2 id="premium-benefits" className="mt-2 text-2xl font-bold tracking-tight">
        Give your ideas a bigger audience.
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        More visibility, meaningful connections, and tools to help you build your next opportunity.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-xl bg-white p-4 dark:bg-neutral-900"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-gray-500 dark:text-neutral-400">
        Post priority applies to content eligible for the viewer. Actual reach varies with
        relevance, freshness, and engagement.
      </p>
    </section>
  );
}

export function PremiumMetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-gray-950 dark:text-white">{value}</p>
    </div>
  );
}
