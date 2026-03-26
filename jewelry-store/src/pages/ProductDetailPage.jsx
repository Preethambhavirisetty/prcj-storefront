import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/catalog.js';
import ImageGallery from '../components/product/ImageGallery.jsx';
import ProductInfo from '../components/product/ProductInfo.jsx';
import AddToCartBar from '../components/product/AddToCartBar.jsx';
import RelatedProducts from '../components/product/RelatedProducts.jsx';
import { PageSpinner } from '../components/ui/Spinner.jsx';

export default function ProductDetailPage() {
  const { slug } = useParams();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProduct(slug),
  });

  if (isLoading) return <PageSpinner />;

  if (isError) {
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center gap-6">
        <p className="font-serif text-2xl text-ivory">Piece not found</p>
        <Link to="/collections" className="btn-ghost">
          Browse Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-ivory-muted mb-10 flex items-center gap-2" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
          <span>/</span>
          <Link
            to={`/collections/${product.category}`}
            className="hover:text-gold transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-ivory">{product.name}</span>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ImageGallery images={product.images} name={product.name} />
          <div>
            <ProductInfo product={product} />
            <AddToCartBar product={product} />
          </div>
        </div>

        {/* Related products */}
        {product.related?.length > 0 && (
          <RelatedProducts products={product.related} />
        )}
      </div>
    </div>
  );
}
