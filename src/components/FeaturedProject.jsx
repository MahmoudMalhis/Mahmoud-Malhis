import { ArrowUpRight, Check } from 'lucide-react';
import { links } from '../content.js';
import ButtonLink from './ButtonLink.jsx';
import ScreenshotGallery from './ScreenshotGallery.jsx';
import TagList from './TagList.jsx';

export default function FeaturedProject({ t }) {
  const project = t.featured;

  return (
    <article>
      <p className="text-sm font-medium text-accent">{project.label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">{project.name}</h2>
      <p className="mt-2 text-muted">{project.role}</p>

      <div className="mt-10">
        <ScreenshotGallery shots={project.shots} />
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-text">{project.problem.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{project.problem.text}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text">{project.built.title}</h3>
          <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-muted marker:text-accent">
            {project.built.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-text">{project.results.title}</h3>
        <ul className="mt-4 space-y-3">
          {project.results.items.map((item) => (
            <li key={item} className="flex gap-3 text-text">
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <TagList items={project.stack} />
      </div>

      <div className="mt-8">
        <ButtonLink href={links.irtaq} target="_blank" rel="noopener noreferrer" variant="secondary">
          {project.visit}
          <ArrowUpRight aria-hidden="true" className="size-4 rtl:-scale-x-100" />
        </ButtonLink>
      </div>
    </article>
  );
}
