import { useState, useCallback } from 'react';

const DEFAULT_FILTERS = {
  category: '',
  karat: '',
  priceMin: '',
  priceMax: '',
  search: '',
  sort: 'featured',
  page: 1,
};

export function useFilters(overrides = {}) {
  const [filters, setFiltersState] = useState({ ...DEFAULT_FILTERS, ...overrides });

  const setFilter = useCallback((key, value) => {
    setFiltersState((prev) => ({ ...prev, [key]: value, page: 1 }));
  }, []);

  const setFilters = useCallback((partial) => {
    setFiltersState((prev) => ({ ...prev, ...partial, page: 1 }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState({ ...DEFAULT_FILTERS, ...overrides });
  }, [overrides]);

  const setPage = useCallback((page) => {
    setFiltersState((prev) => ({ ...prev, page }));
  }, []);

  const activeFilterCount = Object.entries(filters).filter(
    ([key, val]) => !['sort', 'page'].includes(key) && val !== ''
  ).length;

  return { filters, setFilter, setFilters, resetFilters, setPage, activeFilterCount };
}
