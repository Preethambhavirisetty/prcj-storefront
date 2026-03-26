import { describe, it, expect } from 'vitest';
import { cartReducer, initialState } from '../../context/cartReducer.js';

const mockProduct = {
  id: 'ring-001',
  name: 'Celestial Solitaire Ring',
  approxPriceLow: 45000,
  thumbnail: 'https://example.com/img.jpg',
  karat: '18K',
  category: 'rings',
};

describe('cartReducer', () => {
  it('starts with empty cart', () => {
    expect(initialState.items).toHaveLength(0);
  });

  it('ADD_ITEM adds a new item', () => {
    const state = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 1 },
    });
    expect(state.items).toHaveLength(1);
    expect(state.items[0].id).toBe('ring-001');
    expect(state.items[0].quantity).toBe(1);
  });

  it('ADD_ITEM increments quantity for duplicate', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 1 },
    });
    state = cartReducer(state, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 2 },
    });
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(3);
  });

  it('REMOVE_ITEM removes the item', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 1 },
    });
    state = cartReducer(state, {
      type: 'REMOVE_ITEM',
      payload: { id: 'ring-001' },
    });
    expect(state.items).toHaveLength(0);
  });

  it('UPDATE_QUANTITY sets exact quantity', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 1 },
    });
    state = cartReducer(state, {
      type: 'UPDATE_QUANTITY',
      payload: { id: 'ring-001', quantity: 5 },
    });
    expect(state.items[0].quantity).toBe(5);
  });

  it('UPDATE_QUANTITY removes item when quantity <= 0', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 1 },
    });
    state = cartReducer(state, {
      type: 'UPDATE_QUANTITY',
      payload: { id: 'ring-001', quantity: 0 },
    });
    expect(state.items).toHaveLength(0);
  });

  it('CLEAR_CART empties all items', () => {
    let state = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: { product: mockProduct, quantity: 3 },
    });
    state = cartReducer(state, { type: 'CLEAR_CART' });
    expect(state.items).toHaveLength(0);
  });

  it('returns current state for unknown action', () => {
    const state = cartReducer(initialState, { type: 'UNKNOWN' });
    expect(state).toBe(initialState);
  });
});
