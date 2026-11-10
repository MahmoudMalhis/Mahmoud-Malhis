import Section from './Section.jsx';
import TagList from './TagList.jsx';

export default function Skills({ t }) {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{t.skills.label}</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {t.skills.groups.map((group) => (
          <article key={group.name} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-text">{group.name}</h3>
            <div className="mt-4">
              <TagList items={group.items} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
