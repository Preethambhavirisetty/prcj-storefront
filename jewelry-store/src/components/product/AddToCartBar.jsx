import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import Button from '../ui/Button.jsx';

export default function AddToCartBar({ product }) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product: {
          id: product.id,
          name: product.name,
          approxPriceLow: product.approxPriceLow,
          thumbnail: product.thumbnail,
          karat: product.karat,
          category: product.category,
        },
        quantity,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mt-8 space-y-4">
      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-sans tracking-widest uppercase text-ivory-muted">Qty</span>
        <div className="flex items-center border border-border">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-ivory-muted hover:text-gold transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center text-ivory text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-ivory-muted hover:text-gold transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <span className="text-xs text-green-400 tracking-wider">
          {product.inStock !== false ? '✓ In Stock' : '✗ Out of Stock'}
        </span>
      </div>

      {/* Add to Cart */}
      <Button
        variant="primary"
        size="lg"
        onClick={handleAdd}
        className="w-full"
        disabled={product.inStock === false}
      >
        {added ? '✓ Added to Cart' : 'Add to Cart'}
      </Button>

      {/* Inquiry */}
      <Button variant="ghost" size="lg" className="w-full" as="a" href="/contact">
        Enquire About This Piece
      </Button>
    </div>
  );
}
