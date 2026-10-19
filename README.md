# 💎 PRCJ Storefront

![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/tested_with-Vitest-6E9F18?logo=vitest&logoColor=white)

> Formerly named `Vacationplanner.ai`. The storefront code lives in `jewelry-store/`; its back end is in [`prcj-api`](https://github.com/Preethambhavirisetty/prcj-api).

A config-driven React storefront for the PRCJ jewelry brand. It has a catalog, filters, cart, multi-step checkout and feature flags, and runs on mock data until an API is connected.

## Features
- Pages: Home, Collections, Category, Product detail, Cart, Checkout, About, Contact, Trust
- Catalog filters, active-filter chips and sorting
- Cart state via React Context + reducer, with a `useLocalStorage` hook
- Multi-step checkout (shipping → payment → submit → confirmation)
- Branding, currency, tax and shipping thresholds driven by `src/config/site.config.js`
- Feature flags via `VITE_FEATURE_*` env vars
- API layer with React Query; mock data in `src/mock/`
- Vitest + Testing Library tests; Dockerfile + nginx config

## Screenshot
<!-- Add homepage + product page screenshots: docs/home.png -->
![Home](docs/home.png)

## Tech stack
React 19 · Vite 8 · React Router 7 · TanStack React Query 5 · Tailwind CSS 3 · Vitest 4 · ESLint 9 · Docker/nginx

## Project structure
```
jewelry-store/
├── src/
│   ├── api/          # client, catalog, content, leads
│   ├── components/   # cart (+checkout), catalog, home, layout, product, ui
│   ├── config/       # site.config, features, theme
│   ├── context/      # CartContext, cartReducer
│   ├── hooks/        # useCart, useFilters, useLocalStorage
│   ├── mock/         # products, categories, pages
│   ├── pages/        # route pages
│   └── __tests__/    # Vitest suites
├── Dockerfile, nginx.conf
└── .env.example
```

## Getting started
```bash
git clone https://github.com/Preethambhavirisetty/prcj-storefront.git
cd prcj-storefront/jewelry-store
cp .env.example .env
npm install
npm run dev        # Vite dev server
npm test           # Vitest
npm run build && npm run preview
```

## Environment variables
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_FEATURE_CART=true
VITE_FEATURE_PAYMENT=false
VITE_FEATURE_CHATBOT=false
VITE_FEATURE_WISHLIST=false
VITE_FEATURE_ADMIN=false
VITE_FEATURE_LOYALTY=false
VITE_GA_MEASUREMENT_ID=
```

## Contributing
1. Fork the repo and create a branch: `git checkout -b feature/your-change`
2. Commit using [Conventional Commits](https://www.conventionalcommits.org/) (`feat: …`, `fix: …`)
3. Push and open a pull request against `main`

## License
No license file yet. Add one (MIT is a common choice) via **Add file → Create new file → `LICENSE` → Choose a license template**, then update this section.
