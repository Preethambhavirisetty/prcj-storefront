import { describe, it, expect } from 'vitest';
import { getCategories, getProducts, getProduct, getFeaturedProducts } from '../../api/catalog.js';

describe('catalog API (mock mode)', () => {
  it('getCategories returns 4 categories', async () => {
    const cats = await getCategories();
    expect(cats).toHaveLength(4);
    expect(cats[0]).toHaveProperty('id');
    expect(cats[0]).toHaveProperty('label');
  });

  it('getProducts returns paginated result', async () => {
    const result = await getProducts({});
    expect(result).toHaveProperty('items');
    expect(result).toHaveProperty('total');
    expect(result.items.length).toBeGreaterThan(0);
  });

  it('getProducts filters by category', async () => {
    const result = await getProducts({ category: 'rings' });
    expect(result.items.every((p) => p.category === 'rings')).toBe(true);
  });

  it('getProducts filters by karat', async () => {
    const result = await getProducts({ karat: '22K' });
    expect(result.items.every((p) => p.karat === '22K')).toBe(true);
  });

  it('getProduct returns full product + related', async () => {
    const product = await getProduct('celestial-solitaire-ring');
    expect(product.slug).toBe('celestial-solitaire-ring');
    expect(Array.isArray(product.related)).toBe(true);
  });

  it('getProduct throws for unknown slug', async () => {
    await expect(getProduct('does-not-exist')).rejects.toThrow();
  });

  it('getFeaturedProducts returns only featured items', async () => {
    const items = await getFeaturedProducts();
    expect(items.every((p) => p.isFeatured)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
  });
});
