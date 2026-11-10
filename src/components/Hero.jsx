import { links } from '../content.js';
import { imageUrl } from '../lib/assets.js';
import ButtonLink from './ButtonLink.jsx';
import Section from './Section.jsx';

export default function Hero({ t }) {
  const { hero } = t;

  return (
    <Section className="pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="text-sm font-medium text-accent">{hero.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text sm:text-5xl">{hero.name}</h1>
          <p className="mt-4 text-xl font-medium text-text sm:text-2xl">{hero.title}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={links.cv} download>
              {hero.cv}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {hero.contact}
            </ButtonLink>
          </div>
        </div>

        <div className="order-1 mx-auto w-[180px] md:order-2 md:w-[320px]">
          <div className="aspect-square rounded-full bg-accent-soft p-6 md:p-8">
            <img
              src={imageUrl('avatar.png')}
              alt={hero.avatarAlt}
              width="400"
              height="400"
              fetchPriority="high"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
