import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer, initialState } from './cartReducer.js';
import { SITE_CONFIG } from '../config/site.config.js';

const CartContext = createContext(null);

const STORAGE_KEY = 'prcj_cart';

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : init;
    } catch {
      return init;
    }
  });

  // Sync to localStorage on every state change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Derived values
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.approxPriceLow * i.quantity, 0);
  const tax = Math.round(subtotal * SITE_CONFIG.catalog.taxRate);
  const shipping = subtotal >= SITE_CONFIG.catalog.freeShippingThreshold || subtotal === 0 ? 0 : 500;
  const total = subtotal + tax + shipping;

  return (
    <CartContext.Provider value={{ state, dispatch, itemCount, subtotal, tax, shipping, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
