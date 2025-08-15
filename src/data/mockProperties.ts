import { Property } from '@/types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Modern Villa',
    description: 'Stunning contemporary villa with panoramic city views, premium finishes throughout, and state-of-the-art smart home technology. Perfect for entertaining with an open-concept design.',
    price: 2850000,
    location: 'Beverly Hills, CA',
    propertyType: 'house',
    bedrooms: 5,
    bathrooms: 4,
    size: 4200,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop'
    ],
    amenities: ['Pool', 'Garage', 'Garden', 'Smart Home', 'Security System', 'Wine Cellar'],
    featured: true,
    status: 'available',
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah@estatehub.com',
      phone: '+1 (555) 123-4567'
    },
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Downtown Luxury Penthouse',
    description: 'Exquisite penthouse apartment in the heart of downtown with floor-to-ceiling windows, premium amenities, and breathtaking skyline views from every room.',
    price: 1950000,
    location: 'Manhattan, NY',
    propertyType: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    size: 2800,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'
    ],
    amenities: ['Concierge', 'Gym', 'Rooftop Terrace', 'Parking', 'City Views'],
    featured: true,
    status: 'available',
    agent: {
      name: 'Michael Chen',
      email: 'michael@estatehub.com',
      phone: '+1 (555) 234-5678'
    },
    createdAt: '2024-01-12'
  },
  {
    id: '3',
    title: 'Charming Victorian Home',
    description: 'Beautifully restored Victorian home with original hardwood floors, ornate details, and modern updates. Located in a quiet residential neighborhood.',
    price: 875000,
    location: 'San Francisco, CA',
    propertyType: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: 3200,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    amenities: ['Fireplace', 'Garden', 'Parking', 'Original Features', 'Updated Kitchen'],
    featured: false,
    status: 'available',
    agent: {
      name: 'Emily Rodriguez',
      email: 'emily@estatehub.com',
      phone: '+1 (555) 345-6789'
    },
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Modern Waterfront Condo',
    description: 'Sleek waterfront condominium with stunning ocean views, premium finishes, and access to resort-style amenities. Perfect for luxury living.',
    price: 1250000,
    location: 'Miami Beach, FL',
    propertyType: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    size: 1800,
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524813686514-32c0ae0fe8b5?w=800&h=600&fit=crop'
    ],
    amenities: ['Ocean Views', 'Pool', 'Spa', 'Beach Access', 'Valet Parking'],
    featured: false,
    status: 'available',
    agent: {
      name: 'David Martinez',
      email: 'david@estatehub.com',
      phone: '+1 (555) 456-7890'
    },
    createdAt: '2024-01-08'
  },
  {
    id: '5',
    title: 'Elegant Townhouse',
    description: 'Sophisticated townhouse in prestigious neighborhood featuring high ceilings, marble countertops, and private patio. Move-in ready.',
    price: 650000,
    location: 'Boston, MA',
    propertyType: 'townhouse',
    bedrooms: 3,
    bathrooms: 2,
    size: 2400,
    images: [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909918-d7415a6eda7a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop'
    ],
    amenities: ['Patio', 'Fireplace', 'Garage', 'Marble Finishes', 'Walk-in Closets'],
    featured: false,
    status: 'available',
    agent: {
      name: 'Jennifer Kim',
      email: 'jennifer@estatehub.com',
      phone: '+1 (555) 567-8901'
    },
    createdAt: '2024-01-05'
  },
  {
    id: '6',
    title: 'Commercial Office Space',
    description: 'Premium commercial office space in business district with modern amenities, parking, and flexible floor plans. Perfect for growing businesses.',
    price: 450000,
    location: 'Austin, TX',
    propertyType: 'commercial',
    bedrooms: 0,
    bathrooms: 4,
    size: 5500,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    ],
    amenities: ['Parking', 'Conference Rooms', 'Kitchen', 'High-Speed Internet', 'Security'],
    featured: false,
    status: 'available',
    agent: {
      name: 'Robert Thompson',
      email: 'robert@estatehub.com',
      phone: '+1 (555) 678-9012'
    },
    createdAt: '2024-01-03'
  },
  {
    id: '7',
    title: 'Lakefront Cabin Retreat',
    description: 'Peaceful lakefront cabin with stunning water views, private dock, and rustic charm. Perfect for a weekend getaway or year-round living.',
    price: 425000,
    location: 'Lake Tahoe, CA',
    propertyType: 'house',
    bedrooms: 2,
    bathrooms: 1,
    size: 1200,
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518588283884-25da2ae5f4a6?w=800&h=600&fit=crop'
    ],
    amenities: ['Lake Access', 'Dock', 'Fireplace', 'Mountain Views', 'Parking'],
    featured: true,
    status: 'available',
    agent: {
      name: 'Lisa Anderson',
      email: 'lisa@estatehub.com',
      phone: '+1 (555) 789-0123'
    },
    createdAt: '2024-01-20'
  },
  {
    id: '8',
    title: 'Urban Loft Studio',
    description: 'Trendy loft studio in arts district with exposed brick, high ceilings, and industrial features. Perfect for creative professionals.',
    price: 320000,
    location: 'Brooklyn, NY',
    propertyType: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    size: 850,
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop'
    ],
    amenities: ['Exposed Brick', 'High Ceilings', 'Industrial Style', 'Natural Light'],
    featured: false,
    status: 'available',
    agent: {
      name: 'Kevin Park',
      email: 'kevin@estatehub.com',
      phone: '+1 (555) 890-1234'
    },
    createdAt: '2024-01-18'
  },
  {
    id: '9',
    title: 'Suburban Family Home',
    description: 'Spacious family home in quiet suburb with large backyard, updated kitchen, and excellent school district. Perfect for growing families.',
    price: 485000,
    location: 'Plano, TX',
    propertyType: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop'
    ],
    amenities: ['Large Backyard', 'Updated Kitchen', 'Garage', 'Good Schools', 'Quiet Neighborhood'],
    featured: false,
    status: 'available',
    agent: {
      name: 'Maria Gonzalez',
      email: 'maria@estatehub.com',
      phone: '+1 (555) 901-2345'
    },
    createdAt: '2024-01-16'
  },
  {
    id: '10',
    title: 'Luxury High-Rise Condo',
    description: 'Prestigious high-rise condominium with panoramic city views, luxury amenities, and premium finishes throughout.',
    price: 1800000,
    location: 'Chicago, IL',
    propertyType: 'condo',
    bedrooms: 3,
    bathrooms: 3,
    size: 2200,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=800&h=600&fit=crop'
    ],
    amenities: ['City Views', 'Concierge', 'Fitness Center', 'Pool', 'Valet Parking', 'Balcony'],
    featured: true,
    status: 'available',
    agent: {
      name: 'James Wilson',
      email: 'james@estatehub.com',
      phone: '+1 (555) 012-3456'
    },
    createdAt: '2024-01-22'
  },
  {
    id: '11',
    title: 'Historic Brownstone',
    description: 'Beautifully preserved historic brownstone with original details, modern amenities, and prime location in historic district.',
    price: 1150000,
    location: 'Philadelphia, PA',
    propertyType: 'townhouse',
    bedrooms: 3,
    bathrooms: 2,
    size: 2000,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&h=600&fit=crop'
    ],
    amenities: ['Historic Features', 'Updated Systems', 'Original Hardwood', 'Garden', 'Prime Location'],
    featured: false,
    status: 'available',
    agent: {
      name: 'Angela Davis',
      email: 'angela@estatehub.com',
      phone: '+1 (555) 123-4567'
    },
    createdAt: '2024-01-14'
  },
  {
    id: '12',
    title: 'Beachfront Villa',
    description: 'Stunning beachfront villa with direct beach access, infinity pool, and breathtaking ocean views. Ultimate luxury living.',
    price: 3200000,
    location: 'Malibu, CA',
    propertyType: 'house',
    bedrooms: 6,
    bathrooms: 5,
    size: 5200,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    amenities: ['Beach Access', 'Infinity Pool', 'Ocean Views', 'Private Beach', 'Luxury Finishes', 'Guest House'],
    featured: true,
    status: 'available',
    agent: {
      name: 'Christopher Lee',
      email: 'chris@estatehub.com',
      phone: '+1 (555) 234-5678'
    },
    createdAt: '2024-01-25'
  }
];