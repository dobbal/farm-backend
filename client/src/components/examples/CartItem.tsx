import CartItem from '../CartItem';
import { useState } from 'react';
import productImage from "@assets/generated_images/Agricultural_chemical_product_e680cae8.png";

export default function CartItemExample() {
  const [quantity, setQuantity] = useState(2);
  
  return (
    <div className="p-4 max-w-md">
      <CartItem
        name="Premium Crop Protection Spray"
        price={1250}
        quantity={quantity}
        imageSrc={productImage}
        onUpdateQuantity={setQuantity}
        onRemove={() => console.log('Item removed')}
      />
    </div>
  );
}
