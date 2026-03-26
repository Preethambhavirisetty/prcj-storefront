import { forwardRef } from 'react';

const variants = {
  primary: 'bg-gold text-obsidian hover:bg-gold-light',
  ghost: 'border border-gold text-gold hover:bg-gold hover:text-obsidian',
  danger: 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
  icon: 'p-2 text-ivory-muted hover:text-gold',
};

const sizes = {
  sm: 'text-xs px-5 py-2',
  md: 'text-xs px-8 py-3',
  lg: 'text-sm px-10 py-4',
  icon: '',
};

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  const base =
    'font-sans font-medium tracking-wider uppercase transition-colors duration-200 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
