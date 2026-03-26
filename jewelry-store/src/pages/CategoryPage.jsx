import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProducts, getCategories } from '../api/catalog.js';
import { useFilters } from '../hooks/useFilters.js';
import FilterSidebar from '../components/catalog/FilterSidebar.jsx';
import SortDropdown from '../components/catalog/SortDropdown.jsx';
import ActiveFilters from '../components/catalog/ActiveFilters.jsx';
import ProductGrid from '../components/catalog/ProductGrid.jsx';
import { PageSpinner } from '../components/ui/Spinner.jsx';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const { filters, setFilter, resetFilters, activeFilterCount } = useFilters({
    category: categorySlug,
  });
  const [filtersOpen, setFiltersOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => getProducts({ ...filters, category: categorySlug }),
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const currentCategory = categories?.find((c) => c.id === categorySlug);

  return (
    <div className="min-h-screen bg-obsidian py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-2">Collections</p>
          <h1 className="font-serif text-display-lg text-ivory capitalize">
            {currentCategory?.label || categorySlug}
          </h1>
          {currentCategory?.description && (
            <p className="text-ivory-muted mt-3 max-w-lg">{currentCategory.description}</p>
          )}
        </div>

        {/* Mobile filter toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6">
          <button
            onClick={() => setFiltersOpen((o) => !o)}
            className="text-xs font-sans tracking-widest uppercase text-ivory-muted hover:text-ivory border border-border px-4 py-2 transition-colors"
          >
            {filtersOpen ? 'Hide' : `Filters${activeFilterCount ? ` (${activeFilterCount})` : ''}`}
          </button>
          <SortDropdown value={filters.sort} onChange={(v) => setFilter('sort', v)} />
        </div>

        <div className="flex gap-12">
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-56 flex-shrink-0`}>
            <FilterSidebar
              filters={filters}
              setFilter={setFilter}
              resetFilters={resetFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="hidden lg:flex justify-end mb-6">
              <SortDropdown value={filters.sort} onChange={(v) => setFilter('sort', v)} />
            </div>
            <ActiveFilters filters={filters} setFilter={setFilter} resetFilters={resetFilters} />
            {isLoading ? (
              <PageSpinner />
            ) : (
              <ProductGrid products={data?.items || []} total={data?.total || 0} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
