const styles = {
  New: 'bg-gold text-obsidian',
  Bestseller: 'bg-obsidian-medium border border-gold text-gold',
  Limited: 'bg-red-900 text-red-200',
  count: 'bg-gold text-obsidian',
};

export function Badge({ type = 'New', children }) {
  return (
    <span
      className={`inline-block text-[10px] font-sans font-semibold tracking-widest uppercase px-2 py-0.5 ${styles[type] || styles.New}`}
    >
      {children}
    </span>
  );
}

export function CartBadge({ count }) {
  if (!count) return null;
  return (
    <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
      {count > 9 ? '9+' : count}
    </span>
  );
}
