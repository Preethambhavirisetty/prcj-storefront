import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import CartItem from '../components/cart/CartItem.jsx';
import OrderSummary from '../components/cart/OrderSummary.jsx';

export default function CartPage() {
  const { state, itemCount } = useCart();

  return (
    <div className="min-h-screen bg-obsidian py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-display-lg text-ivory mb-12">Your Cart</h1>

        {itemCount === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
            <svg
              className="w-16 h-16 text-border"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className="font-serif text-2xl text-ivory">Your cart is empty</p>
            <p className="text-ivory-muted max-w-sm">
              Discover our handcrafted jewellery collections and find your perfect piece.
            </p>
            <Link to="/collections" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart items */}
            <div className="lg:col-span-2">
              {state.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Link
                to="/collections"
                className="inline-block mt-6 text-xs text-gold hover:text-gold-light transition-colors tracking-widest uppercase"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order summary */}
            <div>
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
