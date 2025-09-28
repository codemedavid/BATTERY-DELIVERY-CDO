import { BatteryProduct, DeliveryArea } from '../types';

// Sample delivery areas
export const deliveryAreas: DeliveryArea[] = [
  {
    id: 'cdo',
    name: 'Cagayan de Oro City',
    code: 'CDO',
    isFreeDelivery: true,
    deliveryTime: '30 minutes',
    coverage: ['Downtown', 'Uptown', 'Carmen', 'Kauswagan', 'Lapasan', 'Gusa', 'Balulang', 'Macasandig', 'Nazareth', 'Indahag', 'Bulua', 'Consolacion']
  },
  {
    id: 'misor',
    name: 'Misamis Oriental',
    code: 'MisOr',
    isFreeDelivery: false,
    deliveryTime: '1-4 hours (Same Day)',
    deliveryFee: 500,
    coverage: ['El Salvador', 'Opol', 'Tagoloan', 'Villanueva', 'Jasaan', 'Claveria', 'Balingasag', 'Binuangan', 'Manticao', 'Naawan', 'Libertad', 'Sugbongcogon']
  },
  {
    id: 'dito',
    name: 'Other Areas',
    code: 'Dito',
    isFreeDelivery: false,
    deliveryTime: '1-2 Days',
    deliveryFee: 1000,
    coverage: ['Iligan City', 'Cagayan de Oro Outskirts', 'Bukidnon', 'Lanao del Norte']
  }
];

