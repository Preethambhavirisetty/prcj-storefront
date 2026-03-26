const STEPS = ['Shipping', 'Payment', 'Confirmation'];

export default function CheckoutStepper({ step }) {
  return (
    <nav aria-label="Checkout steps" className="flex items-center justify-center gap-0 mb-12">
      {STEPS.map((label, idx) => {
        const stepNum = idx + 1;
        const done = step > stepNum;
        const active = step === stepNum;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  done
                    ? 'bg-gold text-obsidian'
                    : active
                    ? 'border-2 border-gold text-gold'
                    : 'border border-border text-ivory-muted'
                }`}
                aria-current={active ? 'step' : undefined}
              >
                {done ? '✓' : stepNum}
              </div>
              <span
                className={`text-[10px] tracking-widest uppercase ${
                  active ? 'text-gold' : done ? 'text-ivory-muted' : 'text-border'
                }`}
              >
                {label}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-px mx-2 mb-6 transition-colors ${
                  step > stepNum ? 'bg-gold' : 'bg-border'
                }`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
