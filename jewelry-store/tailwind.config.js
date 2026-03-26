/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0A0A',
          light: '#111111',
          medium: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C87A',
          muted: '#8B6914',
          pale: '#F5E6C8',
        },
        ivory: {
          DEFAULT: '#F5F5F0',
          muted: '#D4D4CE',
        },
        surface: '#111111',
        border: '#2A2A2A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15' }],
        'display-md': ['2.25rem', { lineHeight: '1.2' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        88: '22rem',
        128: '32rem',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.35s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C87A 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(10,10,10,0.85) 40%, transparent 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201,168,76,0.25)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6)',
        'inner-gold': 'inset 0 1px 0 rgba(201,168,76,0.3)',
      },
    },
  },
  plugins: [],
};
