import { useCart } from '../../context/CartContext.jsx';

function formatPrice(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function CartItem({ item }) {
  const { dispatch } = useCart();

  const updateQty = (qty) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: qty } });

  const remove = () =>
    dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });

  return (
    <div className="flex gap-4 py-6 border-b border-border">
      {/* Thumbnail */}
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-obsidian-medium">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-gold tracking-widest uppercase mb-0.5">{item.category}</p>
        <h3 className="font-serif text-ivory leading-snug mb-1">{item.name}</h3>
        <p className="text-xs text-ivory-muted">{item.karat} Gold</p>

        {/* Quantity stepper */}
        <div className="flex items-center gap-0 mt-3 border border-border w-fit">
          <button
            onClick={() => updateQty(item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center text-ivory-muted hover:text-gold transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm text-ivory">{item.quantity}</span>
          <button
            onClick={() => updateQty(item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center text-ivory-muted hover:text-gold transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Price + remove */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-serif text-ivory">
          {formatPrice(item.approxPriceLow * item.quantity)}
        </p>
        <button
          onClick={remove}
          className="text-xs text-ivory-muted hover:text-red-400 transition-colors"
          aria-label={`Remove ${item.name} from cart`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
