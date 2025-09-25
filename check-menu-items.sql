-- Check menu items in the database
-- Run this in your Supabase SQL Editor

-- Count total menu items
SELECT COUNT(*) as total_menu_items FROM menu_items;

-- Show all menu items with their categories
SELECT 
  name, 
  base_price, 
  category, 
  created_at,
  available,
  in_stock
FROM menu_items 
ORDER BY created_at DESC;

-- Check if there are any items with the old category IDs
SELECT DISTINCT category FROM menu_items ORDER BY category;
