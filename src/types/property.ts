export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  size: number; // in sq ft
  images: string[];
  amenities: string[];
  featured: boolean;
  status: 'available' | 'pending' | 'sold';
  agent: {
    name: string;
    email: string;
    phone: string;
  };
  createdAt: string;
}

export interface SearchFilters {
  keyword?: string;
  location?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId: string;
}