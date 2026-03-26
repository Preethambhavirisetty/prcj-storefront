import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { CartBadge } from '../ui/Badge.jsx';
import { SITE_CONFIG } from '../../config/site.config.js';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'Our Story' },
  { to: '/trust', label: 'Quality' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-5 pt-3">
      <nav className="max-w-7xl mx-auto glass-panel rounded-full px-5 sm:px-7 flex items-center justify-between h-16 shadow-float">
        {/* Brand mark */}
        <Link
          to="/"
          className="font-serif text-xl sm:text-2xl tracking-[0.24em] text-ivory hover:text-gold transition-colors"
          aria-label="PRCJ Home"
        >
          {SITE_CONFIG.brand.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-[11px] font-sans tracking-[0.2em] uppercase transition-colors ${
                    isActive ? 'text-gold' : 'text-ivory-muted hover:text-ivory'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative text-ivory-muted hover:text-gold transition-colors p-2 rounded-full border border-border/70 hover:border-gold/60"
            aria-label={`Cart, ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <CartBadge count={itemCount} />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-ivory-muted hover:text-gold transition-colors p-2 rounded-full border border-border/70 hover:border-gold/60"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 glass-panel rounded-3xl border border-border/80 animate-fade-in overflow-hidden">
          <ul className="flex flex-col py-3">
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-[11px] font-sans tracking-[0.2em] uppercase transition-colors ${
                      isActive ? 'text-gold' : 'text-ivory-muted hover:text-ivory'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
