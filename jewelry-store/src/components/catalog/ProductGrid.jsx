import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products = [], total = 0 }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-serif text-xl text-ivory mb-3">No pieces found</p>
        <p className="text-ivory-muted text-sm">Try adjusting your filters or browse all collections.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs text-ivory-muted tracking-widest mb-6">
        Showing {products.length} of {total} piece{total !== 1 ? 's' : ''}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
