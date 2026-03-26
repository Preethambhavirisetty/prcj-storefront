export const initialState = {
  items: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity = 1 } = action.payload;
      const existingIdx = state.items.findIndex((i) => i.id === product.id);
      if (existingIdx !== -1) {
        const updated = [...state.items];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
        };
        return { ...state, items: updated };
      }
      return {
        ...state,
        items: [...state.items, { ...product, quantity }],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== id) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      };
    }

    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
}
