import { BatteryProduct, DeliveryArea } from '../types';

// Sample delivery areas
export const deliveryAreas: DeliveryArea[] = [
  {
    id: 'cdo',
    name: 'Cagayan de Oro City',
    code: 'CDO',
    isFreeDelivery: true,
    deliveryTime: 'Same Day',
    coverage: ['Downtown', 'Uptown', 'Carmen', 'Kauswagan', 'Lapasan', 'Gusa', 'Balulang', 'Macasandig']
  },
  {
    id: 'misor',
    name: 'Misamis Oriental',
    code: 'MisOr',
    isFreeDelivery: false,
    deliveryTime: 'Next Day',
    deliveryFee: 200,
    coverage: ['El Salvador', 'Opol', 'Tagoloan', 'Villanueva', 'Jasaan', 'Claveria', 'Balingasag', 'Binuangan']
  },
  {
    id: 'dito',
    name: 'Dito Areas',
    code: 'Dito',
    isFreeDelivery: false,
    deliveryTime: '2-3 Days',
    deliveryFee: 300,
    coverage: ['Iligan City', 'Cagayan de Oro Outskirts', 'Bukidnon', 'Lanao del Norte']
  }
];

export const menuData: BatteryProduct[] = [
  // Car Batteries
  {
    id: 'power-max-12v-60ah',
    name: 'PowerMax 12V 60Ah AGM Battery',
    description: 'Premium AGM battery with superior starting power and deep cycle capability. Perfect for modern vehicles with high electrical demands.',
    basePrice: 189.99,
    category: 'car',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 60,
    cca: 600,
    dimensions: {
      length: 10.9,
      width: 6.8,
      height: 7.5,
      unit: 'inches'
    },
    weight: 38.5,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 24,
    freeShipping: true,
    inStock: true,
    stockQuantity: 15,
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
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 75,
    cca: 750,
    dimensions: {
      length: 12.4,
      width: 6.8,
      height: 7.5,
      unit: 'inches'
    },
    weight: 45.2,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 36,
    freeShipping: true,
    inStock: true,
    stockQuantity: 8,
    discountPrice: 219.99,
    discountActive: true,
    effectivePrice: 219.99,
    isOnDiscount: true
  },
  {
    id: 'power-max-12v-50ah-lithium',
    name: 'PowerMax 12V 50Ah Lithium Battery',
    description: 'Ultra-lightweight lithium battery with exceptional power density. Perfect for performance vehicles and applications requiring maximum power-to-weight ratio.',
    basePrice: 399.99,
    category: 'car',
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 50,
    cca: 800,
    dimensions: {
      length: 10.9,
      width: 6.8,
      height: 7.5,
      unit: 'inches'
    },
    weight: 18.5,
    terminalType: 'top-post',
    batteryType: 'lithium',
    warranty: 60,
    freeShipping: true,
    inStock: true,
    stockQuantity: 5
  },

  // Truck Batteries
  {
    id: 'power-max-12v-100ah-heavy-duty',
    name: 'PowerMax 12V 100Ah Heavy Duty Battery',
    description: 'Industrial-strength battery designed for commercial trucks and heavy-duty applications. Built to withstand extreme conditions and high vibration.',
    basePrice: 329.99,
    category: 'truck',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 100,
    cca: 950,
    dimensions: {
      length: 13.0,
      width: 6.8,
      height: 9.4,
      unit: 'inches'
    },
    weight: 65.0,
    terminalType: 'both',
    batteryType: 'agm',
    warranty: 24,
    freeShipping: true,
    inStock: true,
    stockQuantity: 12,
    compatibilities: [
      { id: '4', make: 'Ford', model: 'F-150', year: '2015-2023' },
      { id: '5', make: 'Chevrolet', model: 'Silverado', year: '2014-2023' },
      { id: '6', make: 'Ram', model: '1500', year: '2013-2023' }
    ]
  },
  {
    id: 'power-max-12v-80ah-commercial',
    name: 'PowerMax 12V 80Ah Commercial Battery',
    description: 'Reliable commercial-grade battery for delivery trucks and fleet vehicles. Optimized for frequent starting and deep cycling applications.',
    basePrice: 279.99,
    category: 'truck',
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 80,
    cca: 850,
    dimensions: {
      length: 12.4,
      width: 6.8,
      height: 9.4,
      unit: 'inches'
    },
    weight: 52.0,
    terminalType: 'top-post',
    batteryType: 'lead-acid',
    warranty: 18,
    freeShipping: true,
    inStock: true,
    stockQuantity: 20
  },

  // Marine Batteries
  {
    id: 'power-max-12v-100ah-marine',
    name: 'PowerMax 12V 100Ah Marine Deep Cycle',
    description: 'Specialized marine battery designed for boats and watercraft. Features corrosion-resistant terminals and vibration-resistant construction.',
    basePrice: 289.99,
    category: 'marine',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 100,
    cca: 800,
    dimensions: {
      length: 13.0,
      width: 6.8,
      height: 9.4,
      unit: 'inches'
    },
    weight: 58.0,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 24,
    freeShipping: true,
    inStock: true,
    stockQuantity: 10
  },
  {
    id: 'power-max-12v-75ah-marine-gel',
    name: 'PowerMax 12V 75Ah Marine Gel Battery',
    description: 'Gel cell marine battery with superior deep cycle performance. Ideal for trolling motors and marine electronics.',
    basePrice: 229.99,
    category: 'marine',
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 75,
    cca: 700,
    dimensions: {
      length: 12.4,
      width: 6.8,
      height: 9.4,
      unit: 'inches'
    },
    weight: 48.0,
    terminalType: 'top-post',
    batteryType: 'gel',
    warranty: 18,
    freeShipping: true,
    inStock: true,
    stockQuantity: 7
  },

  // Motorcycle Batteries
  {
    id: 'power-max-12v-14ah-motorcycle',
    name: 'PowerMax 12V 14Ah Motorcycle Battery',
    description: 'Compact AGM battery designed for motorcycles and ATVs. Features spill-proof design and superior vibration resistance.',
    basePrice: 89.99,
    category: 'motorcycle',
    popular: true,
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 14,
    cca: 200,
    dimensions: {
      length: 6.0,
      width: 3.4,
      height: 5.9,
      unit: 'inches'
    },
    weight: 8.5,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 12,
    freeShipping: false,
    inStock: true,
    stockQuantity: 25
  },
  {
    id: 'power-max-12v-18ah-sport-bike',
    name: 'PowerMax 12V 18Ah Sport Bike Battery',
    description: 'High-performance battery for sport motorcycles and high-displacement bikes. Optimized for quick starting and reliable power delivery.',
    basePrice: 119.99,
    category: 'motorcycle',
    available: true,
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    voltage: 12,
    capacity: 18,
    cca: 280,
    dimensions: {
      length: 6.0,
      width: 3.4,
      height: 6.9,
      unit: 'inches'
    },
    weight: 11.2,
    terminalType: 'top-post',
    batteryType: 'agm',
    warranty: 12,
    freeShipping: false,
    inStock: true,
    stockQuantity: 18
  }
];

export const categories = [
  { id: 'car', name: 'Car Batteries', icon: '🚗' },
  { id: 'truck', name: 'Truck Batteries', icon: '🚛' },
  { id: 'marine', name: 'Marine Batteries', icon: '⛵' },
  { id: 'motorcycle', name: 'Motorcycle Batteries', icon: '🏍️' },
  { id: 'accessories', name: 'Accessories', icon: '🔧' },
  { id: 'warranty', name: 'Warranty & Support', icon: '🛡️' }
];