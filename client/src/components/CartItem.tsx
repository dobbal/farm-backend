import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
  onUpdateQuantity?: (quantity: number) => void;
  onRemove?: () => void;
}

export default function CartItem({
  name,
  price,
  quantity,
  imageSrc,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-4 p-4 border rounded-md" data-testid={`cart-item-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium mb-1 line-clamp-1">{name}</h3>
        <div className="text-lg font-mono font-medium text-primary">
          ₹{price.toLocaleString('en-IN')}
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            onRemove?.();
            console.log(`Removed ${name} from cart`);
          }}
          data-testid={`button-remove-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-1 border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => {
              const newQty = Math.max(1, quantity - 1);
              onUpdateQuantity?.(newQty);
              console.log(`Updated quantity to ${newQty}`);
            }}
            data-testid={`button-decrease-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center text-sm font-medium" data-testid={`text-quantity-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => {
              const newQty = quantity + 1;
              onUpdateQuantity?.(newQty);
              console.log(`Updated quantity to ${newQty}`);
            }}
            data-testid={`button-increase-${name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
