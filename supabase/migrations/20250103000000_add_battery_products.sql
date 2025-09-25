-- Add comprehensive battery products to menu_items table
-- This migration adds real battery products with pricing and specifications

INSERT INTO menu_items (
  id,
  name,
  description,
  base_price,
  category,
  brand,
  popular,
  available,
  image_url,
  voltage,
  capacity,
  cca,
  dimensions,
  weight,
  terminal_type,
  battery_type,
  warranty,
  warranty_type,
  free_shipping,
  in_stock,
  stock_quantity,
  created_at,
  updated_at
) VALUES 
-- DIN44 Series
('din44-7634', 'DIN44 Premium Battery', 'High-performance DIN44 battery with excellent starting power and durability. Perfect for compact vehicles and motorcycles.', 7634.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 44, 420, '{"length": 9.0, "width": 5.1, "height": 8.9, "unit": "inches"}', 12.5, 'top-post', 'agm', 12, 'standard', true, true, 15, NOW(), NOW()),

('din44h-8278', 'DIN44H Heavy Duty Battery', 'Heavy-duty DIN44H battery designed for high-performance vehicles with increased electrical demands.', 8278.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 44, 450, '{"length": 9.0, "width": 5.1, "height": 8.9, "unit": "inches"}', 13.2, 'top-post', 'agm', 18, 'premium', true, true, 12, NOW(), NOW()),

-- DIN55 Series
('din55-8651', 'DIN55 Standard Battery', 'Reliable DIN55 battery with balanced performance for mid-size vehicles.', 8651.00, 'car', 'Premium', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 55, 480, '{"length": 9.4, "width": 5.1, "height": 8.9, "unit": "inches"}', 14.8, 'top-post', 'agm', 12, 'standard', true, true, 18, NOW(), NOW()),

('din55h-8876', 'DIN55H Enhanced Battery', 'Enhanced DIN55H battery with superior cold cranking performance.', 8876.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 55, 520, '{"length": 9.4, "width": 5.1, "height": 8.9, "unit": "inches"}', 15.5, 'top-post', 'agm', 18, 'premium', true, true, 10, NOW(), NOW()),

