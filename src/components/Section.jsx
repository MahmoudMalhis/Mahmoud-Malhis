export default function Section({ id, className = 'py-16 sm:py-24', children }) {
  return (
    <section id={id} className={`scroll-mt-16 ${className}`}>
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">{children}</div>
    </section>
  );
}
