import HeroBanner from '../components/home/HeroBanner.jsx';
import CategoriesGrid from '../components/home/CategoriesGrid.jsx';
import FeaturedProducts from '../components/home/FeaturedProducts.jsx';
import BrandStory from '../components/home/BrandStory.jsx';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoriesGrid />
      <FeaturedProducts />
      <BrandStory />
    </>
  );
}
