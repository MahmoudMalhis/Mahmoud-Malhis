import { Mail, MessageCircle } from 'lucide-react';
import { links } from '../content.js';
import ButtonLink from './ButtonLink.jsx';
import Section from './Section.jsx';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';

const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' };

export default function Contact({ t }) {
  const { contact } = t;

  return (
    <Section id="contact">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-accent">{contact.label}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">{contact.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{contact.text}</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={links.whatsapp} {...EXTERNAL}>
          <MessageCircle aria-hidden="true" className="size-4" />
          {contact.whatsapp}
        </ButtonLink>
        <ButtonLink href={`mailto:${links.email}`} variant="secondary">
          <Mail aria-hidden="true" className="size-4" />
          {contact.email}
        </ButtonLink>
        <ButtonLink href={links.linkedin} variant="secondary" {...EXTERNAL}>
          <LinkedInIcon className="size-4" />
          {contact.linkedin}
        </ButtonLink>
        <ButtonLink href={links.github} variant="secondary" {...EXTERNAL}>
          <GitHubIcon className="size-4" />
          {contact.github}
        </ButtonLink>
      </div>
    </Section>
  );
}
