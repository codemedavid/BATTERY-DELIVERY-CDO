# Database Setup Instructions

## Adding Battery Products to Database

This document explains how to add the battery products to your Supabase database.

### Migration Files Created

1. **`20250103000000_add_battery_products.sql`** - Comprehensive migration with all battery products
2. **`20250103000001_add_core_battery_products.sql`** - Core products migration (has column issues)
3. **`20250103000003_add_battery_products_final.sql`** - Clean migration with correct columns (has UUID issues)
4. **`20250103000004_add_battery_products_clean.sql`** - Clean migration with auto-generated UUIDs (has foreign key issues)
5. **`20250103000005_add_battery_categories_and_products.sql`** - **RECOMMENDED** - Adds categories first, then products

### Products Added

The migration adds the following battery products with their actual SRP prices:

#### Car Batteries
- **DIN44 Series**: ₱7,634 - ₱8,278
- **DIN55 Series**: ₱8,651 - ₱8,876  
- **DIN66 Series**: ₱10,679 - ₱11,005
- **DIN77 Series**: ₱11,075 - ₱11,365
- **DIN88 Series**: ₱12,145 - ₱12,526
- **D20 Series**: ₱7,121
- **N50 Series**: ₱7,678
- **N70 Series**: ₱8,790

#### Truck Batteries
- **DIN77 Series**: ₱11,075 - ₱11,365
- **DIN88 Series**: ₱12,145 - ₱12,526

#### Marine Batteries
- **G65 Series**: ₱11,547

#### Motorcycle Batteries
- **NS40 Series**: ₱5,393
- **NS60 Series**: ₱7,035
- **NS50 Series**: ₱7,164

#### Solar Batteries
- **G31/110 Series**: ₱13,946 - ₱14,310

### How to Run the Migration

#### Option 1: Using Supabase CLI (Recommended)

```bash
# Navigate to your project directory
cd /Users/ynadonaire/Desktop/template-web-1-3

# Run the migration
supabase db push

# Or run specific migration
supabase db push --file supabase/migrations/20250103000005_add_battery_categories_and_products.sql
```

#### Option 2: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `20250103000005_add_battery_categories_and_products.sql`
4. Paste and run the SQL script

#### Option 3: Using psql

```bash
# Connect to your database
psql "postgresql://postgres:[YOUR-PASSWORD]@[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Run the migration
\i supabase/migrations/20250103000005_add_battery_categories_and_products.sql
```

### Features Included

#### Product Specifications
- **Battery Sizes**: DIN44, DIN55, DIN66, DIN77, DIN88, G31/110, G65, NS40, NS60, D20, NS50, N50, N70
- **Pricing**: Exact SRP prices from your data
- **Categories**: Car, Truck, Marine, Motorcycle, Solar
- **Specifications**: Voltage, Capacity, CCA, Dimensions, Weight
- **Battery Types**: AGM, Lead-Acid, Lithium
- **Warranty**: 6-24 months depending on product

#### Delivery Areas
- **CDO City**: Free delivery, same day
- **MisOr**: +₱200 delivery, next day
- **Dito Areas**: +₱300 delivery, 2-3 days

#### Promotional Features
- **Discount Pricing**: 10% off on selected products
- **Stock Management**: Realistic stock quantities
- **Popular Products**: Marked based on performance tiers

### Image URLs

All products use placeholder images from Pexels:
- **URL**: `https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800`
- **Description**: Circuit board/battery themed images
- **Format**: WebP optimized for fast loading

### Verification

After running the migration, verify the products were added:

```sql
-- Check product count
SELECT COUNT(*) FROM menu_items;

-- Check specific products
SELECT name, base_price, category, brand FROM menu_items ORDER BY base_price;

-- Check delivery areas
SELECT * FROM delivery_areas;
```

### Troubleshooting

#### Common Issues

1. **Migration Fails**: Check if `menu_items` table exists and has required columns
2. **Duplicate Key Error**: Products may already exist, check existing data first
3. **Permission Error**: Ensure your database user has INSERT permissions

#### Rollback

If you need to remove the products:

```sql
-- Remove all added products
DELETE FROM menu_items WHERE id IN (
  'din44-7634', 'din44h-8278', 'din55-8651', 'din55h-8876', 
  'din66-10679', 'din66h-11005', 'din77-11075', 'din77h-11365',
  'din88-12145', 'din88h-12526', 'g31-110-13946', 'g31-110h-14310',
  'g65-11547', 'ns40-5393', 'ns60-7035', 'd20-7121', 'ns50-7164',
  'n50-7678', 'n70-8790'
);
```

### Next Steps

1. **Run the migration** using one of the methods above
2. **Test the website** to ensure products appear correctly
3. **Update product images** with actual battery photos
4. **Add more products** as needed using the same pattern
5. **Configure inventory management** for stock tracking

### Support

If you encounter any issues:
1. Check the Supabase logs for error details
2. Verify your database connection
3. Ensure all required columns exist in the `menu_items` table
4. Contact support if problems persist
