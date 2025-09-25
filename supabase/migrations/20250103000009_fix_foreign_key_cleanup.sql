-- Fix foreign key constraint issue by updating menu items first
-- This migration handles the foreign key constraint properly

-- Step 1: First, let's see what menu items exist and what categories they reference
SELECT 'Current menu items and their categories:' as info;
SELECT name, category, created_at FROM menu_items ORDER BY created_at;

-- Step 2: Update ALL menu items to use the correct category IDs
-- This will remove the foreign key constraint issues
UPDATE menu_items SET category = 'car' WHERE category = 'car-batteries';
UPDATE menu_items SET category = 'truck' WHERE category = 'truck-batteries';
UPDATE menu_items SET category = 'motorcycle' WHERE category = 'motorcycle-batteries';
UPDATE menu_items SET category = 'solar' WHERE category = 'solar-battery';
UPDATE menu_items SET category = 'marine' WHERE category = 'deep-cycle';

-- Step 3: Now we can safely delete the old/duplicate categories
DELETE FROM categories WHERE id IN (
  'car-batteries', 
  'truck-batteries', 
  'motorcycle-batteries', 
  'deep-cycle', 
  'accessories', 
  'solar-battery'
);

-- Step 4: Ensure we have the correct categories
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

-- Step 5: Show final result
SELECT 'Final categories:' as info;
SELECT id, name, icon, sort_order, active FROM categories ORDER BY sort_order;

SELECT 'Final menu items count:' as info, COUNT(*) as count FROM menu_items;
SELECT 'Menu items by category:' as info;
SELECT category, COUNT(*) as count FROM menu_items GROUP BY category ORDER BY category;
