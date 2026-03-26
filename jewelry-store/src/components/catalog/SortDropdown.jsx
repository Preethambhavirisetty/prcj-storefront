const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort-select"
        className="text-xs font-sans tracking-widest uppercase text-ivory-muted whitespace-nowrap"
      >
        Sort by
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-obsidian-light border border-border text-ivory text-sm px-3 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer"
      >
        {SORT_OPTIONS.map(({ value: v, label }) => (
          <option key={v} value={v}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
