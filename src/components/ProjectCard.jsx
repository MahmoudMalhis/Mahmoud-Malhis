import { ArrowUpRight } from 'lucide-react';
import { links } from '../content.js';
import { imageUrl } from '../lib/assets.js';
import ButtonLink from './ButtonLink.jsx';
import TagList from './TagList.jsx';

export default function ProjectCard({ item, name }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50 motion-reduce:transition-none">
      <img
        src={imageUrl(item.image)}
        alt={item.imageAlt}
        width="1200"
        height="750"
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text">{name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{item.text}</p>
        <div className="mt-5">
          <TagList items={item.stack} />
        </div>
        <div className="mt-6">
          {item.link ? (
            <ButtonLink href={links[item.link]} target="_blank" rel="noopener noreferrer" variant="secondary">
              {item.linkText}
              <ArrowUpRight aria-hidden="true" className="size-4 rtl:-scale-x-100" />
            </ButtonLink>
          ) : (
            <span className="inline-flex rounded-full border border-border px-3 py-1.5 text-sm text-muted">
              {item.linkText}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
