-- Clean battery products migration - no custom IDs, let database generate UUIDs
-- This migration adds battery products with all available fields

-- Add the core battery products
INSERT INTO menu_items (
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
  stock_quantity
) VALUES 
-- DIN44 Series (₱7,634 - ₱8,278)
('DIN44 Premium Battery', 'High-performance DIN44 battery with excellent starting power. Perfect for compact vehicles and motorcycles.', 7634.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 44, 420, '{"length": 9.0, "width": 5.1, "height": 8.9, "unit": "inches"}', 12.5, 'top-post', 'agm', 12, true, true, 15),

('DIN44H Heavy Duty Battery', 'Heavy-duty DIN44H battery designed for high-performance vehicles with increased electrical demands.', 8278.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 44, 450, '{"length": 9.0, "width": 5.1, "height": 8.9, "unit": "inches"}', 13.2, 'top-post', 'agm', 18, true, true, 12),

-- DIN55 Series (₱8,651 - ₱8,876)
('DIN55 Standard Battery', 'Reliable DIN55 battery with balanced performance for mid-size vehicles.', 8651.00, 'car', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 55, 480, '{"length": 9.4, "width": 5.1, "height": 8.9, "unit": "inches"}', 14.8, 'top-post', 'agm', 12, true, true, 18),

('DIN55H Enhanced Battery', 'Enhanced DIN55H battery with superior cold cranking performance.', 8876.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 55, 520, '{"length": 9.4, "width": 5.1, "height": 8.9, "unit": "inches"}', 15.5, 'top-post', 'agm', 18, true, true, 10),

