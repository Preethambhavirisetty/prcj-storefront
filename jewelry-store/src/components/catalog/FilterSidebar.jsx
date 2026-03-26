import { useState } from 'react';
import Button from '../ui/Button.jsx';

const KARATS = ['22K', '18K', '14K', 'Silver 925'];
const PRICE_RANGES = [
  { label: 'Under ₹25,000', min: '', max: 25000 },
  { label: '₹25,000 – ₹75,000', min: 25000, max: 75000 },
  { label: '₹75,000 – ₹2,00,000', min: 75000, max: 200000 },
  { label: 'Above ₹2,00,000', min: 200000, max: '' },
];

function AccordionSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex justify-between items-center w-full text-left text-xs font-sans tracking-widest uppercase text-ivory-muted hover:text-ivory transition-colors"
        aria-expanded={open}
      >
        {title}
        <span className="text-gold text-base leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function FilterSidebar({ filters, setFilter, resetFilters, activeFilterCount }) {
  return (
    <aside className="w-full" aria-label="Product filters">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs font-sans tracking-widest uppercase text-ivory">Filters</h2>
        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-xs text-gold hover:text-gold-light transition-colors"
          >
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Karat */}
      <AccordionSection title="Karat">
        <ul className="space-y-2">
          {KARATS.map((k) => (
            <li key={k}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.karat === k}
                  onChange={() => setFilter('karat', filters.karat === k ? '' : k)}
                  className="w-4 h-4 border border-border bg-obsidian accent-gold cursor-pointer"
                />
                <span className="text-sm text-ivory-muted group-hover:text-ivory transition-colors">
                  {k}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </AccordionSection>

      {/* Price range */}
      <AccordionSection title="Price Range">
        <ul className="space-y-2">
          {PRICE_RANGES.map(({ label, min, max }) => {
            const active = filters.priceMin === String(min) && filters.priceMax === String(max);
            return (
              <li key={label}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => {
                      if (active) {
                        setFilter('priceMin', '');
                        setFilter('priceMax', '');
                      } else {
                        setFilter('priceMin', String(min));
                        setFilter('priceMax', String(max));
                      }
                    }}
                    className="w-4 h-4 border border-border bg-obsidian accent-gold cursor-pointer"
                  />
                  <span className="text-sm text-ivory-muted group-hover:text-ivory transition-colors">
                    {label}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </AccordionSection>

      {/* Customisable */}
      <AccordionSection title="Options">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.customizable === 'true'}
            onChange={() =>
              setFilter('customizable', filters.customizable === 'true' ? '' : 'true')
            }
            className="w-4 h-4 border border-border bg-obsidian accent-gold cursor-pointer"
          />
          <span className="text-sm text-ivory-muted group-hover:text-ivory transition-colors">
            Customisable
          </span>
        </label>
      </AccordionSection>
    </aside>
  );
}
