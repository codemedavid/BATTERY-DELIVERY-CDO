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
  category: string; // car, truck, marine, motorcycle, etc.
  image?: string;
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
  warranty: number; // months
  freeShipping?: boolean;
  inStock?: boolean;
  stockQuantity?: number;
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