import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Battery, Zap, Shield, Truck, Car, Info } from 'lucide-react';
import { BatteryProduct } from '../types';

interface BatteryProductCardProps {
  product: BatteryProduct;
  onAddToCart: (product: BatteryProduct, quantity?: number) => void;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const BatteryProductCard: React.FC<BatteryProductCardProps> = ({ 
  product, 
  onAddToCart, 
  quantity, 
  onUpdateQuantity 
}) => {
  const [showSpecs, setShowSpecs] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'car':
        return Car;
      case 'truck':
        return Truck;
      case 'marine':
        return Battery;
      case 'motorcycle':
        return Zap;
      default:
        return Battery;
    }
  };

  const getBatteryTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'agm':
        return 'bg-battery-accent text-white';
      case 'lithium':
        return 'bg-battery-primary text-white';
      case 'gel':
        return 'bg-battery-secondary text-white';
      default:
        return 'bg-battery-secondary-light text-battery-text';
    }
  };

  const CategoryIcon = getCategoryIcon(product.category);

  const handleAddToCart = () => {
    onAddToCart(product, 1);
  };

  const handleIncrement = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onUpdateQuantity(product.id, quantity - 1);
    }
  };

  const currentPrice = product.effectivePrice || product.basePrice;

  return (
    <>
      <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden group border border-gray-100/50 hover:border-battery-primary/30 hover:-translate-y-2 ${!product.available ? 'opacity-60' : ''}`}>
        {/* Dynamic Image Container with Organic Shapes - Shorter Height */}
        <div className="relative h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          {/* Organic Background Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-battery-primary/10 to-battery-accent/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-battery-accent/10 to-yellow-400/10 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-lg transform -translate-x-8 -translate-y-8"></div>
          </div>
          
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`absolute inset-0 flex items-center justify-center ${product.image ? 'hidden' : ''}`}>
            <div className="relative">
              <div className="text-6xl opacity-5 text-battery-primary">
                <Battery className="h-24 w-24" />
              </div>
              <div className="absolute inset-0 animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-battery-primary/20 to-battery-accent/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
          
          {/* Dynamic Badge System with Floating Effect */}
          <div className="absolute top-5 left-5 flex flex-col gap-3">
            {product.isOnDiscount && product.discountPrice && (
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md transform hover:scale-105 transition-all duration-300 animate-bounce">
                🔥 SALE
              </div>
            )}
            {product.popular && (
              <div className="bg-gradient-to-r from-battery-primary via-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
                ⭐ POPULAR
              </div>
            )}
            {product.freeShipping && (
              <div className="bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md transform hover:scale-105 transition-all duration-300">
                🚚 FREE SHIPPING
              </div>
            )}
          </div>
          
          {!product.available && (
            <div className="absolute top-5 right-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md">
              OUT OF STOCK
            </div>
          )}
          
          {/* Floating Battery Type Badge */}
          <div className="absolute bottom-5 right-5">
            <div className={`text-xs font-bold px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md transform hover:scale-105 transition-all duration-300 ${getBatteryTypeColor(product.batteryType)}`}>
              {product.batteryType.toUpperCase()}
            </div>
          </div>

          {/* Dynamic Hover Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-battery-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Subtle Animation Elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-battery-accent rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-battery-primary rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
        
        {/* Dynamic Content Section with Organic Flow - Compact */}
        <div className="p-5 relative">
          {/* Floating Background Elements */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-battery-primary/5 to-battery-accent/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-emerald-400/5 to-blue-400/5 rounded-full blur-xl"></div>
          
          {/* Category and Title with Dynamic Styling - Compact */}
          <div className="mb-4 relative z-10">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gradient-to-br from-battery-primary/10 to-battery-accent/10 rounded-lg">
                <CategoryIcon className="h-4 w-4 text-battery-primary" />
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold bg-gray-100 px-2 py-1 rounded-full">
                {product.category.replace('-', ' ')} Battery
              </span>
            </div>
            <h4 className="text-xl font-poppins font-bold text-gray-900 leading-tight mb-2 group-hover:text-battery-primary transition-colors duration-300">{product.name}</h4>
            <p className={`text-sm leading-relaxed text-gray-600 line-clamp-2 ${!product.available ? 'text-gray-400' : ''}`}>
              {!product.available ? 'Currently Out of Stock' : product.description}
            </p>
          </div>
          
          {/* Dynamic Key Specifications with Floating Effect - Compact */}
          <div className="grid grid-cols-3 gap-3 mb-5 relative z-10">
            <div className="bg-gradient-to-br from-battery-primary/8 to-battery-primary/15 rounded-xl p-3 text-center border border-battery-primary/20 transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-battery-primary mb-1">{product.voltage}V</div>
              <div className="text-xs text-gray-600 font-semibold">Voltage</div>
            </div>
            <div className="bg-gradient-to-br from-battery-accent/8 to-battery-accent/15 rounded-xl p-3 text-center border border-battery-accent/20 transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-battery-accent mb-1">{product.cca}</div>
              <div className="text-xs text-gray-600 font-semibold">CCA</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/8 to-emerald-500/15 rounded-xl p-3 text-center border border-emerald-500/20 transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-emerald-600 mb-1">{product.capacity}Ah</div>
              <div className="text-xs text-gray-600 font-semibold">Capacity</div>
            </div>
          </div>
          
          {/* Dynamic Pricing Section with Floating Elements - Compact */}
          <div className="mb-5 relative z-10">
            {product.isOnDiscount && product.discountPrice ? (
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    ₱{product.discountPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ₱{product.basePrice.toFixed(2)}
                  </span>
                </div>
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 text-xs font-bold rounded-xl border border-red-200">
                  💰 Save ₱{(product.basePrice - product.discountPrice).toFixed(2)}
                </div>
              </div>
            ) : (
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-battery-primary bg-clip-text text-transparent">
                ₱{currentPrice.toFixed(2)}
              </div>
            )}
            
            {/* Enhanced Warranty and Shipping Info - Compact */}
            <div className="flex items-center space-x-4 mt-3 text-xs">
              <span className="flex items-center space-x-1.5 bg-blue-50 px-2 py-1.5 rounded-lg">
                <Shield className="h-3 w-3 text-blue-600" />
                <span className="text-blue-700 font-medium">{product.warranty}mo warranty</span>
              </span>
              {product.freeShipping && (
                <span className="flex items-center space-x-1.5 bg-emerald-50 px-2 py-1.5 rounded-lg">
                  <span className="text-sm">🚚</span>
                  <span className="text-emerald-700 font-medium">Free Shipping</span>
                </span>
              )}
            </div>
          </div>
          
          {/* Dynamic Action Buttons with Enhanced Styling - Compact */}
          <div className="space-y-3 relative z-10">
            {!product.available ? (
              <button
                disabled
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 px-4 py-3 rounded-xl cursor-not-allowed font-semibold text-sm border border-gray-200"
              >
                Out of Stock
              </button>
            ) : quantity === 0 ? (
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-battery-primary via-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-1"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
            ) : (
              <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-2 border border-gray-200 shadow-inner">
                <button
                  onClick={handleDecrement}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-110 bg-white shadow-sm"
                >
                  <Minus className="h-4 w-4 text-gray-600" />
                </button>
                <span className="font-bold text-gray-900 min-w-[32px] text-center text-sm bg-white px-2 py-1.5 rounded-lg shadow-sm">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-110 bg-white shadow-sm"
                >
                  <Plus className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            )}
          </div>

          {/* Dynamic Specifications Button - Compact */}
          <button
            onClick={() => setShowSpecs(true)}
            className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-battery-primary transition-all duration-300 py-3 text-sm font-semibold border-t border-gray-100 pt-4 hover:bg-gradient-to-r hover:from-battery-primary/5 hover:to-battery-accent/5 rounded-xl"
          >
            <div className="p-1.5 bg-gradient-to-br from-battery-primary/10 to-battery-accent/10 rounded-lg">
              <Info className="h-4 w-4" />
            </div>
            <span>View Full Specifications</span>
          </button>
        </div>
      </div>

      {/* Specifications Modal */}
      {showSpecs && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-battery-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-battery-white border-b border-battery-secondary-light p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-xl font-poppins font-bold text-battery-text">{product.name}</h3>
                <p className="text-sm text-battery-text-light mt-1">Complete Specifications</p>
              </div>
              <button
                onClick={() => setShowSpecs(false)}
                className="p-2 hover:bg-battery-background rounded-full transition-colors duration-200"
              >
                <Minus className="h-5 w-5 text-battery-text-light" />
              </button>
            </div>

            <div className="p-6">
              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-battery-background rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-battery-primary">{product.voltage}V</div>
                  <div className="text-sm text-battery-text-light">Voltage</div>
                </div>
                <div className="bg-battery-background rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-battery-primary">{product.cca}</div>
                  <div className="text-sm text-battery-text-light">Cold Cranking Amps</div>
                </div>
                <div className="bg-battery-background rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-battery-primary">{product.capacity}Ah</div>
                  <div className="text-sm text-battery-text-light">Amp Hours</div>
                </div>
                <div className="bg-battery-background rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-battery-primary">{product.weight}lbs</div>
                  <div className="text-sm text-battery-text-light">Weight</div>
                </div>
              </div>

              {/* Detailed Specs */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-battery-text mb-2">Dimensions</h4>
                    <p className="text-sm text-battery-text-light">
                      {product.dimensions.length}" × {product.dimensions.width}" × {product.dimensions.height}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-battery-text mb-2">Terminal Type</h4>
                    <p className="text-sm text-battery-text-light capitalize">{product.terminalType.replace('-', ' ')}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-battery-text mb-2">Battery Type</h4>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getBatteryTypeColor(product.batteryType)}`}>
                    {product.batteryType.toUpperCase()}
                  </div>
                </div>

                {product.compatibilities && product.compatibilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-battery-text mb-2">Compatible Vehicles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.compatibilities.slice(0, 6).map((compat) => (
                        <div key={compat.id} className="bg-battery-background rounded-lg p-2 text-sm">
                          <span className="font-medium">{compat.make} {compat.model}</span>
                          <span className="text-battery-text-light ml-2">({compat.year})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-4 border-t border-battery-secondary-light">
                <button
                  onClick={() => setShowSpecs(false)}
                  className="flex-1 btn-industrial-secondary"
                >
                  Close
                </button>
                {product.available && (
                  <button
                    onClick={() => {
                      handleAddToCart();
                      setShowSpecs(false);
                    }}
                    className="flex-1 btn-industrial flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BatteryProductCard;
