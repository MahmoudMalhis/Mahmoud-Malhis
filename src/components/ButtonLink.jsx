const BASE =
  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors motion-reduce:transition-none';

const VARIANTS = {
  primary: 'bg-accent text-on-accent hover:bg-accent/90',
  secondary: 'border border-border bg-surface text-text hover:border-accent hover:text-accent',
};

export default function ButtonLink({ variant = 'primary', children, ...props }) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]}`} {...props}>
      {children}
    </a>
  );
}