-- DIN66 Series
('din66-10679', 'DIN66 Power Battery', 'High-capacity DIN66 battery for luxury vehicles and high-performance applications.', 10679.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 66, 580, '{"length": 10.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 18.2, 'top-post', 'agm', 24, 'premium', true, true, 8, NOW(), NOW()),

('din66h-11005', 'DIN66H Ultra Battery', 'Ultra-performance DIN66H battery with maximum power output and extended life.', 11005.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 66, 620, '{"length": 10.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 19.1, 'top-post', 'agm', 24, 'premium', true, true, 6, NOW(), NOW()),

-- DIN77 Series
('din77-11075', 'DIN77 Professional Battery', 'Professional-grade DIN77 battery for commercial and heavy-duty applications.', 11075.00, 'truck', 'Premium', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 77, 650, '{"length": 10.9, "width": 6.8, "height": 7.5, "unit": "inches"}', 21.5, 'top-post', 'agm', 18, 'premium', false, true, 5, NOW(), NOW()),

('din77h-11365', 'DIN77H Heavy Duty Battery', 'Heavy-duty DIN77H battery designed for extreme conditions and high electrical loads.', 11365.00, 'truck', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 77, 700, '{"length": 10.9, "width": 6.8, "height": 7.5, "unit": "inches"}', 22.8, 'top-post', 'agm', 24, 'premium', false, true, 4, NOW(), NOW()),

-- DIN88 Series
('din88-12145', 'DIN88 Commercial Battery', 'Commercial-grade DIN88 battery for large vehicles and industrial applications.', 12145.00, 'truck', 'Premium', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 88, 750, '{"length": 12.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 25.3, 'top-post', 'agm', 18, 'premium', false, true, 3, NOW(), NOW()),

('din88h-12526', 'DIN88H Industrial Battery', 'Industrial-strength DIN88H battery for maximum performance and reliability.', 12526.00, 'truck', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 88, 800, '{"length": 12.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 26.7, 'top-post', 'agm', 24, 'premium', false, true, 2, NOW(), NOW()),

-- G31 Series (Solar/Deep Cycle)
('g31-110-13946', 'G31/110 Solar Battery', 'High-capacity G31/110 deep cycle battery perfect for solar power systems and off-grid applications.', 13946.00, 'solar', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 110, 0, '{"length": 13.0, "width": 6.8, "height": 8.0, "unit": "inches"}', 28.5, 'top-post', 'lithium', 60, 'premium', false, true, 2, NOW(), NOW()),

('g31-110h-14310', 'G31/110H Enhanced Solar Battery', 'Enhanced G31/110H lithium battery with superior cycle life and performance.', 14310.00, 'solar', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 110, 0, '{"length": 13.0, "width": 6.8, "height": 8.0, "unit": "inches"}', 29.2, 'top-post', 'lithium', 60, 'premium', false, true, 1, NOW(), NOW()),

-- G65 Series
('g65-11547', 'G65 Marine Battery', 'Reliable G65 marine battery designed for boats and watercraft applications.', 11547.00, 'marine', 'Premium', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 65, 600, '{"length": 10.9, "width": 6.8, "height": 7.5, "unit": "inches"}', 18.5, 'top-post', 'agm', 18, 'premium', false, true, 4, NOW(), NOW()),

-- NS40 Series
('ns40-5393', 'NS40 Standard Battery', 'Economical NS40 battery perfect for small vehicles and motorcycles.', 5393.00, 'motorcycle', 'Standard', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 40, 350, '{"length": 7.7, "width": 5.0, "height": 7.2, "unit": "inches"}', 10.8, 'top-post', 'lead-acid', 6, 'standard', true, true, 25, NOW(), NOW()),

-- NS60 Series
('ns60-7035', 'NS60 Power Battery', 'NS60 battery with enhanced power output for mid-size motorcycles and ATVs.', 7035.00, 'motorcycle', 'Standard', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 60, 420, '{"length": 8.5, "width": 5.0, "height": 7.2, "unit": "inches"}', 13.2, 'top-post', 'lead-acid', 12, 'standard', true, true, 20, NOW(), NOW()),

-- D20 Series
('d20-7121', 'D20 Compact Battery', 'Compact D20 battery designed for space-constrained applications.', 7121.00, 'car', 'Standard', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 50, 400, '{"length": 8.0, "width": 5.5, "height": 7.0, "unit": "inches"}', 12.1, 'top-post', 'lead-acid', 12, 'standard', true, true, 15, NOW(), NOW()),

-- NS50 Series
('ns50-7164', 'NS50 Enhanced Battery', 'Enhanced NS50 battery with improved performance and reliability.', 7164.00, 'motorcycle', 'Standard', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 50, 450, '{"length": 8.5, "width": 5.0, "height": 7.2, "unit": "inches"}', 12.8, 'top-post', 'lead-acid', 12, 'standard', true, true, 18, NOW(), NOW()),

-- N50 Series
('n50-7678', 'N50 Premium Battery', 'Premium N50 battery with superior starting power and extended life.', 7678.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 50, 480, '{"length": 8.5, "width": 5.0, "height": 7.2, "unit": "inches"}', 13.5, 'top-post', 'agm', 18, 'premium', true, true, 12, NOW(), NOW()),

-- N70 Series
('n70-8790', 'N70 High Performance Battery', 'High-performance N70 battery for luxury vehicles and high-end applications.', 8790.00, 'car', 'Premium', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 70, 550, '{"length": 9.4, "width": 5.1, "height": 8.9, "unit": "inches"}', 16.2, 'top-post', 'agm', 24, 'premium', true, true, 8, NOW(), NOW());

-- Add delivery area associations for all products
INSERT INTO product_delivery_areas (product_id, delivery_area_id, delivery_fee, is_available)
SELECT 
  mi.id,
  da.id,
  CASE 
    WHEN da.code = 'CDO' THEN 0
    WHEN da.code = 'MisOr' THEN 200
    WHEN da.code = 'Dito' THEN 300
    ELSE 0
  END,
  true
FROM menu_items mi
CROSS JOIN (
  SELECT id, code FROM delivery_areas 
  WHERE code IN ('CDO', 'MisOr', 'Dito')
) da
WHERE mi.id IN (
  'din44-7634', 'din44h-8278', 'din55-8651', 'din55h-8876', 
  'din66-10679', 'din66h-11005', 'din77-11075', 'din77h-11365',
  'din88-12145', 'din88h-12526', 'g31-110-13946', 'g31-110h-14310',
  'g65-11547', 'ns40-5393', 'ns60-7035', 'd20-7121', 'ns50-7164',
  'n50-7678', 'n70-8790'
);

-- Add compatibility data for common vehicles
INSERT INTO product_compatibilities (product_id, make, model, year_range, engine_type)
SELECT 
  mi.id,
  'Toyota',
  'Vios',
  '2013-2023',
  '1.3L-1.5L'
FROM menu_items mi
WHERE mi.id IN ('din44-7634', 'din44h-8278', 'ns40-5393', 'ns60-7035');

INSERT INTO product_compatibilities (product_id, make, model, year_range, engine_type)
SELECT 
  mi.id,
  'Honda',
  'Civic',
  '2016-2023',
  '1.5L-2.0L'
FROM menu_items mi
WHERE mi.id IN ('din55-8651', 'din55h-8876', 'n50-7678', 'n70-8790');

INSERT INTO product_compatibilities (product_id, make, model, year_range, engine_type)
SELECT 
  mi.id,
  'Ford',
  'Ranger',
  '2015-2023',
  '2.0L-3.2L'
FROM menu_items mi
WHERE mi.id IN ('din66-10679', 'din66h-11005', 'din77-11075', 'din77h-11365');

-- Add discount pricing for some products
UPDATE menu_items 
SET 
  discount_price = base_price * 0.85,
  discount_active = true,
  discount_start_date = NOW(),
  discount_end_date = NOW() + INTERVAL '30 days'
WHERE id IN ('din44-7634', 'ns40-5393', 'ns60-7035', 'd20-7121');

-- Update effective prices
UPDATE menu_items 
SET effective_price = CASE 
  WHEN discount_active AND discount_price IS NOT NULL THEN discount_price
  ELSE base_price
END
WHERE id IN (
  'din44-7634', 'din44h-8278', 'din55-8651', 'din55h-8876', 
  'din66-10679', 'din66h-11005', 'din77-11075', 'din77h-11365',
  'din88-12145', 'din88h-12526', 'g31-110-13946', 'g31-110h-14310',
  'g65-11547', 'ns40-5393', 'ns60-7035', 'd20-7121', 'ns50-7164',
  'n50-7678', 'n70-8790'
);
