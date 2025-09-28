import React from 'react';
import { BatteryProduct, CartItem, DeliveryArea } from '../types';
import { useCategories } from '../hooks/useCategories';
import BatteryProductCard from './BatteryProductCard';
import AdvancedSearch from './AdvancedSearch';
import MobileNav from './MobileNav';
import { Battery, SortAsc } from 'lucide-react';

// Preload images for better performance
const preloadImages = (items: BatteryProduct[]) => {
  items.forEach(item => {
    if (item.image) {
      const img = new Image();
      img.src = item.image;
    }
  });
};

interface MenuProps {
  menuItems: BatteryProduct[];
  addToCart: (item: BatteryProduct, quantity?: number) => void;
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  deliveryAreas: DeliveryArea[];
}

const Menu: React.FC<MenuProps> = ({ menuItems, addToCart, cartItems, updateQuantity, deliveryAreas }) => {
  const { categories } = useCategories();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('name');
  const [filteredProducts, setFilteredProducts] = React.useState<BatteryProduct[]>(menuItems);

  // Preload images when menu items change
  React.useEffect(() => {
    if (menuItems.length > 0) {
      preloadImages(menuItems);
    }
  }, [menuItems]);

  // Update filtered products when menu items change
  React.useEffect(() => {
    setFilteredProducts(menuItems);
  }, [menuItems]);

  // Debug logging
  React.useEffect(() => {
    console.log('🍽️ [Menu] Received menu items:', menuItems);
    console.log('🍽️ [Menu] Menu items count:', menuItems.length);
    if (menuItems.length > 0) {
      console.log('🍽️ [Menu] First item:', menuItems[0]);
    }
  }, [menuItems]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Sort products
  const sortedProducts = React.useMemo(() => {
    console.log('🔍 [Menu] Sorting filtered products:');
    console.log('   Filtered products:', filteredProducts.map(item => ({ name: item.name, category: item.category })));
    
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.effectivePrice || a.basePrice) - (b.effectivePrice || b.basePrice);
        case 'price-high':
          return (b.effectivePrice || b.basePrice) - (a.effectivePrice || a.basePrice);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || '🔋';
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.name || 'All Products';
  };

  return (
    <>
      <MobileNav 
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-poppins font-bold text-gray-900 mb-6">Premium Battery Collection</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            High-performance automotive batteries engineered for reliability, durability, and optimal power delivery 
            across all vehicle types.
          </p>
        </div>

        {/* Advanced Search and Filters */}
        <AdvancedSearch 
          products={menuItems}
          onFilteredProducts={setFilteredProducts}
          deliveryAreas={deliveryAreas}
        />

        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SortAsc className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white text-gray-700 focus:ring-2 focus:ring-battery-primary focus:border-transparent shadow-sm font-medium"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 font-medium">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Enhanced Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Battery className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-3">No Products Found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your filters or browse all categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => {
              const cartItem = cartItems.find(cartItem => cartItem.id === product.id);
              return (
                <BatteryProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  quantity={cartItem?.quantity || 0}
                  onUpdateQuantity={updateQuantity}
                />
              );
            })}
          </div>
        )}

        {/* Category Sections (if needed for better organization) */}
        {activeCategory === 'all' && (
          <div className="mt-16 space-y-16">
            {['car', 'truck', 'marine', 'motorcycle'].map((categoryId) => {
              const categoryItems = menuItems.filter(item => item.category === categoryId);
              if (categoryItems.length === 0) return null;
              
              return (
                <section key={categoryId} id={categoryId} className="mb-16">
                  <div className="flex items-center mb-8">
                    <span className="text-3xl mr-3">{getCategoryIcon(categoryId)}</span>
                    <h3 className="text-3xl font-poppins font-bold text-battery-text">{getCategoryName(categoryId)}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryItems.map((product) => {
                      const cartItem = cartItems.find(cartItem => cartItem.id === product.id);
                      return (
                        <BatteryProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={addToCart}
                          quantity={cartItem?.quantity || 0}
                          onUpdateQuantity={updateQuantity}
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default Menu;