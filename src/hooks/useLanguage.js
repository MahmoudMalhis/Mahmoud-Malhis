import { useEffect, useState } from 'react';
import { content } from '../content.js';

const STORAGE_KEY = 'lang';

function isLang(value) {
  return Object.hasOwn(content, value);
}

// ?lang=ar in the URL wins on first load, then the saved choice, then English.
function readInitialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLang(fromUrl)) return fromUrl;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Storage can be blocked; fall back to the default language.
  }
  return 'en';
}

export function useLanguage() {
  const [lang, setLang] = useState(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content[lang].dir;
  }, [lang]);

  function toggleLang() {
    const next = lang === 'en' ? 'ar' : 'en';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice still applies for this visit.
    }
    setLang(next);
  }

  return { lang, t: content[lang], toggleLang };
}
