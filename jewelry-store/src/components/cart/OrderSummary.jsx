import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { SITE_CONFIG } from '../../config/site.config.js';

function formatPrice(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function OrderSummary({ showCheckoutBtn = true }) {
  const { subtotal, tax, shipping, total, itemCount } = useCart();

  return (
    <div className="bg-obsidian-light border border-border p-6">
      <h2 className="font-serif text-xl text-ivory mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm text-ivory-muted">
          <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-ivory-muted">
          <span>GST (3%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between text-sm text-ivory-muted">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-400">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>

        {shipping > 0 && (
          <p className="text-xs text-gold">
            Free shipping on orders above {formatPrice(SITE_CONFIG.catalog.freeShippingThreshold)}
          </p>
        )}

        <div className="border-t border-border pt-3 flex justify-between font-serif text-lg text-ivory">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {showCheckoutBtn && (
        <Link to="/checkout" className="btn-primary w-full text-center block">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}
