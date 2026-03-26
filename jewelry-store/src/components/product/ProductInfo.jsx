import { Badge } from '../ui/Badge.jsx';
import { Divider } from '../ui/Divider.jsx';

function formatPrice(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ProductInfo({ product }) {
  return (
    <div>
      <div className="flex items-start gap-3 mb-2">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold">
          {product.category}
        </p>
        {product.badge && <Badge type={product.badge}>{product.badge}</Badge>}
      </div>

      <h1 className="font-serif text-display-md text-ivory leading-tight mb-4">
        {product.name}
      </h1>

      {/* Price range */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="font-serif text-2xl text-ivory">
          {formatPrice(product.approxPriceLow)}
        </span>
        {product.approxPriceHigh > product.approxPriceLow && (
          <span className="text-ivory-muted">
            – {formatPrice(product.approxPriceHigh)}
          </span>
        )}
      </div>
      <p className="text-xs text-ivory-muted mb-1">{product.karat} Gold · {product.minWeightG}–{product.maxWeightG}g</p>
      <p className="text-xs text-ivory-muted mb-6">Inclusive of GST · Making charges vary by weight</p>

      <Divider className="mb-6" />

      <p className="text-ivory-muted leading-relaxed mb-6">{product.description}</p>

      {/* Details */}
      {product.details?.length > 0 && (
        <ul className="space-y-2 mb-6">
          {product.details.map((d, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-ivory-muted">
              <span className="text-gold text-xs">✦</span>
              {d}
            </li>
          ))}
        </ul>
      )}

      {product.isCustomizable && (
        <p className="text-xs font-sans tracking-wider uppercase text-gold border border-gold/40 inline-block px-3 py-1">
          Customisable
        </p>
      )}
    </div>
  );
}
