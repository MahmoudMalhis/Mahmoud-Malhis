export default function Header({ t, lang, onToggleLang }) {
  const navItems = [
    { href: '#work', label: t.nav.work },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="me-auto truncate text-sm font-semibold text-text">
          {t.hero.name}
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onToggleLang}
          lang={lang === 'en' ? 'ar' : 'en'}
          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent motion-reduce:transition-none"
        >
          {t.langSwitch}
        </button>
      </div>
    </header>
  );
}
