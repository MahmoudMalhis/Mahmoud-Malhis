export default function Footer({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1100px] px-4 py-8 text-sm text-muted sm:px-6">
        {t.footer} {year}
      </div>
    </footer>
  );
}
