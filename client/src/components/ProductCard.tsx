import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  inStock?: boolean;
  onAddToCart?: () => void;
}

export default function ProductCard({
  name,
  category,
  price,
  imageSrc,
  inStock = true,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col" data-testid={`card-product-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <Badge variant="secondary" className="mb-2 text-xs">
            {category}
          </Badge>
          <h3 className="font-medium mb-2 line-clamp-2">{name}</h3>
          <div className="text-xl font-mono font-medium text-primary mb-3">
            ₹{price.toLocaleString('en-IN')}
          </div>
        </div>
        <Button
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.();
            console.log(`Added ${name} to cart`);
          }}
          disabled={!inStock}
          data-testid={`button-add-to-cart-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  );
}
