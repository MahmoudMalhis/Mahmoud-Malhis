import { useState } from 'react';
import { imageUrl } from '../lib/assets.js';

const DESKTOP_SIZE = { width: 1440, height: 900 };
const MOBILE_SIZE = { width: 780, height: 1688 };

export default function ScreenshotGallery({ shots }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = shots[activeIndex];
  const activeSize = active.mobile ? MOBILE_SIZE : DESKTOP_SIZE;

  return (
    <div>
      {active.mobile ? (
        <div className="mx-auto max-w-[260px] overflow-hidden rounded-[2.5rem] border-[10px] border-text bg-text shadow-lg">
          <img
            src={imageUrl(active.src)}
            alt={active.alt}
            width={activeSize.width}
            height={activeSize.height}
            className="block h-auto w-full"
          />
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <img
            src={imageUrl(active.src)}
            alt={active.alt}
            width={activeSize.width}
            height={activeSize.height}
            className="block aspect-[16/10] w-full object-cover object-top"
          />
        </div>
      )}

      <ul className="mt-5 flex flex-wrap justify-center gap-3">
        {shots.map((shot, index) => (
          <li key={shot.src}>
            <button
              type="button"
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`block overflow-hidden rounded-lg border-2 transition-colors motion-reduce:transition-none ${
                index === activeIndex ? 'border-accent' : 'border-transparent hover:border-border'
              }`}
            >
              <img
                src={imageUrl(shot.src)}
                alt={shot.alt}
                width={DESKTOP_SIZE.width}
                height={DESKTOP_SIZE.height}
                loading="lazy"
                className="h-16 w-24 object-cover object-top sm:h-20 sm:w-28"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
