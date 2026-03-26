export function Spinner({ className = '' }) {
  return (
    <div
      className={`w-8 h-8 border-2 border-border border-t-gold rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}

export function PageSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <Spinner />
    </div>
  );
}
