-- Cleanup duplicate categories and standardize category IDs
-- This migration removes duplicates and ensures consistent category structure

-- First, let's see what we have and clean up duplicates
-- Remove duplicate categories, keeping the ones with the correct IDs
DELETE FROM categories WHERE id IN (
  'car-batteries', 'truck-batteries', 'motorcycle-batteries', 
  'deep-cycle', 'accessories', 'solar-battery'
);

-- Update any menu items that might be using the old category IDs
UPDATE menu_items SET category = 'car' WHERE category = 'car-batteries';
UPDATE menu_items SET category = 'truck' WHERE category = 'truck-batteries';
UPDATE menu_items SET category = 'motorcycle' WHERE category = 'motorcycle-batteries';
UPDATE menu_items SET category = 'solar' WHERE category = 'solar-battery';

-- Ensure we have the correct battery categories with proper sort order
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('car', 'Car Batteries', '🚗', 1, true),
  ('truck', 'Truck Batteries', '🚛', 2, true),
  ('marine', 'Marine Batteries', '⛵', 3, true),
  ('motorcycle', 'Motorcycle Batteries', '🏍️', 4, true),
  ('solar', 'Solar Batteries', '☀️', 5, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  icon = EXCLUDED.icon,
  sort_order = EXCLUDED.sort_order,
  active = EXCLUDED.active;

-- Clean up any orphaned menu items (items with categories that don't exist)
-- First, let's see if there are any orphaned items
-- DELETE FROM menu_items WHERE category NOT IN (SELECT id FROM categories);

-- Show the final category structure
SELECT id, name, icon, sort_order, active FROM categories ORDER BY sort_order;
