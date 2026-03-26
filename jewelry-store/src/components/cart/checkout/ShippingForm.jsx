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
    firstName: '', lastName: '', email: '', phone: '',
    address1: '', address2: '', city: '', state: '', zip: '', country: 'India',
  });

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <h2 className="font-serif text-2xl text-ivory mb-6">Shipping Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <Field label="First Name" id="firstName" value={data.firstName} onChange={set('firstName')} required placeholder="Priya" />
        <Field label="Last Name" id="lastName" value={data.lastName} onChange={set('lastName')} required placeholder="Sharma" />
      </div>
      <Field label="Email" id="email" type="email" value={data.email} onChange={set('email')} required placeholder="priya@example.com" />
      <Field label="Phone" id="phone" type="tel" value={data.phone} onChange={set('phone')} required placeholder="+91 98765 43210" />
      <Field label="Address Line 1" id="address1" value={data.address1} onChange={set('address1')} required placeholder="Door No. / Street" />
      <Field label="Address Line 2 (Optional)" id="address2" value={data.address2} onChange={set('address2')} placeholder="Apartment, locality" />
      <div className="grid grid-cols-2 gap-4">
        <Field label="City" id="city" value={data.city} onChange={set('city')} required placeholder="Hyderabad" />
        <Field label="State" id="state" value={data.state} onChange={set('state')} required placeholder="Telangana" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="PIN Code" id="zip" value={data.zip} onChange={set('zip')} required placeholder="500001" />
        <Field label="Country" id="country" value={data.country} onChange={set('country')} required />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
        Continue to Payment
      </Button>
    </form>
  );
}
