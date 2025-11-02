import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Agricultural_fields_hero_image_bc9b64d1.png";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      
      <div className="relative container mx-auto h-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Grow Smarter with Expert Agricultural Guidance
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Access comprehensive production guides, disease prevention strategies, real-time market data, and quality agricultural products all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/fix-your-crop/agriculture/production">
              <a data-testid="button-explore-guides">
                <Button size="lg" variant="default" className="bg-primary/90 backdrop-blur-sm">
                  Explore Guides
                </Button>
              </a>
            </Link>
            <Link href="/shop">
              <a data-testid="button-shop-products">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Shop Products
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
