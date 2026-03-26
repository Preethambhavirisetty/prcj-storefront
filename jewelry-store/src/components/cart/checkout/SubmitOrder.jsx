import Button from '../../ui/Button.jsx';

export default function SubmitOrder({ guestDetails, onSubmit, onBack }) {
  const { name, email, phone } = guestDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <h2 className="font-serif text-2xl text-ivory mb-2">Submit Order</h2>
      <p className="text-xs text-ivory-muted border border-gold/30 px-4 py-3 bg-gold/5 mb-6">
        Guest checkout selected. We will review your request and contact you to finalize the order.
      </p>

      <div className="bg-obsidian-light border border-border p-5 space-y-3">
        <div className="flex justify-between text-sm gap-4">
          <span className="text-ivory-muted">Name</span>
          <span className="text-ivory text-right">{name}</span>
        </div>
        <div className="flex justify-between text-sm gap-4">
          <span className="text-ivory-muted">Email</span>
          <span className="text-ivory text-right break-all">{email}</span>
        </div>
        <div className="flex justify-between text-sm gap-4">
          <span className="text-ivory-muted">Phone</span>
          <span className="text-ivory text-right">{phone}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <Button type="button" variant="ghost" size="lg" className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" variant="primary" size="lg" className="flex-1">
          Submit Order
        </Button>
      </div>
    </form>
  );
}
