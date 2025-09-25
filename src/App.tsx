import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Hero from './components/Hero';
import SubNav from './components/SubNav';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FloatingCartButton from './components/FloatingCartButton';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import BatteryFinder from './components/BatteryFinder';
import Services from './components/Services';
import { useMenu } from './hooks/useMenu';
import { BatteryProduct, ServiceBooking } from './types';
import { deliveryAreas } from './data/enhancedMenuData';

function MainApp() {
  const cart = useCart();
  const { menuItems } = useMenu();
  const [currentView, setCurrentView] = React.useState<'menu' | 'cart' | 'checkout' | 'battery-finder' | 'services'>('menu');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [, setCompatibleProducts] = React.useState<BatteryProduct[]>([]);

  // Debug logging
  React.useEffect(() => {
    console.log('🏪 [App] Menu items received:', menuItems);
    console.log('🏪 [App] Menu items count:', menuItems.length);
  }, [menuItems]);

  const handleViewChange = (view: 'menu' | 'cart' | 'checkout' | 'battery-finder' | 'services') => {
    setCurrentView(view);
  };

  const handleServiceBooked = (booking: ServiceBooking) => {
    console.log('📋 [App] Service booked:', booking);
    // Here you would typically send the booking to your backend
    // For now, we'll just log it
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter battery products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-battery-background font-poppins">
      <Header 
        cartItemsCount={cart.getTotalItems()}
        onCartClick={() => handleViewChange('cart')}
        onMenuClick={() => handleViewChange('menu')}
        onBatteryFinderClick={() => handleViewChange('battery-finder')}
        onServicesClick={() => handleViewChange('services')}
      />
      
      {currentView === 'menu' && (
        <>
          <Hero 
            onBatteryFinderClick={() => handleViewChange('battery-finder')} 
            onShopClick={() => handleViewChange('menu')}
          />
          <SubNav selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} />
        </>
      )}
      
      {currentView === 'menu' && (
        <Menu 
          menuItems={filteredProducts}
          addToCart={cart.addToCart}
          cartItems={cart.cartItems}
          updateQuantity={cart.updateQuantity}
          deliveryAreas={deliveryAreas}
        />
      )}

      {currentView === 'battery-finder' && (
        <BatteryFinder 
          products={menuItems}
          onCompatibleProducts={setCompatibleProducts}
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
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;