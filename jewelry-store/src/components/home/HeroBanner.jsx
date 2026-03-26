import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site.config.js';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=2000&q=80)',
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-aurora-gold" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/55 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-obsidian/40 backdrop-blur-xl px-5 py-2 text-[11px] font-sans tracking-[0.22em] uppercase text-gold mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Trending Fine Gold Edits
          </p>
          <h1 className="font-serif text-display-lg sm:text-display-2xl text-ivory leading-[0.95] mb-6">
            Make Every Look
            <br />
            <span className="text-gold-shimmer">Glow Like Gold</span>
          </h1>
          <p className="text-ivory-muted text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Statement necklaces, bold rings, and premium bridal sets curated for modern style.
            Discover gold models designed to stop the scroll.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/collections" className="btn-primary text-center">
              Shop Gold Models
            </Link>
            <Link to="/about" className="btn-ghost text-center">
              Behind The Craft
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            <div className="glass-panel rounded-2xl p-3 text-center">
              <p className="text-xs text-ivory-muted uppercase tracking-widest mb-1">Bestsellers</p>
              <p className="text-xl font-serif text-champagne">1200+</p>
            </div>
            <div className="glass-panel rounded-2xl p-3 text-center">
              <p className="text-xs text-ivory-muted uppercase tracking-widest mb-1">Karat Range</p>
              <p className="text-xl font-serif text-champagne">14K-22K</p>
            </div>
            <div className="glass-panel rounded-2xl p-3 text-center">
              <p className="text-xs text-ivory-muted uppercase tracking-widest mb-1">BIS Certified</p>
              <p className="text-xl font-serif text-champagne">100%</p>
            </div>
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
