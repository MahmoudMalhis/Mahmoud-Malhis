export default function TagList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
