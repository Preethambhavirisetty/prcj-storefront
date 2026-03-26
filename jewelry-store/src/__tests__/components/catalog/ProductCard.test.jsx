import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../../context/CartContext.jsx';
import ProductCard from '../../../components/catalog/ProductCard.jsx';

const mockProduct = {
  id: 'ring-001',
  name: 'Celestial Solitaire Ring',
  slug: 'celestial-solitaire-ring',
  category: 'rings',
  karat: '18K',
  approxPriceLow: 45000,
  approxPriceHigh: 75000,
  thumbnail: 'https://example.com/img.jpg',
  badge: 'Bestseller',
  isCustomizable: true,
  isFeatured: true,
};

function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <CartProvider>{children}</CartProvider>
    </MemoryRouter>
  );
}

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />, { wrapper: Wrapper });
    expect(screen.getByText('Celestial Solitaire Ring')).toBeInTheDocument();
  });

  it('shows badge when set', () => {
    render(<ProductCard product={mockProduct} />, { wrapper: Wrapper });
    expect(screen.getByText('Bestseller')).toBeInTheDocument();
  });

  it('shows customizable indicator', () => {
    render(<ProductCard product={mockProduct} />, { wrapper: Wrapper });
    expect(screen.getByText(/Custom/i)).toBeInTheDocument();
  });

  it('renders a link to the product page', () => {
    render(<ProductCard product={mockProduct} />, { wrapper: Wrapper });
    const link = screen.getByRole('link', { name: /Celestial Solitaire Ring/i });
    expect(link).toHaveAttribute('href', '/product/celestial-solitaire-ring');
  });

  it('does not show badge when null', () => {
    render(<ProductCard product={{ ...mockProduct, badge: null }} />, { wrapper: Wrapper });
    expect(screen.queryByText('Bestseller')).not.toBeInTheDocument();
  });
});
