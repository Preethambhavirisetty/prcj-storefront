import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FEATURES } from './config/features.js';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TrustPage from './pages/TrustPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="collections/:categorySlug" element={<CategoryPage />} />
          <Route path="product/:slug" element={<ProductDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="trust" element={<TrustPage />} />
          <Route path="contact" element={<ContactPage />} />
          {FEATURES.isCartCheckout && (
            <>
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
            </>
          )}
          {/* Always render cart even if checkout is feature-flagged off */}
          {!FEATURES.isCartCheckout && <Route path="cart" element={<CartPage />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
