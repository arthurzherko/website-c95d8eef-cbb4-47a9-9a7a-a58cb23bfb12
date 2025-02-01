import { ModeToggle } from "@/components/mode-toggle";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { CtaSection } from "@/components/cta-section";

export function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Theme Toggle */}
      <div className="absolute right-4 top-4 z-50">
        <ModeToggle />
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* CTA Section */}
        <CtaSection />
      </main>

      {/* Footer */}
      <footer className="border-t bg-background px-4 py-6 text-center text-sm text-muted-foreground">
        <p>© 2024 FitTrack Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}