-- DIN66 Series (₱10,679 - ₱11,005)
('DIN66 Power Battery', 'High-capacity DIN66 battery for luxury vehicles and high-performance applications.', 10679.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 66, 580, '{"length": 10.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 18.2, 'top-post', 'agm', 24, true, true, 8),

('DIN66H Ultra Battery', 'Ultra-performance DIN66H battery with maximum power output and extended life.', 11005.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 66, 620, '{"length": 10.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 19.1, 'top-post', 'agm', 24, true, true, 6),

-- DIN77 Series (₱11,075 - ₱11,365)
('DIN77 Professional Battery', 'Professional-grade DIN77 battery for commercial and heavy-duty applications.', 11075.00, 'truck', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 77, 650, '{"length": 10.9, "width": 6.8, "height": 7.5, "unit": "inches"}', 21.5, 'top-post', 'agm', 18, false, true, 5),

('DIN77H Heavy Duty Battery', 'Heavy-duty DIN77H battery designed for extreme conditions and high electrical loads.', 11365.00, 'truck', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 77, 700, '{"length": 10.9, "width": 6.8, "height": 7.5, "unit": "inches"}', 22.8, 'top-post', 'agm', 24, false, true, 4),

-- DIN88 Series (₱12,145 - ₱12,526)
('DIN88 Commercial Battery', 'Commercial-grade DIN88 battery for large vehicles and industrial applications.', 12145.00, 'truck', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 88, 750, '{"length": 12.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 25.3, 'top-post', 'agm', 18, false, true, 3),

('DIN88H Industrial Battery', 'Industrial-strength DIN88H battery for maximum performance and reliability.', 12526.00, 'truck', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 88, 800, '{"length": 12.0, "width": 6.8, "height": 7.5, "unit": "inches"}', 26.7, 'top-post', 'agm', 24, false, true, 2),

-- G31/110 Series (₱13,946 - ₱14,310) - Solar/Deep Cycle
('G31/110 Solar Battery', 'High-capacity G31/110 deep cycle battery perfect for solar power systems and off-grid applications.', 13946.00, 'solar', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 110, 0, '{"length": 13.0, "width": 6.8, "height": 8.0, "unit": "inches"}', 28.5, 'top-post', 'lithium', 60, false, true, 2),

('G31/110H Enhanced Solar Battery', 'Enhanced G31/110H lithium battery with superior cycle life and performance.', 14310.00, 'solar', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 110, 0, '{"length": 13.0, "width": 6.8, "height": 8.0, "unit": "inches"}', 29.2, 'top-post', 'lithium', 60, false, true, 1),

-- G65 Series (₱11,547)
('G65 Marine Battery', 'Reliable G65 marine battery designed for boats and watercraft applications.', 11547.00, 'marine', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 65, 600, '{"length": 10.9, "width": 6.8, "height": 7.5, "unit": "inches"}', 18.5, 'top-post', 'agm', 18, false, true, 4),

-- NS40 Series (₱5,393)
('NS40 Standard Battery', 'Economical NS40 battery perfect for small vehicles and motorcycles.', 5393.00, 'motorcycle', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 40, 350, '{"length": 7.7, "width": 5.0, "height": 7.2, "unit": "inches"}', 10.8, 'top-post', 'lead-acid', 6, true, true, 25),

-- NS60 Series (₱7,035)
('NS60 Power Battery', 'NS60 battery with enhanced power output for mid-size motorcycles and ATVs.', 7035.00, 'motorcycle', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 60, 420, '{"length": 8.5, "width": 5.0, "height": 7.2, "unit": "inches"}', 13.2, 'top-post', 'lead-acid', 12, true, true, 20),

-- D20 Series (₱7,121)
('D20 Compact Battery', 'Compact D20 battery designed for space-constrained applications.', 7121.00, 'car', false, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 50, 400, '{"length": 8.0, "width": 5.5, "height": 7.0, "unit": "inches"}', 12.1, 'top-post', 'lead-acid', 12, true, true, 15),

-- NS50 Series (₱7,164)
('NS50 Enhanced Battery', 'Enhanced NS50 battery with improved performance and reliability.', 7164.00, 'motorcycle', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 50, 450, '{"length": 8.5, "width": 5.0, "height": 7.2, "unit": "inches"}', 12.8, 'top-post', 'lead-acid', 12, true, true, 18),

-- N50 Series (₱7,678)
('N50 Premium Battery', 'Premium N50 battery with superior starting power and extended life.', 7678.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 50, 480, '{"length": 8.5, "width": 5.0, "height": 7.2, "unit": "inches"}', 13.5, 'top-post', 'agm', 18, true, true, 12),

-- N70 Series (₱8,790)
('N70 High Performance Battery', 'High-performance N70 battery for luxury vehicles and high-end applications.', 8790.00, 'car', true, true, 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800', 12, 70, 550, '{"length": 9.4, "width": 5.1, "height": 8.9, "unit": "inches"}', 16.2, 'top-post', 'agm', 24, true, true, 8);

-- Add some discount pricing for promotional products
UPDATE menu_items 
SET 
  discount_price = base_price * 0.90,
  discount_active = true,
  discount_start_date = NOW(),
  discount_end_date = NOW() + INTERVAL '30 days'
WHERE name IN ('DIN44 Premium Battery', 'NS40 Standard Battery', 'NS60 Power Battery', 'D20 Compact Battery');

-- Update effective prices
UPDATE menu_items 
SET effective_price = CASE 
  WHEN discount_active AND discount_price IS NOT NULL THEN discount_price
  ELSE base_price
END
WHERE name IN (
  'DIN44 Premium Battery', 'DIN44H Heavy Duty Battery', 'DIN55 Standard Battery', 'DIN55H Enhanced Battery', 
  'DIN66 Power Battery', 'DIN66H Ultra Battery', 'DIN77 Professional Battery', 'DIN77H Heavy Duty Battery',
  'DIN88 Commercial Battery', 'DIN88H Industrial Battery', 'G31/110 Solar Battery', 'G31/110H Enhanced Solar Battery',
  'G65 Marine Battery', 'NS40 Standard Battery', 'NS60 Power Battery', 'D20 Compact Battery', 'NS50 Enhanced Battery',
  'N50 Premium Battery', 'N70 High Performance Battery'
);
