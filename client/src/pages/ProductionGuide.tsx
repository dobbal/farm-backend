import { useRoute } from "wouter";
import CropGuideCard from "@/components/CropGuideCard";
import WeatherWidget from "@/components/WeatherWidget";
import MarketPriceCard from "@/components/MarketPriceCard";

export default function ProductionGuide() {
  const [, params] = useRoute("/fix-your-crop/:category/production");
  const category = params?.category || "agriculture";

  const categoryTitles: Record<string, string> = {
    agriculture: "Agriculture",
    horticulture: "Horticulture",
    "animal-husbandry": "Animal Husbandry",
    garden: "Garden",
  };

  const cropsByCategory: Record<string, Array<{ name: string; scientificName: string; icon: string }>> = {
    agriculture: [
      { name: "Wheat", scientificName: "Triticum aestivum", icon: "🌾" },
      { name: "Rice", scientificName: "Oryza sativa", icon: "🌾" },
      { name: "Corn", scientificName: "Zea mays", icon: "🌽" },
      { name: "Cotton", scientificName: "Gossypium", icon: "🌸" },
    ],
    horticulture: [
      { name: "Tomato", scientificName: "Solanum lycopersicum", icon: "🍅" },
      { name: "Potato", scientificName: "Solanum tuberosum", icon: "🥔" },
      { name: "Mango", scientificName: "Mangifera indica", icon: "🥭" },
      { name: "Apple", scientificName: "Malus domestica", icon: "🍎" },
    ],
    "animal-husbandry": [
      { name: "Dairy Cattle", scientificName: "Bos taurus", icon: "🐄" },
      { name: "Poultry", scientificName: "Gallus gallus", icon: "🐔" },
      { name: "Goat", scientificName: "Capra aegagrus", icon: "🐐" },
      { name: "Sheep", scientificName: "Ovis aries", icon: "🐑" },
    ],
    garden: [
      { name: "Rose", scientificName: "Rosa", icon: "🌹" },
      { name: "Marigold", scientificName: "Tagetes", icon: "🌼" },
      { name: "Basil", scientificName: "Ocimum basilicum", icon: "🌿" },
      { name: "Mint", scientificName: "Mentha", icon: "🌿" },
    ],
  };

  const mockWeatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 15,
    location: "Delhi, India",
  };

  const mockPriceData = [
    { commodity: "Wheat", price: 2500, unit: "quintal", change: 2.5, market: "Delhi Mandi" },
    { commodity: "Rice", price: 3200, unit: "quintal", change: -1.2, market: "Punjab Market" },
    { commodity: "Tomato", price: 35, unit: "kg", change: 5.8, market: "Local Market" },
  ];

  const crops = cropsByCategory[category] || cropsByCategory.agriculture;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {categoryTitles[category]} - Production Guides
          </h1>
          <p className="text-muted-foreground">
            Select a crop to view detailed production practices and recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-xl font-medium mb-4">Available Crops</h2>
            {crops.map((crop) => (
              <CropGuideCard
                key={crop.name}
                name={crop.name}
                scientificName={crop.scientificName}
                icon={crop.icon}
                path={`/fix-your-crop/${category}/production/${crop.name.toLowerCase()}`}
              />
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <WeatherWidget data={mockWeatherData} />
            <MarketPriceCard data={mockPriceData} />
          </div>
        </div>
      </div>
    </div>
  );
}
