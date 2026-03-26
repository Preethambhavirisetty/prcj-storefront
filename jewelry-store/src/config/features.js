// Feature flags — toggle entire features without touching component logic.
// Enable via environment variables (VITE_FEATURE_* = "true").
// To add a new feature:
//   1. Add a key here with a VITE_FEATURE_* env var
//   2. Add matching var to .env.example
//   3. Wrap your component/route: { FEATURES.myFlag && <MyComponent /> }
//   4. Add a test in __tests__/config/features.test.js

export const FEATURES = {
  // Always-on
  catalog: true,
  contactForm: true,
  appointmentForm: true,

  // Phase 2 — enable when backend is ready
  isCartCheckout: import.meta.env.VITE_FEATURE_CART === 'true',
  isPaymentSystem: import.meta.env.VITE_FEATURE_PAYMENT === 'true',
  isChatBot: import.meta.env.VITE_FEATURE_CHATBOT === 'true',
  isWishlist: import.meta.env.VITE_FEATURE_WISHLIST === 'true',
  isAdminPanel: import.meta.env.VITE_FEATURE_ADMIN === 'true',
  isLoyaltyPoints: import.meta.env.VITE_FEATURE_LOYALTY === 'true',
};
