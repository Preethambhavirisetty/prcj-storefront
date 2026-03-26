import ProductCard from '../catalog/ProductCard.jsx';

export default function RelatedProducts({ products = [] }) {
  if (!products.length) return null;

  return (
    <section className="mt-20 pt-12 border-t border-border">
      <h2 className="font-serif text-display-md text-ivory mb-8">You May Also Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
