import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Car, Truck, Zap } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { loading } = useSiteSettings();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#', icon: null },
    { name: 'Shop', href: '#', icon: null }
  ];

  const vehicleTypes = [
    { name: 'Car', icon: Car },
    { name: 'Truck', icon: Truck },
    { name: 'Marine', icon: null },
    { name: 'Motorcycle', icon: null }
  ];

  return (
    <header className="sticky top-0 z-50 bg-battery-white/95 backdrop-blur-md border-b border-battery-secondary-light shadow-lg">
      {/* Top banner with trust signals */}
      <div className="bg-battery-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Zap className="h-4 w-4" />
              <span>Fast Shipping</span>
            </span>
            <span>2-Year Warranty</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Secure Payments</span>
            <span>Expert Support</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <button 
            onClick={onMenuClick}
            className="flex items-center space-x-2 md:space-x-3 text-battery-text hover:text-battery-primary transition-colors duration-200"
          >
            <div className="relative">
              {loading ? (
                <div className="w-8 h-8 md:w-12 md:h-12 bg-battery-secondary-light rounded-lg animate-pulse" />
              ) : (
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg overflow-hidden">
                  <img 
                    src="/logo.jpg" 
                    alt="PowerMax Batteries Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="text-left">
              <h1 className="text-lg md:text-2xl font-poppins font-bold text-battery-primary">
                {loading ? (
                  <div className="w-24 md:w-32 h-4 md:h-6 bg-battery-secondary-light rounded animate-pulse" />
                ) : (
                  "BATTERY DELIVERY CDO"
                )}
              </h1>
              <p className="text-xs md:text-sm text-battery-text-light font-lato hidden sm:block">Reliable Power Solutions</p>
            </div>
          </button>

          {/* spacer for center area removed */}

          {/* Navigation and Cart */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-battery-text hover:text-battery-primary font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  {item.icon && React.createElement(item.icon, { className: "h-4 w-4" })}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>

            {/* Search Icon (desktop) */}
            <button className="hidden md:inline-flex p-2 md:p-3 text-battery-text hover:text-battery-primary hover:bg-battery-background rounded-lg transition-all duration-200">
              <Search className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Cart Button */}
            <button 
              onClick={onCartClick}
              className="relative p-2 md:p-3 text-battery-text hover:text-battery-primary hover:bg-battery-background rounded-lg transition-all duration-200 group"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-battery-accent text-white text-xs rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center font-semibold animate-pulse-glow">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Search and Menu */}
            <div className="lg:hidden flex items-center space-x-1">
              <button className="p-2 text-battery-text hover:text-battery-primary hover:bg-battery-background rounded-lg transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-battery-text hover:text-battery-primary hover:bg-battery-background rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-battery-white border-t border-battery-secondary-light shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-battery-text hover:text-battery-primary font-medium transition-colors duration-200 py-2"
                >
                  {item.icon && React.createElement(item.icon, { className: "h-5 w-5" })}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
            
            {/* Vehicle Types */}
            <div className="mt-6 pt-4 border-t border-battery-secondary-light">
              <h3 className="text-sm font-semibold text-battery-text-light mb-3">Vehicle Types</h3>
              <div className="grid grid-cols-2 gap-2">
                {vehicleTypes.map((vehicle) => (
                  <a
                    key={vehicle.name}
                    href="#"
                    className="flex items-center space-x-2 text-battery-text hover:text-battery-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-battery-background"
                  >
                    {vehicle.icon && <vehicle.icon className="h-4 w-4" />}
                    <span className="text-sm">{vehicle.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;