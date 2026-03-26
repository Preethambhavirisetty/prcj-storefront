import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../../context/CartContext.jsx';
import CartItem from '../../../components/cart/CartItem.jsx';

const mockItem = {
  id: 'ring-001',
  name: 'Celestial Solitaire Ring',
  category: 'rings',
  karat: '18K',
  approxPriceLow: 45000,
  thumbnail: 'https://example.com/img.jpg',
  quantity: 2,
};

function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <CartProvider>{children}</CartProvider>
    </MemoryRouter>
  );
}

describe('CartItem', () => {
  it('renders product name and quantity', () => {
    render(<CartItem item={mockItem} />, { wrapper: Wrapper });
    expect(screen.getByText('Celestial Solitaire Ring')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('has increase and decrease quantity buttons', () => {
    render(<CartItem item={mockItem} />, { wrapper: Wrapper });
    expect(screen.getByLabelText('Increase quantity')).toBeInTheDocument();
    expect(screen.getByLabelText('Decrease quantity')).toBeInTheDocument();
  });

  it('has remove button', () => {
    render(<CartItem item={mockItem} />, { wrapper: Wrapper });
    expect(screen.getByRole('button', { name: /Remove/i })).toBeInTheDocument();
  });
});
