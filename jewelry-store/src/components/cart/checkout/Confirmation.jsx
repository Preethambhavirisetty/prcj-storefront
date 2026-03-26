import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../../config/site.config.js';

function getDeliveryDate() {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function randomOrderNo() {
  return 'PRCJ-' + Math.floor(100000 + Math.random() * 900000);
}

export default function Confirmation({ contact }) {
  const orderNo = randomOrderNo();
  const email = contact?.email || SITE_CONFIG.contact.email;
  const phone = contact?.phone || SITE_CONFIG.contact.phone;
  const name = contact?.name || 'Guest Customer';

  return (
    <div className="flex flex-col items-center justify-center text-center py-12 max-w-md mx-auto gap-6">
      {/* Gold checkmark */}
      <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center animate-fade-in">
        <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <div>
        <h2 className="font-serif text-display-md text-ivory mb-2">Thank You</h2>
        <p className="text-ivory-muted">Your order has been submitted successfully.</p>
      </div>

      <div className="bg-obsidian-light border border-border p-6 w-full text-left space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-ivory-muted">Guest Name</span>
          <span className="text-ivory font-medium">{name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-ivory-muted">Order Number</span>
          <span className="text-ivory font-medium">{orderNo}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-ivory-muted">Expected Follow-up</span>
          <span className="text-ivory">{getDeliveryDate()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-ivory-muted">Confirmation sent to</span>
          <span className="text-ivory break-all">{email}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-ivory-muted">Phone</span>
          <span className="text-ivory">{phone}</span>
        </div>
      </div>

      <p className="text-xs text-ivory-muted">
        Your order has been submitted and someone from our team will reach out shortly to assist you.
      </p>

      <Link to="/collections" className="btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
}