export const enhancedMenuData: BatteryProduct[] = [
  // Car Batteries
  {
    id: 'power-max-12v-60ah',
    name: 'PowerMax 12V 60Ah AGM Battery',
    description: 'Premium AGM battery with superior starting power and deep cycle capability. Perfect for modern vehicles with high electrical demands.',
    basePrice: 189.99,
    category: 'car',
    brand: 'PowerMax',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 60,
    cca: 600,
    dimensions: { length: 10.9, width: 6.8, height: 7.5, unit: 'inches' },
    weight: 38.5,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 24,
    warrantyType: 'premium',
    freeShipping: true,
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 127,
    deliveryAreas: deliveryAreas,
    installationRequired: false,
    compatibilities: [
      { id: '1', make: 'Honda', model: 'Civic', year: '2016-2023' },
      { id: '2', make: 'Toyota', model: 'Camry', year: '2018-2023' },
      { id: '3', make: 'Ford', model: 'Focus', year: '2015-2020' }
    ]
  },
  {
    id: 'power-max-12v-75ah',
    name: 'PowerMax 12V 75Ah Premium Battery',
    description: 'High-capacity AGM battery designed for luxury vehicles and high-performance applications. Features advanced plate technology for extended life.',
    basePrice: 249.99,
    category: 'car',
    brand: 'PowerMax',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 75,
    cca: 750,
    dimensions: { length: 12.0, width: 6.8, height: 7.5, unit: 'inches' },
    weight: 45.2,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 24,
    warrantyType: 'premium',
    freeShipping: true,
    inStock: true,
    stockQuantity: 8,
    rating: 4.9,
    reviewCount: 89,
    deliveryAreas: deliveryAreas,
    installationRequired: false,
    compatibilities: [
      { id: '4', make: 'BMW', model: '3 Series', year: '2015-2023' },
      { id: '5', make: 'Mercedes-Benz', model: 'C-Class', year: '2014-2023' },
      { id: '6', make: 'Audi', model: 'A4', year: '2016-2023' }
    ]
  },
  {
    id: 'eco-power-12v-50ah',
    name: 'EcoPower 12V 50Ah Lead-Acid Battery',
    description: 'Reliable lead-acid battery with excellent value for money. Perfect for everyday vehicles and budget-conscious customers.',
    basePrice: 129.99,
    category: 'car',
    brand: 'EcoPower',
    popular: false,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 50,
    cca: 500,
    dimensions: { length: 9.8, width: 6.8, height: 7.5, unit: 'inches' },
    weight: 32.1,
    terminalType: 'top-post',
    batteryType: 'lead-acid',
    warranty: 12,
    warrantyType: 'standard',
    freeShipping: true,
    inStock: true,
    stockQuantity: 25,
    rating: 4.2,
    reviewCount: 203,
    deliveryAreas: deliveryAreas,
    installationRequired: false,
    compatibilities: [
      { id: '7', make: 'Toyota', model: 'Vios', year: '2013-2023' },
      { id: '8', make: 'Honda', model: 'City', year: '2014-2023' },
      { id: '9', make: 'Nissan', model: 'Almera', year: '2012-2023' }
    ]
  },

  // Truck Batteries
  {
    id: 'heavy-duty-12v-100ah',
    name: 'Heavy Duty 12V 100Ah Deep Cycle Battery',
    description: 'Heavy-duty battery designed for commercial vehicles, trucks, and RVs. Features thick plates for maximum durability and deep cycle capability.',
    basePrice: 399.99,
    category: 'truck',
    brand: 'HeavyDuty',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 100,
    cca: 900,
    dimensions: { length: 13.0, width: 6.8, height: 8.5, unit: 'inches' },
    weight: 65.0,
    terminalType: 'top-post',
    batteryType: 'lead-acid',
    warranty: 18,
    warrantyType: 'premium',
    freeShipping: false,
    inStock: true,
    stockQuantity: 5,
    rating: 4.7,
    reviewCount: 45,
    deliveryAreas: deliveryAreas,
    installationRequired: true,
    installationFee: 500,
    compatibilities: [
      { id: '10', make: 'Isuzu', model: 'NPR', year: '2010-2023' },
      { id: '11', make: 'Hino', model: '300 Series', year: '2012-2023' },
      { id: '12', make: 'Mitsubishi', model: 'Fuso', year: '2015-2023' }
    ]
  },

  // Marine Batteries
  {
    id: 'marine-pro-12v-80ah',
    name: 'Marine Pro 12V 80Ah Deep Cycle Battery',
    description: 'Specialized marine battery with vibration resistance and deep cycle capability. Perfect for boats, yachts, and marine applications.',
    basePrice: 329.99,
    category: 'marine',
    brand: 'MarinePro',
    popular: false,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 80,
    cca: 700,
    dimensions: { length: 12.0, width: 6.8, height: 8.0, unit: 'inches' },
    weight: 52.3,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 24,
    warrantyType: 'premium',
    freeShipping: false,
    inStock: true,
    stockQuantity: 3,
    rating: 4.6,
    reviewCount: 28,
    deliveryAreas: deliveryAreas,
    installationRequired: true,
    installationFee: 300,
    compatibilities: [
      { id: '13', make: 'Yamaha', model: 'Outboard', year: '2015-2023' },
      { id: '14', make: 'Mercury', model: 'Outboard', year: '2016-2023' }
    ]
  },

  // Motorcycle Batteries
  {
    id: 'bike-power-12v-8ah',
    name: 'BikePower 12V 8Ah AGM Battery',
    description: 'Compact AGM battery designed for motorcycles, scooters, and ATVs. Features maintenance-free design and excellent cold cranking performance.',
    basePrice: 89.99,
    category: 'motorcycle',
    brand: 'BikePower',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 8,
    cca: 120,
    dimensions: { length: 5.9, width: 3.4, height: 5.9, unit: 'inches' },
    weight: 6.8,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 12,
    warrantyType: 'standard',
    freeShipping: true,
    inStock: true,
    stockQuantity: 20,
    rating: 4.4,
    reviewCount: 156,
    deliveryAreas: deliveryAreas,
    installationRequired: false,
    compatibilities: [
      { id: '15', make: 'Honda', model: 'Wave', year: '2010-2023' },
      { id: '16', make: 'Yamaha', model: 'Mio', year: '2012-2023' },
      { id: '17', make: 'Suzuki', model: 'Raider', year: '2015-2023' }
    ]
  },

  // Solar Batteries
  {
    id: 'solar-max-12v-100ah',
    name: 'SolarMax 12V 100Ah Lithium Battery',
    description: 'High-performance lithium battery designed for solar power systems, off-grid applications, and renewable energy storage.',
    basePrice: 899.99,
    category: 'solar',
    brand: 'SolarMax',
    popular: false,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 100,
    cca: 0, // Not applicable for lithium batteries
    dimensions: { length: 12.0, width: 6.8, height: 8.0, unit: 'inches' },
    weight: 28.5,
    terminalType: 'top-post',
    batteryType: 'lithium',
    warranty: 60,
    warrantyType: 'premium',
    freeShipping: false,
    inStock: true,
    stockQuantity: 2,
    rating: 4.9,
    reviewCount: 12,
    deliveryAreas: deliveryAreas,
    installationRequired: true,
    installationFee: 800,
    compatibilities: []
  }
];

export const categories = [
  { id: 'car', name: 'Car Batteries', icon: '🚗' },
  { id: 'truck', name: 'Truck Batteries', icon: '🚛' },
  { id: 'marine', name: 'Marine Batteries', icon: '⛵' },
  { id: 'motorcycle', name: 'Motorcycle Batteries', icon: '🏍️' },
  { id: 'solar', name: 'Solar Batteries', icon: '☀️' },
  { id: 'accessories', name: 'Accessories', icon: '🔧' },
  { id: 'warranty', name: 'Warranty & Support', icon: '🛡️' }
];
