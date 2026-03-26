import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site.config.js';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80)',
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 bg-obsidian/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl animate-fade-up">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-6">
            Est. 1972 · Hyderabad
          </p>
          <h1 className="font-serif text-display-xl text-ivory leading-tight mb-6">
            Crafted for
            <br />
            <span className="text-gold-shimmer">Eternity</span>
          </h1>
          <p className="text-ivory-muted text-base leading-relaxed mb-10 max-w-sm">
            Three generations of goldsmiths bringing you jewellery that tells your story —
            hallmarked, handcrafted, heirloom-worthy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/collections" className="btn-primary text-center">
              Explore Collections
            </Link>
            <Link to="/about" className="btn-ghost text-center">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-muted">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
