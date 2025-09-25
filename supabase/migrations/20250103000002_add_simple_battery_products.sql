-- Simple battery products migration - using existing columns
-- This migration adds battery products with basic information and battery specs

-- Add the core battery products using existing columns
INSERT INTO menu_items (
  id,
  name,
  description,
  base_price,
  category,
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
  free_shipping,
  in_stock,
  stock_quantity,
  created_at,
  updated_at
) VALUES 
-- DIN44 Series (₱7,634 - ₱8,278)
('din44-7634', 'DIN44 Premium Battery', 'High-performance DIN44 battery with excellent starting power. Perfect for compact vehicles and motorcycles.', 7634.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 44, 420, '{"length": 9.0, "width": 5.1, "height": 8.9, "unit": "inches"}', 12.5, 'top-post', 'agm', 12, true, true, 15, NOW(), NOW()),

('din44h-8278', 'DIN44H Heavy Duty Battery', 'Heavy-duty DIN44H battery designed for high-performance vehicles with increased electrical demands.', 8278.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 44, 450, '{"length": 9.0, "width": 5.1, "height": 8.9, "unit": "inches"}', 13.2, 'top-post', 'agm', 18, true, true, 12, NOW(), NOW()),

-- DIN55 Series (₱8,651 - ₱8,876)
('din55-8651', 'DIN55 Standard Battery', 'Reliable DIN55 battery with balanced performance for mid-size vehicles.', 8651.00, 'car', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

('din55h-8876', 'DIN55H Enhanced Battery', 'Enhanced DIN55H battery with superior cold cranking performance.', 8876.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- DIN66 Series (₱10,679 - ₱11,005)
('din66-10679', 'DIN66 Power Battery', 'High-capacity DIN66 battery for luxury vehicles and high-performance applications.', 10679.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

('din66h-11005', 'DIN66H Ultra Battery', 'Ultra-performance DIN66H battery with maximum power output and extended life.', 11005.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- DIN77 Series (₱11,075 - ₱11,365)
('din77-11075', 'DIN77 Professional Battery', 'Professional-grade DIN77 battery for commercial and heavy-duty applications.', 11075.00, 'truck', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

('din77h-11365', 'DIN77H Heavy Duty Battery', 'Heavy-duty DIN77H battery designed for extreme conditions and high electrical loads.', 11365.00, 'truck', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- DIN88 Series (₱12,145 - ₱12,526)
('din88-12145', 'DIN88 Commercial Battery', 'Commercial-grade DIN88 battery for large vehicles and industrial applications.', 12145.00, 'truck', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

('din88h-12526', 'DIN88H Industrial Battery', 'Industrial-strength DIN88H battery for maximum performance and reliability.', 12526.00, 'truck', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- G31/110 Series (₱13,946 - ₱14,310) - Solar/Deep Cycle
('g31-110-13946', 'G31/110 Solar Battery', 'High-capacity G31/110 deep cycle battery perfect for solar power systems and off-grid applications.', 13946.00, 'solar', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

('g31-110h-14310', 'G31/110H Enhanced Solar Battery', 'Enhanced G31/110H lithium battery with superior cycle life and performance.', 14310.00, 'solar', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- G65 Series (₱11,547)
('g65-11547', 'G65 Marine Battery', 'Reliable G65 marine battery designed for boats and watercraft applications.', 11547.00, 'marine', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- NS40 Series (₱5,393)
('ns40-5393', 'NS40 Standard Battery', 'Economical NS40 battery perfect for small vehicles and motorcycles.', 5393.00, 'motorcycle', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- NS60 Series (₱7,035)
('ns60-7035', 'NS60 Power Battery', 'NS60 battery with enhanced power output for mid-size motorcycles and ATVs.', 7035.00, 'motorcycle', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- D20 Series (₱7,121)
('d20-7121', 'D20 Compact Battery', 'Compact D20 battery designed for space-constrained applications.', 7121.00, 'car', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- NS50 Series (₱7,164)
('ns50-7164', 'NS50 Enhanced Battery', 'Enhanced NS50 battery with improved performance and reliability.', 7164.00, 'motorcycle', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- N50 Series (₱7,678)
('n50-7678', 'N50 Premium Battery', 'Premium N50 battery with superior starting power and extended life.', 7678.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW()),

-- N70 Series (₱8,790)
('n70-8790', 'N70 High Performance Battery', 'High-performance N70 battery for luxury vehicles and high-end applications.', 8790.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', NOW(), NOW());

-- Add some discount pricing for promotional products
UPDATE menu_items 
SET 
  discount_price = base_price * 0.90,
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
