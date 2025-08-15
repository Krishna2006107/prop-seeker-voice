import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Search, MapPin, Filter } from 'lucide-react';
import { SearchFilters } from '@/types/property';
import { useState } from 'react';

interface SearchSectionProps {
  onSearch: (filters: SearchFilters) => void;
  isHero?: boolean;
}

export function SearchSection({ onSearch, isHero = false }: SearchSectionProps) {
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = () => {
    onSearch(filters);
  };

  const containerClass = isHero 
    ? "bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-luxury border" 
    : "bg-background p-6 rounded-xl shadow-card border";

  return (
    <Card className={containerClass}>
      <div className={`grid gap-4 ${isHero ? 'md:grid-cols-5' : 'md:grid-cols-6'}`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search properties..."
            className="pl-10"
            value={filters.keyword || ''}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 z-10" />
          <Input
            placeholder="Location"
            className="pl-10"
            value={filters.location || ''}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>

        <Select onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setFilters({ ...filters, minPrice: parseInt(value) })}>
          <SelectTrigger>
            <SelectValue placeholder="Min Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="100000">$100,000</SelectItem>
            <SelectItem value="250000">$250,000</SelectItem>
            <SelectItem value="500000">$500,000</SelectItem>
            <SelectItem value="750000">$750,000</SelectItem>
            <SelectItem value="1000000">$1,000,000</SelectItem>
            <SelectItem value="2000000">$2,000,000</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setFilters({ ...filters, maxPrice: parseInt(value) })}>
          <SelectTrigger>
            <SelectValue placeholder="Max Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="500000">$500,000</SelectItem>
            <SelectItem value="750000">$750,000</SelectItem>
            <SelectItem value="1000000">$1,000,000</SelectItem>
            <SelectItem value="2000000">$2,000,000</SelectItem>
            <SelectItem value="5000000">$5,000,000</SelectItem>
            <SelectItem value="10000000">$10,000,000+</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant={isHero ? "hero" : "search"}
          className={isHero ? "md:col-span-5 lg:col-span-1" : ""}
          onClick={handleSearch}
        >
          <Filter className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </Card>
  );
}