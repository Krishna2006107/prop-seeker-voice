import { useParams, useNavigate } from 'react-router-dom';
import { mockProperties } from '@/data/mockProperties';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Share, 
  Calendar,
  User,
  Phone,
  Mail
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFavorited, setIsFavorited] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Property Not Found</h1>
          <Button onClick={() => navigate('/')} variant="hero">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest. The agent will contact you soon.",
    });

    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleBookViewing = () => {
    toast({
      title: "Viewing Requested",
      description: "We'll contact you shortly to schedule your viewing.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Button>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorited(!isFavorited)}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current text-accent' : ''}`} />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                        <img
                          src={image}
                          alt={`${property.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              
              <div className="absolute top-4 left-4 flex gap-2">
                {property.featured && (
                  <Badge className="bg-featured text-featured-foreground">
                    Featured
                  </Badge>
                )}
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                  {property.status}
                </Badge>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-primary mb-2">{property.title}</h1>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="text-lg">{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-accent">{formatPrice(property.price)}</div>
                    <div className="text-sm text-muted-foreground">
                      ${Math.round(property.price / property.size)} per sq ft
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-lg">
                  {property.propertyType !== 'commercial' && (
                    <>
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-muted-foreground" />
                        <span>{property.bedrooms} Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5 text-muted-foreground" />
                        <span>{property.bathrooms} Bathrooms</span>
                      </div>
                    </>
                  )}
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 text-muted-foreground" />
                    <span>{property.size.toLocaleString()} sq ft</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <Button variant="hero" className="w-full" onClick={handleBookViewing}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Viewing
                </Button>
                <Button 
                  variant="contact" 
                  className="w-full"
                  onClick={() => window.open(`tel:${property.agent.phone}`, '_self')}
                >
                  Call Agent
                </Button>
              </CardContent>
            </Card>

            {/* Agent Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Property Agent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                  <p className="text-muted-foreground">Licensed Real Estate Agent</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96">
                  <iframe
                    src="http://localhost:5678/form/6a3bc9b4-7cd8-4e0d-bf61-d241e3e077ef"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', borderRadius: '8px' }}
                    title="Property Inquiry Form"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}