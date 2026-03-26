import { PRODUCTS } from '../mock/products.js';
import { CATEGORIES } from '../mock/categories.js';

// ── Simulated network delay for realistic loading states ──────────────────
const delay = (ms = 150) => new Promise((r) => setTimeout(r, ms));

// ── Filters & sort ────────────────────────────────────────────────────────
function applyFilters(products, filters = {}) {
  let result = [...products];

  if (filters.category) {
    result = result.filter((p) => p.category === filters.category);
  }
  if (filters.karat) {
    result = result.filter((p) => p.karat === filters.karat);
  }
  if (filters.priceMin !== undefined && filters.priceMin !== '') {
    result = result.filter((p) => p.approxPriceLow >= Number(filters.priceMin));
  }
  if (filters.priceMax !== undefined && filters.priceMax !== '') {
    result = result.filter((p) => p.approxPriceHigh <= Number(filters.priceMax));
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  // Sort
  const sort = filters.sort || 'featured';
  if (sort === 'price_asc') result.sort((a, b) => a.approxPriceLow - b.approxPriceLow);
  else if (sort === 'price_desc') result.sort((a, b) => b.approxPriceHigh - a.approxPriceHigh);
  else if (sort === 'newest') result.sort((a, b) => (b.badge === 'New' ? 1 : -1));
  else result.sort((a, b) => (b.isFeatured ? 1 : -1));

  return result;
}

// ── Public API ────────────────────────────────────────────────────────────
// To switch to real backend: replace each function body with client.get(...)

export async function getCategories() {
  await delay(100);
  return CATEGORIES;
}

export async function getProducts(filters = {}) {
  await delay(200);
  const filtered = applyFilters(PRODUCTS, filters);
  const page = Number(filters.page) || 1;
  const pageSize = Number(filters.pageSize) || 12;
  const start = (page - 1) * pageSize;
  return {
    items: filtered.slice(start, start + pageSize),
    total: filtered.length,
    page,
    pageSize,
  };
}

export async function getProduct(slug) {
  await delay(150);
  const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);
  if (!product) throw new Error(`Product not found: ${slug}`);
  const related = PRODUCTS.filter((p) => product.relatedIds.includes(p.id));
  return { ...product, related };
}

export async function getFeaturedProducts() {
  await delay(150);
  return PRODUCTS.filter((p) => p.isFeatured);
}
