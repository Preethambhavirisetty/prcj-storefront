import { Link } from 'react-router-dom';
import { Divider } from '../ui/Divider.jsx';

export default function BrandStory() {
  return (
    <section className="py-24 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border/70 shadow-float">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=900&q=80"
              alt="Artisan crafting jewellery"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-obsidian/20" />
          </div>

          {/* Copy */}
          <div className="bg-obsidian-light p-10 lg:p-16 flex flex-col justify-center">
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
              Since 1972
            </p>
            <h2 className="font-serif text-display-md text-ivory mb-6 leading-snug">
              Three Generations of Craft
            </h2>
            <Divider className="mb-6" />
            <p className="text-ivory-muted leading-relaxed mb-4">
              PRCJ was founded in 1972 by Padmavathi Reddy Chandra Jewellers in Hyderabad.
              What began as a single workshop has grown into a trusted name across South India —
              staying true to one principle: every piece is made to be passed down.
            </p>
            <p className="text-ivory-muted leading-relaxed mb-8">
              Our craftsmen blend traditional temple jewellery techniques with contemporary
              design sensibilities, honouring the past while dressing the present.
            </p>
            <Link to="/about" className="btn-ghost self-start">
              Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
