import { useState } from 'react';
import { submitContact } from '../api/leads.js';
import { SITE_CONFIG } from '../config/site.config.js';
import { DividerCenter } from '../components/ui/Divider.jsx';
import Button from '../components/ui/Button.jsx';

function Field({ label, id, required, as: Tag = 'input', ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-sans tracking-wider uppercase text-ivory-muted">
        {label}{required && ' *'}
      </label>
      <Tag
        id={id}
        required={required}
        className="bg-obsidian-light border border-border text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-border resize-none"
        {...props}
      />
    </div>
  );
}

export default function ContactPage() {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContact(data);
      setStatus('success');
      setData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-obsidian py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get in Touch</p>
          <h1 className="section-title">Contact Us</h1>
          <DividerCenter className="mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl text-ivory mb-4">Visit Our Showroom</h3>
              <p className="text-ivory-muted text-sm leading-relaxed">
                Banjara Hills, Hyderabad<br />
                Telangana 500034
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-ivory mb-4">Opening Hours</h3>
              <p className="text-ivory-muted text-sm">Monday – Saturday: 10am – 8pm</p>
              <p className="text-ivory-muted text-sm">Sunday: 11am – 6pm</p>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-3 text-ivory-muted hover:text-ivory text-sm transition-colors"
              >
                <span className="text-gold">✦</span>
                {SITE_CONFIG.contact.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-3 text-ivory-muted hover:text-ivory text-sm transition-colors"
              >
                <span className="text-gold">✦</span>
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Name" id="name" value={data.name} onChange={set('name')} required placeholder="Your name" />
            <Field label="Email" id="email" type="email" value={data.email} onChange={set('email')} required placeholder="you@example.com" />
            <Field label="Phone" id="phone" type="tel" value={data.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
            <Field
              as="textarea"
              label="Message"
              id="message"
              value={data.message}
              onChange={set('message')}
              required
              rows={5}
              placeholder="Tell us about the piece you're looking for…"
            />

            {status === 'success' && (
              <p className="text-green-400 text-sm">✓ Message sent! We'll be in touch within 24 hours.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
