import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import wheatImage from "@assets/generated_images/Wheat_crop_guide_image_42c52eca.png";
import tomatoImage from "@assets/generated_images/Tomato_horticulture_guide_image_66cdad57.png";
import cattleImage from "@assets/generated_images/Cattle_animal_husbandry_image_860ed193.png";
import gardenImage from "@assets/generated_images/Home_garden_image_34d6c304.png";

export default function Home() {
  const categories = [
    {
      title: "Agriculture",
      description: "Expert guides for field crops including wheat, rice, corn, and more",
      icon: "🌾",
      imageSrc: wheatImage,
      path: "/fix-your-crop/agriculture/production",
    },
    {
      title: "Horticulture",
      description: "Comprehensive guides for fruits, vegetables, and commercial crops",
      icon: "🍅",
      imageSrc: tomatoImage,
      path: "/fix-your-crop/horticulture/production",
    },
    {
      title: "Animal Husbandry",
      description: "Best practices for livestock management and animal health",
      icon: "🐄",
      imageSrc: cattleImage,
      path: "/fix-your-crop/animal-husbandry/production",
    },
    {
      title: "Garden",
      description: "Tips and techniques for home gardening and ornamental plants",
      icon: "🌻",
      imageSrc: gardenImage,
      path: "/fix-your-crop/garden/production",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your farming category to access production guides, disease prevention strategies, and expert recommendations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Why Choose AgroGuide?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <div className="text-4xl">📊</div>
                <h3 className="text-lg font-medium">Real-Time Data</h3>
                <p className="text-sm text-muted-foreground">
                  Access live weather forecasts and market prices to make informed decisions
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🎯</div>
                <h3 className="text-lg font-medium">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive production and protection guides backed by agricultural research
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🛒</div>
                <h3 className="text-lg font-medium">Quality Products</h3>
                <p className="text-sm text-muted-foreground">
                  Shop certified chemicals, bio-stimulants, and technology products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
