-- Force cleanup of duplicate categories
-- This migration will completely clean up the categories table

-- First, let's see what we have
SELECT 'Before cleanup - Categories count:' as status, COUNT(*) as count FROM categories;

-- Delete ALL categories first (this will also delete any menu items due to foreign key)
-- We need to be careful here - this will delete everything
-- Let's first check if there are menu items
SELECT 'Menu items count:' as status, COUNT(*) as count FROM menu_items;

-- If you want to keep existing menu items, we need to handle this differently
-- Let's create a backup approach:

-- Step 1: Create a temporary table to store menu items
CREATE TEMP TABLE temp_menu_items AS 
SELECT * FROM menu_items;

-- Step 2: Delete all categories (this will cascade delete menu items)
DELETE FROM categories;

-- Step 3: Insert only the correct categories
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('car', 'Car Batteries', '🚗', 1, true),
  ('truck', 'Truck Batteries', '🚛', 2, true),
  ('marine', 'Marine Batteries', '⛵', 3, true),
  ('motorcycle', 'Motorcycle Batteries', '🏍️', 4, true),
  ('solar', 'Solar Batteries', '☀️', 5, true);

-- Step 4: Restore menu items (if any existed)
-- Note: This will only work if the menu items had valid category references
INSERT INTO menu_items 
SELECT * FROM temp_menu_items 
WHERE category IN ('car', 'truck', 'marine', 'motorcycle', 'solar');

-- Step 5: Clean up temp table
DROP TABLE temp_menu_items;

-- Show final result
SELECT 'After cleanup - Categories:' as status;
SELECT id, name, icon, sort_order, active FROM categories ORDER BY sort_order;

SELECT 'After cleanup - Menu items:' as status;
SELECT COUNT(*) as count FROM menu_items;
