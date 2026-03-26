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

export default function ShippingForm({ onNext }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = data.email.trim();
    const phone = data.phone.trim();
    const name = data.name.trim();
    const phoneIsValid = /^[+]?[\d\s()-]{7,20}$/.test(phone);

    if (!name || !email || !phoneIsValid) return;
    onNext({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <h2 className="font-serif text-2xl text-ivory mb-6">Guest Details</h2>
      <p className="text-ivory-muted text-sm">
        Enter your contact details to submit this order. Our team will reach out to confirm next steps.
      </p>
      <Field label="Full Name" id="name" value={data.name} onChange={set('name')} required placeholder="Priya Sharma" />
      <Field label="Email" id="email" type="email" value={data.email} onChange={set('email')} required placeholder="priya@example.com" />
      <Field
        label="Phone"
        id="phone"
        type="tel"
        value={data.phone}
        onChange={set('phone')}
        required
        pattern="^[+]?[\d\s()-]{7,20}$"
        placeholder="+1 (555) 123-4567"
      />
      <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
        Continue to Submit Order
      </Button>
    </form>
  );
}
