import Section from './Section.jsx';

export default function Stats({ stats }) {
  return (
    <Section className="pb-16 sm:pb-24">
      <ul className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <li key={stat.label} className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
