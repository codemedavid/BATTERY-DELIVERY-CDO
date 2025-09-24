import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft, Battery, Truck, Shield, Zap } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  getTotalPrice,
  onContinueShopping,
  onCheckout
}) => {
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-battery-background rounded-full flex items-center justify-center mx-auto mb-6">
            <Battery className="h-12 w-12 text-battery-secondary-light" />
          </div>
          <h2 className="text-3xl font-poppins font-bold text-battery-text mb-4">Your Cart is Empty</h2>
          <p className="text-battery-text-light mb-8 text-lg">Add some premium batteries to power up your order!</p>
          <button
            onClick={onContinueShopping}
            className="btn-industrial"
          >
            Browse Batteries
          </button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'car':
        return '🚗';
      case 'truck':
        return '🚛';
      case 'marine':
        return '⛵';
      case 'motorcycle':
        return '🏍️';
      default:
        return '🔋';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onContinueShopping}
          className="flex items-center space-x-2 text-battery-text-light hover:text-battery-primary transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Continue Shopping</span>
        </button>
        <h1 className="text-4xl font-poppins font-bold text-battery-text">Your Battery Order</h1>
        <button
          onClick={clearCart}
          className="text-battery-accent hover:text-battery-accent-dark transition-colors duration-200 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-battery-white rounded-xl shadow-lg overflow-hidden">
            {cartItems.map((item, index) => (
              <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-battery-secondary-light' : ''}`}>
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-battery-background rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Battery className="h-8 w-8 text-battery-secondary-light" />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg">{getCategoryIcon(item.category)}</span>
                          <span className="text-sm text-battery-text-light uppercase tracking-wide font-semibold">
                            {item.category} Battery
                          </span>
                        </div>
                        <h3 className="text-lg font-poppins font-semibold text-battery-text mb-1">{item.name}</h3>
                        <p className="text-sm text-battery-text-light mb-2">{item.description}</p>
                        
                        {/* Battery Specs */}
                        <div className="flex items-center space-x-4 text-xs text-battery-text-light">
                          <span>{item.voltage}V</span>
                          <span>{item.cca} CCA</span>
                          <span>{item.capacity}Ah</span>
                          <span className="bg-battery-accent/10 text-battery-accent px-2 py-1 rounded-full font-semibold">
                            {item.batteryType.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-battery-text mb-2">
                          ₱{item.totalPrice.toFixed(2)}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mb-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-battery-background rounded-lg flex items-center justify-center hover:bg-battery-secondary-light hover:text-white transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-battery-background rounded-lg flex items-center justify-center hover:bg-battery-secondary-light hover:text-white transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-battery-accent hover:text-battery-accent-dark transition-colors text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-battery-white rounded-xl shadow-lg p-6 sticky top-8">
            <h3 className="text-xl font-poppins font-bold text-battery-text mb-6">Order Summary</h3>
            
            {/* Order Details */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-battery-text-light">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>₱{getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-battery-text-light">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              
              <div className="flex justify-between text-battery-text-light">
                <span>Tax</span>
                <span>₱{(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-battery-secondary-light pt-4">
                <div className="flex justify-between text-xl font-bold text-battery-text">
                  <span>Total</span>
                  <span>₱{(getTotalPrice() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-battery-text-light">
                <Truck className="h-4 w-4 text-green-600" />
                <span>Free shipping on orders over ₱2,500</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-battery-text-light">
                <Shield className="h-4 w-4 text-battery-accent" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-battery-text-light">
                <Zap className="h-4 w-4 text-battery-primary" />
                <span>Expert installation available</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="w-full btn-industrial text-lg py-4"
            >
              Proceed to Checkout
            </button>

            {/* Security Note */}
            <p className="text-xs text-battery-text-light text-center mt-4">
              🔒 Secure checkout with SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;