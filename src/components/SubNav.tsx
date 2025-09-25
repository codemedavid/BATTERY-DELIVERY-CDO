import React from 'react';
import { useCategories } from '../hooks/useCategories';
import { Car, Truck, Battery, Zap, Wrench, Shield } from 'lucide-react';

interface SubNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const SubNav: React.FC<SubNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories, loading } = useCategories();

  // Default battery categories if none are loaded
  const defaultCategories = [
    { id: 'car', name: 'Car Batteries', icon: Car },
    { id: 'truck', name: 'Truck Batteries', icon: Truck },
    { id: 'marine', name: 'Marine Batteries', icon: Battery },
    { id: 'motorcycle', name: 'Motorcycle', icon: Zap },
    { id: 'accessories', name: 'Accessories', icon: Wrench },
    { id: 'warranty', name: 'Warranty', icon: Shield }
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="sticky top-32 z-40 bg-battery-white/95 backdrop-blur-md border-b border-battery-secondary-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
            {loading ? (
              <div className="flex space-x-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="h-10 w-24 bg-battery-secondary-light rounded-lg animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <button
                  onClick={() => onCategoryClick('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedCategory === 'all'
                      ? 'bg-battery-primary text-white shadow-lg'
                      : 'bg-battery-background text-battery-text hover:bg-battery-secondary-light hover:text-white'
                  }`}
                >
                  <Battery className="h-4 w-4" />
                  <span>All Products</span>
                </button>
                {displayCategories.map((c) => {
                  // Handle both React components and emoji strings
                  const renderIcon = () => {
                    if (typeof c.icon === 'string') {
                      return <span className="text-lg">{c.icon}</span>;
                    } else if (c.icon) {
                      const IconComponent = c.icon;
                      return <IconComponent className="h-4 w-4" />;
                    } else {
                      return <Battery className="h-4 w-4" />;
                    }
                  };

                  return (
                    <button
                      key={c.id}
                      onClick={() => onCategoryClick(c.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        selectedCategory === c.id
                          ? 'bg-battery-primary text-white shadow-lg'
                          : 'bg-battery-background text-battery-text hover:bg-battery-secondary-light hover:text-white'
                      }`}
                    >
                      {renderIcon()}
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </>
            )}
          </div>

          {/* Quick Filters */}
          <div className="hidden lg:flex items-center space-x-2">
            <span className="text-sm text-battery-text-light mr-2">Quick Filters:</span>
            <button className="px-3 py-1 text-xs bg-battery-accent/10 text-battery-accent rounded-full hover:bg-battery-accent hover:text-white transition-colors">
              Free Delivery
            </button>
            <button className="px-3 py-1 text-xs bg-battery-accent/10 text-battery-accent rounded-full hover:bg-battery-accent hover:text-white transition-colors">
              On Sale
            </button>
            <button className="px-3 py-1 text-xs bg-battery-accent/10 text-battery-accent rounded-full hover:bg-battery-accent hover:text-white transition-colors">
              New Arrivals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;


