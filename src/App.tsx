import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SubNav from './components/SubNav';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FloatingCartButton from './components/FloatingCartButton';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Services from './components/Services';
import { useMenu } from './hooks/useMenu';
import { ServiceBooking } from './types';
import { deliveryAreas } from './data/enhancedMenuData';

function MainApp() {
  const cart = useCart();
  const { menuItems } = useMenu();
  const [currentView, setCurrentView] = React.useState<'menu' | 'cart' | 'checkout' | 'services'>('menu');
  // Debug logging
  React.useEffect(() => {
    console.log('🏪 [App] Menu items received:', menuItems);
    console.log('🏪 [App] Menu items count:', menuItems.length);
  }, [menuItems]);

  const handleViewChange = (view: 'menu' | 'cart' | 'checkout' | 'services') => {
    setCurrentView(view);
  };

  const handleServiceBooked = (booking: ServiceBooking) => {
    console.log('📋 [App] Service booked:', booking);
    // Here you would typically send the booking to your backend
    // For now, we'll just log it
  };

  return (
    <div className="min-h-screen bg-battery-background font-poppins">
      <Header 
        cartItemsCount={cart.getTotalItems()}
        onCartClick={() => handleViewChange('cart')}
        onMenuClick={() => handleViewChange('menu')}
        onServicesClick={() => handleViewChange('services')}
      />
      
      {currentView === 'menu' && (
        <>
          <HeroSlider 
            onShopClick={() => handleViewChange('menu')}
            onServicesClick={() => handleViewChange('services')}
          />
          <SubNav selectedCategory="all" onCategoryClick={() => {}} />
        </>
      )}
      
      {currentView === 'menu' && (
        <Menu 
          menuItems={menuItems}
          addToCart={cart.addToCart}
          cartItems={cart.cartItems}
          updateQuantity={cart.updateQuantity}
          deliveryAreas={deliveryAreas}
        />
      )}


      {currentView === 'services' && (
        <Services 
          deliveryAreas={deliveryAreas}
          onServiceBooked={handleServiceBooked}
        />
      )}
      
      {currentView === 'cart' && (
        <Cart 
          cartItems={cart.cartItems}
          updateQuantity={cart.updateQuantity}
          removeFromCart={cart.removeFromCart}
          clearCart={cart.clearCart}
          getTotalPrice={cart.getTotalPrice}
          onContinueShopping={() => handleViewChange('menu')}
          onCheckout={() => handleViewChange('checkout')}
        />
      )}
      
      {currentView === 'checkout' && (
        <Checkout 
          cartItems={cart.cartItems}
          totalPrice={cart.getTotalPrice()}
          onBack={() => handleViewChange('cart')}
        />
      )}
      
      {currentView === 'menu' && (
        <FloatingCartButton 
          itemCount={cart.getTotalItems()}
          onCartClick={() => handleViewChange('cart')}
        />
      )}
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;