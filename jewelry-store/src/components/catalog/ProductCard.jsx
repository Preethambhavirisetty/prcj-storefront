import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { Badge } from '../ui/Badge.jsx';
import { SITE_CONFIG } from '../../config/site.config.js';

function formatPrice(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        quantity: 1,
      },
    });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block bg-obsidian-light overflow-hidden"
      aria-label={`View ${product.name}`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-400 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            className="btn-primary text-xs"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge type={product.badge}>{product.badge}</Badge>
          </div>
        )}

        {/* Customizable indicator */}
        {product.isCustomizable && (
          <div className="absolute top-3 right-3">
            <span className="text-[9px] font-sans tracking-wider uppercase bg-obsidian/80 text-ivory-muted px-2 py-1">
              Custom
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] text-gold tracking-widest uppercase mb-1">{product.category}</p>
        <h3 className="font-serif text-ivory text-base leading-snug mb-2 group-hover:text-gold transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-ivory-muted text-sm">
            {formatPrice(product.approxPriceLow)}
          </span>
          {product.approxPriceHigh > product.approxPriceLow && (
            <span className="text-ivory-muted text-xs">
              – {formatPrice(product.approxPriceHigh)}
            </span>
          )}
        </div>
        <p className="text-[11px] text-ivory-muted mt-1">{product.karat} Gold</p>
      </div>
    </Link>
  );
}
