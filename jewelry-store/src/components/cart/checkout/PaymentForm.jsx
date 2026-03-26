import { useState } from 'react';
import Button from '../../ui/Button.jsx';

function Field({ label, id, required, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-sans tracking-wider uppercase text-ivory-muted">
        {label}{required && ' *'}
      </label>
      <input
        id={id}
        required={required}
        className="bg-obsidian-light border border-border text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-border"
        {...props}
      />
    </div>
  );
}

export default function PaymentForm({ onNext, onBack }) {
  const [data, setData] = useState({ cardName: '', cardNumber: '', expiry: '', cvv: '' });
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <h2 className="font-serif text-2xl text-ivory mb-2">Payment</h2>
      <p className="text-xs text-ivory-muted border border-gold/30 px-4 py-3 bg-gold/5 mb-6">
        ⚠ This is a demo — no real payment is processed. Enter any values.
      </p>

      <Field label="Cardholder Name" id="cardName" value={data.cardName} onChange={set('cardName')} required placeholder="Priya Sharma" />
      <Field label="Card Number" id="cardNumber" value={data.cardNumber} onChange={set('cardNumber')} required maxLength={19} placeholder="0000 0000 0000 0000" />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Expiry (MM/YY)" id="expiry" value={data.expiry} onChange={set('expiry')} required placeholder="12/27" />
        <Field label="CVV" id="cvv" type="password" value={data.cvv} onChange={set('cvv')} required maxLength={4} placeholder="•••" />
      </div>

      <div className="flex gap-4 mt-4">
        <Button type="button" variant="ghost" size="lg" className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" variant="primary" size="lg" className="flex-1">
          Place Order
        </Button>
      </div>
    </form>
  );
}
