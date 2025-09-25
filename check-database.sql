-- Check if categories and menu items exist
-- Run this in your Supabase SQL Editor

-- Check categories
SELECT 'Categories' as table_name, COUNT(*) as count FROM categories
UNION ALL
SELECT 'Menu Items' as table_name, COUNT(*) as count FROM menu_items;

-- Show categories
SELECT id, name, icon, active FROM categories ORDER BY sort_order;

-- Show menu items
SELECT name, base_price, category, created_at FROM menu_items ORDER BY created_at LIMIT 10;
