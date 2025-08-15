import { useState, useMemo } from 'react';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchSection } from '@/components/SearchSection';
import { mockProperties } from '@/data/mockProperties';
import { SearchFilters } from '@/types/property';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Grid, List, SlidersHorizontal } from 'lucide-react';

export default function Properties() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties];

    // Apply search filters
    if (searchFilters.keyword) {
      const keyword = searchFilters.keyword.toLowerCase();
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(keyword) ||
        property.description.toLowerCase().includes(keyword) ||
        property.location.toLowerCase().includes(keyword)
      );
    }

    if (searchFilters.location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(searchFilters.location!.toLowerCase())
      );
    }

    if (searchFilters.propertyType) {
      filtered = filtered.filter(property =>
        property.propertyType === searchFilters.propertyType
      );
    }

    if (searchFilters.minPrice) {
      filtered = filtered.filter(property => property.price >= searchFilters.minPrice!);
    }

    if (searchFilters.maxPrice) {
      filtered = filtered.filter(property => property.price <= searchFilters.maxPrice!);
    }

    if (searchFilters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms >= searchFilters.bedrooms!);
    }

    if (searchFilters.bathrooms) {
      filtered = filtered.filter(property => property.bathrooms >= searchFilters.bathrooms!);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [searchFilters, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Properties</h1>
          <p className="text-xl text-muted-foreground">
            Discover your perfect property from our curated collection
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <SearchSection onSearch={setSearchFilters} />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {filteredProperties.length} properties found
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">No Properties Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any properties matching your search criteria. 
                Try adjusting your filters or search terms.
              </p>
              <Button 
                variant="hero" 
                onClick={() => setSearchFilters({})}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}