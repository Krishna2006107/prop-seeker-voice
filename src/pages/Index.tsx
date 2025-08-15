import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchFilters } from '@/types/property';
import { mockProperties } from '@/data/mockProperties';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Users, Clock } from 'lucide-react';

const Index = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});

  const featuredProperties = mockProperties.filter(property => property.featured).slice(0, 3);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    // In a real app, this would navigate to properties page with filters
    window.location.href = '/properties';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Featured Properties */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Properties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/properties">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose EstateHub</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the best real estate experience with premium service and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-card hover:shadow-card-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Carefully curated properties that meet our high standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-card hover:shadow-card-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-luxury-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  Safe and secure property transactions with full legal support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-card hover:shadow-card-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Expert Agents</h3>
                <p className="text-muted-foreground">
                  Professional agents with years of experience in the market
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-card hover:shadow-card-hover transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-luxury-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Quick Process</h3>
                <p className="text-muted-foreground">
                  Streamlined processes for faster property searches and bookings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of satisfied customers who found their perfect home with EstateHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="text-xl font-bold">EstateHub</span>
              </div>
              <p className="text-primary-foreground/80">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/properties" className="hover:text-primary-foreground transition-colors">Properties</Link></li>
                <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
                <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Property Search</li>
                <li>Property Valuation</li>
                <li>Investment Advice</li>
                <li>Legal Support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+1 (555) 123-4567</li>
                <li>info@estatehub.com</li>
                <li>123 Real Estate Ave</li>
                <li>City, State 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 EstateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
