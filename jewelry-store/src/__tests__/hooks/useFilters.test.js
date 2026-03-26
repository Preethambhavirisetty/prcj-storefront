import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFilters } from '../../hooks/useFilters.js';

describe('useFilters', () => {
  it('starts with default values', () => {
    const { result } = renderHook(() => useFilters());
    expect(result.current.filters.sort).toBe('featured');
    expect(result.current.filters.category).toBe('');
    expect(result.current.filters.page).toBe(1);
  });

  it('applies overrides as initial state', () => {
    const { result } = renderHook(() => useFilters({ category: 'rings' }));
    expect(result.current.filters.category).toBe('rings');
  });

  it('setFilter updates a single key and resets page', () => {
    const { result } = renderHook(() => useFilters());
    act(() => result.current.setFilter('karat', '22K'));
    expect(result.current.filters.karat).toBe('22K');
    expect(result.current.filters.page).toBe(1);
  });

  it('resetFilters clears all filters', () => {
    const { result } = renderHook(() => useFilters());
    act(() => result.current.setFilter('karat', '22K'));
    act(() => result.current.resetFilters());
    expect(result.current.filters.karat).toBe('');
  });

  it('activeFilterCount counts non-empty, non-sort/page fields', () => {
    const { result } = renderHook(() => useFilters());
    expect(result.current.activeFilterCount).toBe(0);
    act(() => result.current.setFilter('karat', '22K'));
    expect(result.current.activeFilterCount).toBe(1);
  });
});
