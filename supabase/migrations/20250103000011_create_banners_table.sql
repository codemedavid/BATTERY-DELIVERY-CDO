-- Create banners table for hero slider
CREATE TABLE IF NOT EXISTS banners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  button_text TEXT DEFAULT 'Learn More',
  button_link TEXT DEFAULT '#',
  background_image_url TEXT,
  background_color TEXT DEFAULT '#1E3A8A',
  text_color TEXT DEFAULT '#FFFFFF',
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for active banners and sorting
CREATE INDEX IF NOT EXISTS idx_banners_active_sort ON banners(is_active, sort_order);

-- Insert default banners
INSERT INTO banners (title, subtitle, description, button_text, button_link, background_color, text_color, sort_order) VALUES
('Reliable Batteries to Keep You Moving', 'Premium Automotive Batteries', 'Fast & Reliable Car Battery Delivery & Installation in CDO, MisOr & Other Areas | 24/7 Service | Dead Battery? We''re just a call away!', 'Shop All Batteries', '#', '#1E3A8A', '#FFFFFF', 1),
('24/7 Emergency Battery Service', 'Never Get Stranded Again', 'Our expert team is available round the clock to deliver and install batteries when you need them most. Fast, reliable, and professional service.', 'Call Now', 'tel:+639916391002', '#DC2626', '#FFFFFF', 2),
('Premium Quality Guaranteed', '6 Months to 1 Year Warranty', 'We only stock the highest quality batteries from trusted manufacturers. Every battery comes with comprehensive warranty coverage.', 'View Products', '#', '#059669', '#FFFFFF', 3),
('Fast Delivery Across CDO', '30 Minutes or Less', 'Experience lightning-fast delivery in CDO City with our professional installation service. Get back on the road in no time.', 'Order Now', '#', '#7C3AED', '#FFFFFF', 4),
('Expert Installation Service', 'Professional & Safe', 'Our certified technicians ensure proper installation and testing. Your safety and satisfaction are our top priorities.', 'Book Service', '#', '#EA580C', '#FFFFFF', 5),
('Wide Range of Battery Types', 'For Every Vehicle', 'From cars to trucks, motorcycles to boats - we have the perfect battery for your vehicle. Browse our extensive catalog.', 'Browse Catalog', '#', '#0891B2', '#FFFFFF', 6),
('Competitive Prices & Deals', 'Best Value in CDO', 'Get premium batteries at unbeatable prices. Regular promotions and bulk discounts available for our valued customers.', 'View Deals', '#', '#BE185D', '#FFFFFF', 7);

-- Enable RLS (Row Level Security)
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to active banners" ON banners
  FOR SELECT USING (is_active = true);

-- Create policies for admin access (you may need to adjust this based on your auth setup)
CREATE POLICY "Allow admin full access to banners" ON banners
  FOR ALL USING (true);
