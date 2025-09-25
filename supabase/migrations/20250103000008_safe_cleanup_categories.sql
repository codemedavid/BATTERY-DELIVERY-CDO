-- Safe cleanup of duplicate categories
-- This approach will preserve existing menu items

-- First, let's see exactly what we have
SELECT 'Current categories:' as info;
SELECT id, name, icon, sort_order, active, created_at FROM categories ORDER BY id;

-- Step 1: Update menu items to use the correct category IDs
UPDATE menu_items SET category = 'car' WHERE category IN ('car-batteries');
UPDATE menu_items SET category = 'truck' WHERE category IN ('truck-batteries');
UPDATE menu_items SET category = 'motorcycle' WHERE category IN ('motorcycle-batteries');
UPDATE menu_items SET category = 'solar' WHERE category IN ('solar-battery');

-- Step 2: Delete the duplicate/wrong categories
-- Keep only the ones with correct IDs
DELETE FROM categories WHERE id IN (
  'car-batteries', 
  'truck-batteries', 
  'motorcycle-batteries', 
  'deep-cycle', 
  'accessories', 
  'solar-battery'
);

-- Step 3: Ensure we have the correct categories
-- Insert the correct ones if they don't exist
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

-- Step 4: Show final result
SELECT 'Final categories:' as info;
SELECT id, name, icon, sort_order, active FROM categories ORDER BY sort_order;

SELECT 'Menu items count:' as info, COUNT(*) as count FROM menu_items;
