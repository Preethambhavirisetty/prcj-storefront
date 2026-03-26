const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// When the real FastAPI backend is ready, set VITE_API_BASE_URL and
// replace the mock resolvers in catalog.js / content.js / leads.js
// with: return client.get('/api/v1/catalog/products', params)

export const client = {
  async get(path, params = {}) {
    const url = new URL(`${BASE_URL}${path}`);
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        url.searchParams.set(k, v);
      }
    });
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
    return res.json();
  },

  async post(path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
    return res.json();
  },
};
