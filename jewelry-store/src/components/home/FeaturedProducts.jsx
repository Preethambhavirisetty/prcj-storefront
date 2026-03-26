import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedProducts } from '../../api/catalog.js';
import ProductCard from '../catalog/ProductCard.jsx';
import { DividerCenter } from '../ui/Divider.jsx';
import { PageSpinner } from '../ui/Spinner.jsx';

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', 'featured'],
    queryFn: getFeaturedProducts,
  });

  return (
    <section className="py-24 bg-obsidian-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Hot Right Now</p>
          <h2 className="section-title">Most Wanted Gold Drops</h2>
          <DividerCenter className="mt-4" />
        </div>

        {isLoading ? (
          <PageSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/collections" className="btn-ghost">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
