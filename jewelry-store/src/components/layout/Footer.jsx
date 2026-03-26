import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site.config.js';
import { DividerCenter } from '../ui/Divider.jsx';

export default function Footer() {
  return (
    <footer className="bg-obsidian-light border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-[0.15em] text-ivory mb-3">
              {SITE_CONFIG.brand.name}
            </h3>
            <p className="text-ivory-muted text-sm leading-relaxed mb-4">
              {SITE_CONFIG.brand.tagline}
            </p>
            <p className="text-ivory-muted text-xs leading-relaxed">
              Est. 1972 · Hyderabad, India
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-sans tracking-widest uppercase text-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { to: '/collections', label: 'Collections' },
                { to: '/collections/rings', label: 'Rings' },
                { to: '/collections/necklaces', label: 'Necklaces' },
                { to: '/collections/earrings', label: 'Earrings' },
                { to: '/collections/bracelets', label: 'Bracelets' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-ivory-muted hover:text-ivory text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-sans tracking-widest uppercase text-gold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory-muted">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-ivory transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-ivory transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ivory transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/trust" className="hover:text-ivory transition-colors">
                  Hallmarking & Quality
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <DividerCenter className="mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory-muted">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brand.name}. All rights reserved.</p>
          <p>BIS Hallmarked · Conflict-Free Diamonds · Certified Gemstones</p>
        </div>
      </div>
    </footer>
  );
}
