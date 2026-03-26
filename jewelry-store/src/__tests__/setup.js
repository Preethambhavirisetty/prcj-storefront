import '@testing-library/jest-dom';

// Mock import.meta.env for tests
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_API_BASE_URL: '',
    VITE_FEATURE_CART: 'true',
    VITE_FEATURE_PAYMENT: 'false',
    VITE_FEATURE_CHATBOT: 'false',
    VITE_FEATURE_WISHLIST: 'false',
    VITE_FEATURE_ADMIN: 'false',
    VITE_FEATURE_LOYALTY: 'false',
  },
  writable: true,
});
