// Battery Product Types
export interface BatterySpec {
  id: string;
  name: string;
  value: string;
  unit?: string;
}

export interface Compatibility {
  id: string;
  make: string;
  model: string;
  year: string;
  engine?: string;
}

export interface BatteryProduct {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string; // car, truck, marine, motorcycle, solar, etc.
  brand?: string; // Brand name
  image?: string;
  images?: string[]; // Multiple images
  popular?: boolean;
  available?: boolean;
  
  // Battery Specifications
  voltage: number; // 12V, 6V, etc.
  capacity: number; // Ah (Amp Hours)
  cca: number; // Cold Cranking Amps
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: 'inches' | 'mm';
  };
  weight: number; // in pounds or kg
  terminalType: 'top-post' | 'side-post' | 'both';
  batteryType: 'lead-acid' | 'agm' | 'gel' | 'lithium';
  
  // Compatibility
  compatibilities?: Compatibility[];
  specifications?: BatterySpec[];
  
  // Discount pricing fields
  discountPrice?: number;
  discountStartDate?: string;
  discountEndDate?: string;
  discountActive?: boolean;
  // Computed effective price (calculated in the app)
  effectivePrice?: number;
  isOnDiscount?: boolean;
  
  // Warranty and shipping
  warranty: number; // months (6-12)
  warrantyType: 'standard' | 'premium'; // 6 months vs 1 year
  freeShipping?: boolean;
  inStock?: boolean;
  stockQuantity?: number;
  
  // Reviews and ratings
  rating?: number; // 1-5 stars
  reviewCount?: number;
  
  // Delivery areas
  deliveryAreas: DeliveryArea[]; // CDO, MisOr, Dito
  installationRequired?: boolean;
  installationFee?: number;
}

export interface CartItem extends BatteryProduct {
  quantity: number;
  totalPrice: number;
}

export interface OrderData {
  items: CartItem[];
  customerName: string;
  contactNumber: string;
  email?: string;
  serviceType: 'pickup' | 'delivery' | 'installation';
  address?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  // Installation specific fields
  installationRequired?: boolean;
  installationDate?: string;
  vehicleInfo?: {
    make: string;
    model: string;
    year: string;
    engine?: string;
  };
  paymentMethod: 'credit-card' | 'paypal' | 'bank-transfer' | 'cash';
  referenceNumber?: string;
  total: number;
  notes?: string;
  // Battery store specific
  coreCharge?: number;
  installationFee?: number;
}

export type PaymentMethod = 'credit-card' | 'paypal' | 'bank-transfer' | 'cash';
export type ServiceType = 'pickup' | 'delivery' | 'installation';
export type VehicleType = 'car' | 'truck' | 'marine' | 'motorcycle' | 'rv' | 'atv';

// Site Settings Types
export interface SiteSetting {
  id: string;
  value: string;
  type: 'text' | 'image' | 'boolean' | 'number';
  description?: string;
  updated_at: string;
}

export interface SiteSettings {
  site_name: string;
  site_logo: string;
  site_description: string;
  currency: string;
  currency_code: string;
}

// Delivery and Service Types
export interface DeliveryArea {
  id: string;
  name: string;
  code: string; // 'CDO', 'MisOr', 'Dito'
  isFreeDelivery: boolean;
  deliveryTime: string; // 'Same Day', 'Next Day', '2-3 Days'
  deliveryFee?: number;
  coverage: string[]; // Specific areas covered
}

export interface ProductReview {
  id: string;
  productId: string;
  customerName: string;
  email: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  verified: boolean;
  createdAt: string;
  helpful: number;
}

export interface ServiceBooking {
  id: string;
  serviceType: 'roadside-rescue' | 'battery-health-check';
  customerName: string;
  contactNumber: string;
  email: string;
  vehicleInfo: {
    make: string;
    model: string;
    year: string;
    plateNumber?: string;
  };
  location: {
    address: string;
    area: string; // CDO, MisOr, Dito
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  preferredTime: string;
  emergency?: boolean;
  notes?: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
  estimatedArrival?: string;
  technician?: string;
}

export interface Promotion {
  id: string;
  name: string;
  description: string;
  type: 'percentage' | 'fixed' | 'free-shipping' | 'bundle';
  value: number;
  minOrderAmount?: number;
  applicableProducts?: string[]; // Product IDs
  applicableCategories?: string[]; // Category IDs
  startDate: string;
  endDate: string;
  isActive: boolean;
  usageLimit?: number;
  usedCount: number;
  code?: string; // For coupon codes
}

export interface OrderTracking {
  orderId: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'shipped' | 'out-for-delivery' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
  updates: TrackingUpdate[];
}

export interface TrackingUpdate {
  timestamp: string;
  status: string;
  location?: string;
  description: string;
}

// Banner Types for Hero Slider
export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  button_text: string;
  button_link: string;
  background_image_url?: string;
  background_color: string;
  text_color: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}