import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext.jsx';
import CartPage from '../../pages/CartPage.jsx';

function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <CartProvider>{children}</CartProvider>
    </MemoryRouter>
  );
}

describe('CartPage', () => {
  it('shows empty state when cart is empty', () => {
    render(<CartPage />, { wrapper: Wrapper });
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Start Shopping/i })).toBeInTheDocument();
  });

  it('renders cart heading', () => {
    render(<CartPage />, { wrapper: Wrapper });
    expect(screen.getByRole('heading', { name: /Your Cart/i })).toBeInTheDocument();
  });
});
