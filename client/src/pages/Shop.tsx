import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { useState } from "react";
import chemicalImage from "@assets/generated_images/Agricultural_chemical_product_e680cae8.png";
import bioStimulantImage from "@assets/generated_images/Bio-stimulant_product_d228ec73.png";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Crop Protection Spray",
      category: "Chemical",
      price: 1250,
      imageSrc: chemicalImage,
      inStock: true,
    },
    {
      id: 2,
      name: "Advanced Fungicide Solution",
      category: "Chemical",
      price: 1850,
      imageSrc: chemicalImage,
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Bio-Stimulant",
      category: "Bio-Stimulant",
      price: 950,
      imageSrc: bioStimulantImage,
      inStock: true,
    },
    {
      id: 4,
      name: "Plant Growth Enhancer",
      category: "Bio-Stimulant",
      price: 1100,
      imageSrc: bioStimulantImage,
      inStock: true,
    },
    {
      id: 5,
      name: "Pest Control Concentrate",
      category: "Chemical",
      price: 1500,
      imageSrc: chemicalImage,
      inStock: false,
    },
    {
      id: 6,
      name: "Soil Nutrient Booster",
      category: "Bio-Stimulant",
      price: 800,
      imageSrc: bioStimulantImage,
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop Agricultural Products</h1>
          <p className="text-muted-foreground">
            Quality chemicals, bio-stimulants, and technology products for your farming needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log('Search query:', e.target.value);
                  }}
                  data-testid="input-search-products"
                />
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-md">
              <h3 className="font-medium">Category</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="chemical" data-testid="checkbox-chemical" />
                  <Label htmlFor="chemical" className="text-sm font-normal cursor-pointer">
                    Chemicals
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="bio-stimulant" data-testid="checkbox-bio-stimulant" />
                  <Label htmlFor="bio-stimulant" className="text-sm font-normal cursor-pointer">
                    Bio-Stimulants
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="technology" data-testid="checkbox-technology" />
                  <Label htmlFor="technology" className="text-sm font-normal cursor-pointer">
                    Technology Products
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-md">
              <h3 className="font-medium">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="in-stock" defaultChecked data-testid="checkbox-in-stock" />
                  <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
                    In Stock Only
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
              </p>
              <Button variant="outline" size="sm" onClick={() => console.log('Sort clicked')}>
                Sort by: Price
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => console.log(`Added ${product.name} to cart`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
