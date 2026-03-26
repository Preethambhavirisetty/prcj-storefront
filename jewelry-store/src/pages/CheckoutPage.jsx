import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import CheckoutStepper from '../components/cart/checkout/CheckoutStepper.jsx';
import ShippingForm from '../components/cart/checkout/ShippingForm.jsx';
import PaymentForm from '../components/cart/checkout/PaymentForm.jsx';
import Confirmation from '../components/cart/checkout/Confirmation.jsx';
import OrderSummary from '../components/cart/OrderSummary.jsx';

export default function CheckoutPage() {
  const { itemCount, dispatch } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Redirect if cart is empty and we haven't reached confirmation
  useEffect(() => {
    if (itemCount === 0 && step < 3) {
      navigate('/cart', { replace: true });
    }
  }, [itemCount, step, navigate]);

  const handleShippingNext = () => setStep(2);
  const handlePaymentNext = () => {
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
              <PaymentForm
                onNext={handlePaymentNext}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && <Confirmation />}
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
