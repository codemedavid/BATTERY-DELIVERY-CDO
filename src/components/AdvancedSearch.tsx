import React, { useState } from 'react';
import { Search, Filter, X, Star, Truck, Shield, Zap } from 'lucide-react';
import { BatteryProduct, DeliveryArea } from '../types';

interface AdvancedSearchProps {
  products: BatteryProduct[];
  onFilteredProducts: (products: BatteryProduct[]) => void;
  deliveryAreas: DeliveryArea[];
}

interface FilterState {
  searchQuery: string;
  category: string;
  brand: string;
  batteryType: string;
  voltage: string;
  minPrice: number;
  maxPrice: number;
  warranty: string;
  rating: number;
  deliveryArea: string;
  inStock: boolean;
  onSale: boolean;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  products,
  onFilteredProducts,
  deliveryAreas
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    brand: 'all',
    batteryType: 'all',
    voltage: 'all',
    minPrice: 0,
    maxPrice: 50000,
    warranty: 'all',
    rating: 0,
    deliveryArea: 'all',
    inStock: false,
    onSale: false
  });

  // Get unique values for filter options
  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))];
  const batteryTypes = [...new Set(products.map(p => p.batteryType))];
  const voltages = [...new Set(products.map(p => p.voltage))].sort((a, b) => a - b);

  const applyFilters = () => {
    let filtered = [...products];

    // Search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Brand filter
    if (filters.brand !== 'all') {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    // Battery type filter
    if (filters.batteryType !== 'all') {
      filtered = filtered.filter(product => product.batteryType === filters.batteryType);
    }

    // Voltage filter
    if (filters.voltage !== 'all') {
      filtered = filtered.filter(product => product.voltage === parseInt(filters.voltage));
    }

    // Price range filter
    filtered = filtered.filter(product => {
      const price = product.effectivePrice || product.basePrice;
      return price >= filters.minPrice && price <= filters.maxPrice;
    });

    // Warranty filter
    if (filters.warranty !== 'all') {
      const warrantyMonths = parseInt(filters.warranty);
      filtered = filtered.filter(product => product.warranty >= warrantyMonths);
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => (product.rating || 0) >= filters.rating);
    }

    // Delivery area filter
    if (filters.deliveryArea !== 'all') {
      filtered = filtered.filter(product =>
        product.deliveryAreas?.some(area => area.code === filters.deliveryArea)
      );
    }

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // On sale filter
    if (filters.onSale) {
      filtered = filtered.filter(product => product.isOnDiscount);
    }

    onFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      brand: 'all',
      batteryType: 'all',
      voltage: 'all',
      minPrice: 0,
      maxPrice: 50000,
      warranty: 'all',
      rating: 0,
      deliveryArea: 'all',
      inStock: false,
      onSale: false
    });
    onFilteredProducts(products);
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    value !== 'all' && value !== 0 && value !== false && value !== ''
  ).length;

  React.useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search batteries by name, brand, or specifications..."
          value={filters.searchQuery}
          onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-battery-primary focus:border-transparent text-lg"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 px-4 py-2 bg-battery-primary text-white rounded-lg hover:bg-battery-primary-dark transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="bg-battery-accent text-battery-text px-2 py-1 rounded-full text-xs font-bold">
              {activeFiltersCount}
            </span>
          )}
        </button>
        
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
            <select
              value={filters.brand}
              onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
            >
              <option value="all">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Battery Type Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Battery Type</label>
            <select
              value={filters.batteryType}
              onChange={(e) => setFilters(prev => ({ ...prev, batteryType: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
            >
              <option value="all">All Types</option>
              {batteryTypes.map(type => (
                <option key={type} value={type}>
                  {type.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Voltage Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Voltage</label>
            <select
              value={filters.voltage}
              onChange={(e) => setFilters(prev => ({ ...prev, voltage: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
            >
              <option value="all">All Voltages</option>
              {voltages.map(voltage => (
                <option key={voltage} value={voltage}>{voltage}V</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, minPrice: parseInt(e.target.value) || 0 }))}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: parseInt(e.target.value) || 50000 }))}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
                />
              </div>
              <div className="text-xs text-gray-500">
                Range: ₱{filters.minPrice.toLocaleString()} - ₱{filters.maxPrice.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Warranty Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Warranty</label>
            <select
              value={filters.warranty}
              onChange={(e) => setFilters(prev => ({ ...prev, warranty: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
            >
              <option value="all">Any Warranty</option>
              <option value="6">6+ Months</option>
              <option value="12">12+ Months</option>
              <option value="24">24+ Months</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilters(prev => ({ 
                    ...prev, 
                    rating: prev.rating === rating ? 0 : rating 
                  }))}
                  className={`p-1 ${filters.rating >= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  <Star className="h-5 w-5 fill-current" />
                </button>
              ))}
            </div>
          </div>

          {/* Delivery Area Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Area</label>
            <select
              value={filters.deliveryArea}
              onChange={(e) => setFilters(prev => ({ ...prev, deliveryArea: e.target.value }))}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-battery-primary focus:border-transparent"
            >
              <option value="all">All Areas</option>
              {deliveryAreas.map(area => (
                <option key={area.id} value={area.code}>
                  {area.name} {area.isFreeDelivery ? '(Free)' : `(+₱${area.deliveryFee})`}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Filters */}
          <div className="md:col-span-2 lg:col-span-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Quick Filters</label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilters(prev => ({ ...prev, inStock: !prev.inStock }))}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  filters.inStock 
                    ? 'bg-green-100 border-green-300 text-green-700' 
                    : 'bg-gray-100 border-gray-300 text-gray-700'
                }`}
              >
                <Zap className="h-4 w-4" />
                <span>In Stock Only</span>
              </button>
              
              <button
                onClick={() => setFilters(prev => ({ ...prev, onSale: !prev.onSale }))}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  filters.onSale 
                    ? 'bg-red-100 border-red-300 text-red-700' 
                    : 'bg-gray-100 border-gray-300 text-gray-700'
                }`}
              >
                <Truck className="h-4 w-4" />
                <span>On Sale</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
