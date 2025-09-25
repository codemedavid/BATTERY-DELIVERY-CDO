import React, { useState } from 'react';
import { Search, Car, Truck, Ship, Bike, Zap, CheckCircle, MapPin, Clock } from 'lucide-react';
import { BatteryProduct, Compatibility, DeliveryArea } from '../types';

interface BatteryFinderProps {
  products: BatteryProduct[];
  onCompatibleProducts: (products: BatteryProduct[]) => void;
  deliveryAreas: DeliveryArea[];
}

interface VehicleInfo {
  make: string;
  model: string;
  year: string;
  engine: string;
  vehicleType: 'car' | 'truck' | 'marine' | 'motorcycle' | 'rv' | 'atv';
}

const BatteryFinder: React.FC<BatteryFinderProps> = ({
  products,
  onCompatibleProducts,
  deliveryAreas
}) => {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    make: '',
    model: '',
    year: '',
    engine: '',
    vehicleType: 'car'
  });
  const [isSearching, setIsSearching] = useState(false);
  const [compatibleProducts, setCompatibleProducts] = useState<BatteryProduct[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Sample vehicle data - in a real app, this would come from an API
  const vehicleMakes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mitsubishi', 'Hyundai', 'Kia',
    'Mazda', 'Subaru', 'Isuzu', 'Suzuki', 'Daihatsu', 'BMW', 'Mercedes-Benz', 'Audi'
  ];

  const vehicleModels: { [key: string]: string[] } = {
    'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma', 'Tundra', 'Prius', 'Avalon'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Ridgeline', 'HR-V', 'Passport', 'Insight'],
    'Ford': ['F-150', 'Explorer', 'Escape', 'Edge', 'Expedition', 'Mustang', 'Focus', 'Fusion'],
    'Chevrolet': ['Silverado', 'Equinox', 'Traverse', 'Malibu', 'Camaro', 'Tahoe', 'Suburban', 'Colorado'],
    'Nissan': ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Titan', 'Murano', 'Maxima', 'Frontier'],
    'Mitsubishi': ['Outlander', 'Eclipse Cross', 'Mirage', 'Lancer', 'Montero Sport', 'Strada'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Accent', 'Veloster'],
    'Kia': ['Forte', 'Optima', 'Sportage', 'Sorento', 'Telluride', 'Soul', 'Stinger', 'Niro']
  };

  const vehicleYears = Array.from({ length: 25 }, (_, i) => (2024 - i).toString());

  const handleSearch = async () => {
    if (!vehicleInfo.make || !vehicleInfo.model || !vehicleInfo.year) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Find compatible products based on vehicle info
    const compatible = products.filter(product => {
      // Check if product has compatibilities that match the vehicle
      if (product.compatibilities && product.compatibilities.length > 0) {
        return product.compatibilities.some(comp => 
          comp.make.toLowerCase() === vehicleInfo.make.toLowerCase() &&
          comp.model.toLowerCase() === vehicleInfo.model.toLowerCase() &&
          comp.year === vehicleInfo.year
        );
      }
      
      // Fallback: match by category and general compatibility
      return product.category === vehicleInfo.vehicleType && product.available;
    });

    setCompatibleProducts(compatible);
    onCompatibleProducts(compatible);
    setShowResults(true);
    setIsSearching(false);
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'car': return <Car className="h-6 w-6" />;
      case 'truck': return <Truck className="h-6 w-6" />;
      case 'marine': return <Ship className="h-6 w-6" />;
      case 'motorcycle': return <Bike className="h-6 w-6" />;
      default: return <Car className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-battery-primary to-battery-primary-dark rounded-3xl p-8 text-white mb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="h-8 w-8 text-battery-accent" />
            <h2 className="text-3xl font-poppins font-bold">Battery Finder</h2>
          </div>
          <p className="text-xl text-blue-100">
            Find the perfect battery for your vehicle in seconds
          </p>
        </div>

        {/* Vehicle Information Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vehicle Type */}
            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                Vehicle Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['car', 'truck', 'marine', 'motorcycle'].map(type => (
                  <button
                    key={type}
                    onClick={() => setVehicleInfo(prev => ({ ...prev, vehicleType: type as any }))}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                      vehicleInfo.vehicleType === type
                        ? 'border-battery-accent bg-battery-accent/20 text-white'
                        : 'border-white/30 bg-white/10 text-blue-100 hover:bg-white/20'
                    }`}
                  >
                    {getVehicleIcon(type)}
                    <span className="text-sm font-medium capitalize">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Make */}
            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                Make *
              </label>
              <select
                value={vehicleInfo.make}
                onChange={(e) => setVehicleInfo(prev => ({ ...prev, make: e.target.value, model: '' }))}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:ring-2 focus:ring-battery-accent focus:border-transparent"
              >
                <option value="">Select Make</option>
                {vehicleMakes.map(make => (
                  <option key={make} value={make} className="text-gray-900">{make}</option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                Model *
              </label>
              <select
                value={vehicleInfo.model}
                onChange={(e) => setVehicleInfo(prev => ({ ...prev, model: e.target.value }))}
                disabled={!vehicleInfo.make}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:ring-2 focus:ring-battery-accent focus:border-transparent disabled:opacity-50"
              >
                <option value="">Select Model</option>
                {vehicleInfo.make && vehicleModels[vehicleInfo.make]?.map(model => (
                  <option key={model} value={model} className="text-gray-900">{model}</option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                Year *
              </label>
              <select
                value={vehicleInfo.year}
                onChange={(e) => setVehicleInfo(prev => ({ ...prev, year: e.target.value }))}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:ring-2 focus:ring-battery-accent focus:border-transparent"
              >
                <option value="">Select Year</option>
                {vehicleYears.map(year => (
                  <option key={year} value={year} className="text-gray-900">{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Engine (Optional) */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-blue-100 mb-2">
              Engine Type (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., 2.0L 4-Cylinder, V6, Diesel"
              value={vehicleInfo.engine}
              onChange={(e) => setVehicleInfo(prev => ({ ...prev, engine: e.target.value }))}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:ring-2 focus:ring-battery-accent focus:border-transparent"
            />
          </div>

          {/* Search Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleSearch}
              disabled={isSearching || !vehicleInfo.make || !vehicleInfo.model || !vehicleInfo.year}
              className="bg-battery-accent hover:bg-battery-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Finding Batteries...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Find Compatible Batteries</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-poppins font-bold">
                Compatible Batteries ({compatibleProducts.length})
              </h3>
              <button
                onClick={() => setShowResults(false)}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {compatibleProducts.length > 0 ? (
              <div className="space-y-4">
                {compatibleProducts.slice(0, 3).map(product => (
                  <div key={product.id} className="bg-white/20 rounded-xl p-4 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-8 w-8 text-battery-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{product.name}</h4>
                      <p className="text-blue-100 text-sm">{product.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span className="flex items-center space-x-1">
                          <Zap className="h-4 w-4" />
                          <span>{product.voltage}V / {product.cca} CCA</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Shield className="h-4 w-4" />
                          <span>{product.warranty}mo warranty</span>
                        </span>
                        <span className="text-battery-accent font-bold">
                          ₱{product.effectivePrice || product.basePrice}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-battery-accent">
                        ₱{product.effectivePrice || product.basePrice}
                      </div>
                      <div className="text-sm text-blue-100">
                        {product.deliveryAreas?.some(area => area.isFreeDelivery) ? 'Free Delivery' : 'Fast Delivery'}
                      </div>
                    </div>
                  </div>
                ))}
                
                {compatibleProducts.length > 3 && (
                  <div className="text-center">
                    <p className="text-blue-100">
                      And {compatibleProducts.length - 3} more compatible batteries...
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Zap className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">No Compatible Batteries Found</h4>
                <p className="text-blue-100">
                  We couldn't find batteries specifically for your vehicle. 
                  Try browsing our general selection or contact us for assistance.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Delivery Areas Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {deliveryAreas.map(area => (
            <div key={area.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-battery-accent" />
                <span className="font-semibold">{area.name}</span>
              </div>
              <div className="text-sm text-blue-100">
                {area.isFreeDelivery ? (
                  <span className="text-green-300 font-semibold">Free Delivery</span>
                ) : (
                  <span>+₱{area.deliveryFee} delivery</span>
                )}
              </div>
              <div className="flex items-center justify-center space-x-1 mt-1 text-xs text-blue-200">
                <Clock className="h-3 w-3" />
                <span>{area.deliveryTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BatteryFinder;
