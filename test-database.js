// Simple script to test database connection and check if items exist
const { createClient } = require('@supabase/supabase-js');

// You'll need to replace these with your actual Supabase credentials
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testDatabase() {
  try {
    console.log('🔍 Testing database connection...');
    
    // Test categories
    console.log('\n📂 Checking categories...');
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order');
    
    if (catError) {
      console.error('❌ Categories error:', catError);
    } else {
      console.log('✅ Categories found:', categories?.length || 0);
      categories?.forEach(cat => {
        console.log(`   - ${cat.id}: ${cat.name} ${cat.icon}`);
      });
    }
    
    // Test menu items
    console.log('\n🔋 Checking menu items...');
    const { data: items, error: itemsError } = await supabase
      .from('menu_items')
      .select('*')
      .order('created_at');
    
    if (itemsError) {
      console.error('❌ Menu items error:', itemsError);
    } else {
      console.log('✅ Menu items found:', items?.length || 0);
      items?.forEach(item => {
        console.log(`   - ${item.name}: ₱${item.base_price} (${item.category})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testDatabase();
