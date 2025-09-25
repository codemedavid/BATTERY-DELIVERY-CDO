-- Update delivery areas with correct delivery times
-- CDO City: 30 minutes more or less
-- MisOr: 1-4 hours same day

-- First, let's check if delivery_areas table exists and what's in it
SELECT 'Current delivery areas:' as info;
SELECT * FROM delivery_areas ORDER BY code;

-- Update or insert delivery areas with correct timing
INSERT INTO delivery_areas (id, name, code, is_free_delivery, delivery_time, delivery_fee, coverage) VALUES
('cdo', 'Cagayan de Oro City', 'CDO', true, '30 minutes', 0, ARRAY['Downtown', 'Uptown', 'Carmen', 'Kauswagan', 'Lapasan', 'Gusa', 'Balulang', 'Macasandig', 'Nazareth', 'Indahag', 'Bulua', 'Consolacion']),
('misor', 'Misamis Oriental', 'MisOr', false, '1-4 hours (Same Day)', 200, ARRAY['El Salvador', 'Opol', 'Tagoloan', 'Villanueva', 'Jasaan', 'Claveria', 'Balingasag', 'Binuangan', 'Manticao', 'Naawan', 'Libertad', 'Sugbongcogon']),
('dito', 'Dito Areas', 'Dito', false, '2-3 Days', 300, ARRAY['Iligan City', 'Cagayan de Oro Outskirts', 'Bukidnon', 'Lanao del Norte', 'Camiguin', 'Lanao del Sur'])
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  code = EXCLUDED.code,
  is_free_delivery = EXCLUDED.is_free_delivery,
  delivery_time = EXCLUDED.delivery_time,
  delivery_fee = EXCLUDED.delivery_fee,
  coverage = EXCLUDED.coverage;

-- Show final delivery areas
SELECT 'Updated delivery areas:' as info;
SELECT id, name, code, is_free_delivery, delivery_time, delivery_fee FROM delivery_areas ORDER BY code;
