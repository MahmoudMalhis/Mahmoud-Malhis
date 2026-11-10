import { STUDIO_NAME } from '../content.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ t, lang }) {
  return (
    <div className="mt-20 sm:mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">{t.projects.label}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {t.projects.items.map((item) => (
          <ProjectCard
            key={item.key}
            item={item}
            name={item.key === 'studio' ? STUDIO_NAME[lang] : item.name}
          />
        ))}
      </div>
    </div>
  );
}
