import { Property } from '@/types/property';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-smooth cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-64 w-full object-cover transition-smooth group-hover:scale-105"
          onClick={handleViewDetails}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.featured && (
            <Badge variant="secondary" className="bg-featured text-featured-foreground">
              Featured
            </Badge>
          )}
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {property.status}
          </Badge>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full transition-smooth ${
            isFavorited
              ? 'bg-accent text-accent-foreground'
              : 'bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
      </div>

      <CardContent className="p-6" onClick={handleViewDetails}>
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-smooth">
              {property.title}
            </h3>
            <p className="text-2xl font-bold text-accent">{formatPrice(property.price)}</p>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {property.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {property.propertyType !== 'commercial' && (
              <>
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>{property.bedrooms} bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span>{property.bathrooms} bath</span>
                </div>
              </>
            )}
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              <span>{property.size.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-3 w-full">
          <Button
            variant="outline"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              // Handle contact action
            }}
          >
            Contact Agent
          </Button>
          <Button
            variant="contact"
            className="flex-1"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}