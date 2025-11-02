import { useRoute } from "wouter";
import DiseaseCard from "@/components/DiseaseCard";
import WeatherWidget from "@/components/WeatherWidget";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProtectionGuide() {
  const [, params] = useRoute("/fix-your-crop/:category/protection");
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const category = params?.category || "agriculture";

  const categoryTitles: Record<string, string> = {
    agriculture: "Agriculture",
    horticulture: "Horticulture",
    "animal-husbandry": "Animal Husbandry",
    garden: "Garden",
  };

  const diseasesByCategory: Record<string, Array<{
    name: string;
    crop: string;
    severity: "Low" | "Medium" | "High";
    description: string;
  }>> = {
    agriculture: [
      {
        name: "Leaf Rust",
        crop: "Wheat",
        severity: "High",
        description: "Fungal disease causing orange-brown pustules on leaves, leading to reduced photosynthesis and yield loss.",
      },
      {
        name: "Blast Disease",
        crop: "Rice",
        severity: "High",
        description: "Caused by fungus Magnaporthe oryzae, affects leaves, stems, and grains causing significant crop damage.",
      },
      {
        name: "Corn Smut",
        crop: "Corn",
        severity: "Medium",
        description: "Fungal disease causing large galls on ears and other plant parts, reducing grain quality.",
      },
    ],
    horticulture: [
      {
        name: "Late Blight",
        crop: "Tomato",
        severity: "High",
        description: "Devastating disease causing dark lesions on leaves and fruits, can destroy entire crop rapidly.",
      },
      {
        name: "Powdery Mildew",
        crop: "Vegetables",
        severity: "Medium",
        description: "White powdery coating on leaves, affects photosynthesis and plant vigor.",
      },
    ],
    "animal-husbandry": [
      {
        name: "Foot and Mouth Disease",
        crop: "Cattle",
        severity: "High",
        description: "Highly contagious viral disease affecting cloven-hoofed animals, causing fever and blisters.",
      },
      {
        name: "Newcastle Disease",
        crop: "Poultry",
        severity: "High",
        description: "Viral disease affecting respiratory, nervous, and digestive systems of birds.",
      },
    ],
    garden: [
      {
        name: "Black Spot",
        crop: "Rose",
        severity: "Medium",
        description: "Fungal disease causing black spots on leaves, leading to defoliation.",
      },
      {
        name: "Aphid Infestation",
        crop: "Garden Plants",
        severity: "Low",
        description: "Small sap-sucking insects that can transmit viruses and cause stunted growth.",
      },
    ],
  };

  const mockWeatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 15,
    location: "Delhi, India",
  };

  const diseases = diseasesByCategory[category] || diseasesByCategory.agriculture;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {categoryTitles[category]} - Protection Guides
          </h1>
          <p className="text-muted-foreground">
            Learn about common diseases and pests, their prevention and treatment methods
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-xl font-medium mb-4">Common Diseases & Pests</h2>
            {diseases.map((disease) => (
              <DiseaseCard
                key={disease.name}
                {...disease}
                onViewDetails={() => setSelectedDisease(disease.name)}
              />
            ))}
          </div>

          <div className="lg:col-span-4">
            <WeatherWidget data={mockWeatherData} />
          </div>
        </div>
      </div>

      <Dialog open={!!selectedDisease} onOpenChange={() => setSelectedDisease(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedDisease}</DialogTitle>
            <DialogDescription>
              Comprehensive information about disease lifecycle, prevention, and treatment
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
              <TabsTrigger value="prevention">Prevention</TabsTrigger>
              <TabsTrigger value="treatment">Treatment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium mb-2">Disease Overview</h3>
                <p className="text-sm text-muted-foreground">
                  This section would contain detailed information about the disease, its importance in agriculture, 
                  historical context, geographic distribution, and economic impact.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="lifecycle" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium mb-2">Disease Lifecycle</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed information about pathogen lifecycle stages, infection process, favorable conditions 
                  for disease development, and seasonal patterns would be displayed here.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="prevention" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium mb-2">Preventive Measures</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Use disease-resistant varieties when available</li>
                  <li>Practice crop rotation to break disease cycle</li>
                  <li>Maintain proper field sanitation and remove infected debris</li>
                  <li>Ensure adequate spacing for air circulation</li>
                  <li>Monitor weather conditions and disease forecasts</li>
                  <li>Apply preventive fungicides/pesticides as recommended</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="treatment" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium mb-2">Treatment Methods</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Curative measures and recommended products for disease control:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Apply appropriate fungicides/pesticides at early disease stages</li>
                  <li>Remove and destroy severely infected plants</li>
                  <li>Adjust irrigation to reduce humidity if applicable</li>
                  <li>Consider biological control agents when available</li>
                  <li>Follow integrated pest management (IPM) practices</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
