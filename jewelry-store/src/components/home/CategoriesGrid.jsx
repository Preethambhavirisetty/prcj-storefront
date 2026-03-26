import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../api/catalog.js';
import { DividerCenter } from '../ui/Divider.jsx';
import { PageSpinner } from '../ui/Spinner.jsx';

export default function CategoriesGrid() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return (
    <section className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Browse By</p>
          <h2 className="section-title">Our Collections</h2>
          <DividerCenter className="mt-4" />
        </div>

        {isLoading ? (
          <PageSpinner />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories?.map((cat) => (
              <Link
                key={cat.id}
                to={`/collections/${cat.id}`}
                className="group relative overflow-hidden aspect-[3/4] block"
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-obsidian/50 group-hover:bg-obsidian/30 transition-colors duration-400" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-ivory mb-1">{cat.label}</h3>
                  <p className="text-xs text-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
