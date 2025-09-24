/*
  # Add Battery Product Fields to Menu Items

  1. Menu Items Changes
    - Add `voltage` (integer) - battery voltage (12V, 6V, etc.)
    - Add `capacity` (integer) - battery capacity in Ah (Amp Hours)
    - Add `cca` (integer) - Cold Cranking Amps
    - Add `dimensions` (jsonb) - battery dimensions {length, width, height, unit}
    - Add `weight` (decimal) - battery weight in pounds or kg
    - Add `terminal_type` (text) - terminal type (top-post, side-post, both)
    - Add `battery_type` (text) - battery type (lead-acid, agm, gel, lithium)
    - Add `warranty` (integer) - warranty in months
    - Add `free_shipping` (boolean) - whether item has free shipping
    - Add `in_stock` (boolean) - whether item is in stock
    - Add `stock_quantity` (integer) - available stock quantity
    - Add `available` (boolean) - whether item is available for purchase

  2. Security
    - No additional security changes needed (uses existing policies)
*/

-- Add battery-specific fields to menu_items table
DO $$
BEGIN
  -- Add voltage column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'voltage'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN voltage integer;
  END IF;

  -- Add capacity column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'capacity'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN capacity integer;
  END IF;

  -- Add cca column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'cca'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN cca integer;
  END IF;

  -- Add dimensions column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'dimensions'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN dimensions jsonb;
  END IF;

  -- Add weight column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'weight'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN weight decimal(10,2);
  END IF;

  -- Add terminal_type column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'terminal_type'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN terminal_type text;
  END IF;

  -- Add battery_type column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'battery_type'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN battery_type text;
  END IF;

  -- Add warranty column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'warranty'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN warranty integer;
  END IF;

  -- Add free_shipping column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'free_shipping'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN free_shipping boolean DEFAULT false;
  END IF;

  -- Add in_stock column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'in_stock'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN in_stock boolean DEFAULT true;
  END IF;

  -- Add stock_quantity column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'stock_quantity'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN stock_quantity integer;
  END IF;

  -- Add available column (if not exists)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'menu_items' AND column_name = 'available'
  ) THEN
    ALTER TABLE menu_items ADD COLUMN available boolean DEFAULT true;
  END IF;
END $$;

-- Create indexes for better performance on battery-specific queries
CREATE INDEX IF NOT EXISTS idx_menu_items_voltage ON menu_items(voltage);
CREATE INDEX IF NOT EXISTS idx_menu_items_capacity ON menu_items(capacity);
CREATE INDEX IF NOT EXISTS idx_menu_items_cca ON menu_items(cca);
CREATE INDEX IF NOT EXISTS idx_menu_items_battery_type ON menu_items(battery_type);
CREATE INDEX IF NOT EXISTS idx_menu_items_terminal_type ON menu_items(terminal_type);
CREATE INDEX IF NOT EXISTS idx_menu_items_in_stock ON menu_items(in_stock);
CREATE INDEX IF NOT EXISTS idx_menu_items_available ON menu_items(available);
