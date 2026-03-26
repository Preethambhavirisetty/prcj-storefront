import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import CheckoutStepper from '../components/cart/checkout/CheckoutStepper.jsx';
import ShippingForm from '../components/cart/checkout/ShippingForm.jsx';
import SubmitOrder from '../components/cart/checkout/SubmitOrder.jsx';
import Confirmation from '../components/cart/checkout/Confirmation.jsx';
import OrderSummary from '../components/cart/OrderSummary.jsx';

export default function CheckoutPage() {
  const { itemCount, dispatch } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [guestDetails, setGuestDetails] = useState({ name: '', email: '', phone: '' });

  // Redirect if cart is empty and we haven't reached confirmation
  useEffect(() => {
    if (itemCount === 0 && step < 3) {
      navigate('/cart', { replace: true });
    }
  }, [itemCount, step, navigate]);

  const handleShippingNext = (details) => {
    setGuestDetails(details);
    setStep(2);
  };

  const handleSubmitOrder = () => {
    dispatch({ type: 'CLEAR_CART' });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-obsidian py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheckoutStepper step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form area */}
          <div className="lg:col-span-2">
            {step === 1 && <ShippingForm onNext={handleShippingNext} />}
            {step === 2 && (
              <SubmitOrder
                guestDetails={guestDetails}
                onSubmit={handleSubmitOrder}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && <Confirmation contact={guestDetails} />}
          </div>

          {/* Order summary — only steps 1 & 2 */}
          {step < 3 && (
            <div>
              <OrderSummary showCheckoutBtn={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
