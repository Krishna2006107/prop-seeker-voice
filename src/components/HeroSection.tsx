import { SearchSection } from './SearchSection';
import { SearchFilters } from '@/types/property';
import heroImage from '@/assets/hero-image.jpg';

interface HeroSectionProps {
  onSearch: (filters: SearchFilters) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Find Your
              <span className="bg-gradient-accent bg-clip-text text-transparent"> Dream </span>
              Property
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover luxury homes, apartments, and commercial properties with our premium real estate platform
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-5xl mx-auto">
            <SearchSection onSearch={onSearch} isHero={true} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-white/80">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1000+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}