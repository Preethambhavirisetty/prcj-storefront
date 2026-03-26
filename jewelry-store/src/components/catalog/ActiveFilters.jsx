const FILTER_LABELS = {
  category: (v) => v,
  karat: (v) => v,
  priceMin: (v) => `From ₹${Number(v).toLocaleString('en-IN')}`,
  priceMax: (v) => `To ₹${Number(v).toLocaleString('en-IN')}`,
  search: (v) => `"${v}"`,
  customizable: () => 'Customisable',
};

export default function ActiveFilters({ filters, setFilter, resetFilters }) {
  const active = Object.entries(filters).filter(
    ([key, val]) => !['sort', 'page'].includes(key) && val !== '' && val !== undefined
  );

  if (active.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {active.map(([key, val]) => (
        <span
          key={key}
          className="flex items-center gap-1.5 text-xs font-sans bg-obsidian-medium border border-gold/40 text-ivory-muted px-3 py-1.5"
        >
          {FILTER_LABELS[key]?.(val) ?? val}
          <button
            onClick={() => setFilter(key, '')}
            aria-label={`Remove ${key} filter`}
            className="text-gold hover:text-gold-light ml-1"
          >
            ×
          </button>
        </span>
      ))}
      <button
        onClick={resetFilters}
        className="text-xs text-gold hover:text-gold-light underline transition-colors"
      >
        Clear all
      </button>
    </div>
  );
}
