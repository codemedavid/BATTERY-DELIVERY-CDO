import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { BatteryProduct } from '../types';

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState<BatteryProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      console.log('🔍 [useMenu] Fetching menu items from database...');
      
      // Fetch battery products from menu_items table
      const { data: items, error: itemsError } = await supabase
        .from('menu_items')
        .select('*')
        .order('created_at', { ascending: true });

      if (itemsError) {
        console.error('❌ [useMenu] Database error:', itemsError);
        throw itemsError;
      }

      console.log('📦 [useMenu] Raw items from database:', items);

      const formattedItems: BatteryProduct[] = items?.map(item => {
        // Calculate if discount is currently active
        const now = new Date();
        const discountStart = item.discount_start_date ? new Date(item.discount_start_date) : null;
        const discountEnd = item.discount_end_date ? new Date(item.discount_end_date) : null;
        
        const isDiscountActive = item.discount_active && 
          (!discountStart || now >= discountStart) && 
          (!discountEnd || now <= discountEnd);
        
        // Calculate effective price
        const effectivePrice = isDiscountActive && item.discount_price ? item.discount_price : item.base_price;

        return {
          id: item.id,
          name: item.name,
          description: item.description,
          basePrice: item.base_price,
          category: item.category,
          popular: item.popular || false,
          available: item.available ?? true,
          image: item.image_url || undefined,
          voltage: item.voltage || 12,
          capacity: item.capacity || 0,
          cca: item.cca || 0,
          dimensions: item.dimensions || { length: 0, width: 0, height: 0, unit: 'inches' },
          weight: item.weight || 0,
          terminalType: item.terminal_type || 'top-post',
          batteryType: item.battery_type || 'lead-acid',
          warranty: item.warranty || 12,
          freeShipping: item.free_shipping || false,
          inStock: item.in_stock ?? true,
          stockQuantity: item.stock_quantity || 0,
          discountPrice: item.discount_price || undefined,
          discountStartDate: item.discount_start_date || undefined,
          discountEndDate: item.discount_end_date || undefined,
          discountActive: item.discount_active || false,
          effectivePrice,
          isOnDiscount: isDiscountActive,
          compatibilities: [] // Will be populated from a separate table if needed
        };
      }) || [];

      console.log('✅ [useMenu] Formatted items:', formattedItems);
      setMenuItems(formattedItems);
      setError(null);
    } catch (err) {
      console.error('❌ [useMenu] Error fetching menu items:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch menu items');
    } finally {
      setLoading(false);
    }
  };

  const addMenuItem = async (item: Omit<BatteryProduct, 'id'>) => {
    try {
      console.log('➕ [useMenu] Adding new battery product:', item);
      // Insert battery product
      const { data: menuItem, error: itemError } = await supabase
        .from('menu_items')
        .insert({
          name: item.name,
          description: item.description,
          base_price: item.basePrice,
          category: item.category,
          popular: item.popular || false,
          available: item.available ?? true,
          image_url: item.image || null,
          voltage: item.voltage,
          capacity: item.capacity,
          cca: item.cca,
          dimensions: item.dimensions,
          weight: item.weight,
          terminal_type: item.terminalType,
          battery_type: item.batteryType,
          warranty: item.warranty,
          free_shipping: item.freeShipping || false,
          in_stock: item.inStock ?? true,
          stock_quantity: item.stockQuantity || 0,
          discount_price: item.discountPrice || null,
          discount_start_date: item.discountStartDate || null,
          discount_end_date: item.discountEndDate || null,
          discount_active: item.discountActive || false
        })
        .select()
        .single();

      if (itemError) {
        console.error('❌ [useMenu] Error inserting battery product:', itemError);
        throw itemError;
      }

      console.log('✅ [useMenu] Successfully added battery product:', menuItem);
      await fetchMenuItems();
      return menuItem;
    } catch (err) {
      console.error('❌ [useMenu] Error adding battery product:', err);
      throw err;
    }
  };

  const updateMenuItem = async (id: string, updates: Partial<BatteryProduct>) => {
    try {
      // Update battery product
      const { error: itemError } = await supabase
        .from('menu_items')
        .update({
          name: updates.name,
          description: updates.description,
          base_price: updates.basePrice,
          category: updates.category,
          popular: updates.popular,
          available: updates.available,
          image_url: updates.image || null,
          voltage: updates.voltage,
          capacity: updates.capacity,
          cca: updates.cca,
          dimensions: updates.dimensions,
          weight: updates.weight,
          terminal_type: updates.terminalType,
          battery_type: updates.batteryType,
          warranty: updates.warranty,
          free_shipping: updates.freeShipping,
          in_stock: updates.inStock,
          stock_quantity: updates.stockQuantity,
          discount_price: updates.discountPrice || null,
          discount_start_date: updates.discountStartDate || null,
          discount_end_date: updates.discountEndDate || null,
          discount_active: updates.discountActive
        })
        .eq('id', id);

      if (itemError) throw itemError;

      await fetchMenuItems();
    } catch (err) {
      console.error('Error updating battery product:', err);
      throw err;
    }
  };

  const deleteMenuItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await fetchMenuItems();
    } catch (err) {
      console.error('Error deleting menu item:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return {
    menuItems,
    loading,
    error,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    refetch: fetchMenuItems
  };
};