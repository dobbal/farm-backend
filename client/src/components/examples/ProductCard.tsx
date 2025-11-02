import ProductCard from '../ProductCard';
import productImage from "@assets/generated_images/Agricultural_chemical_product_e680cae8.png";

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-xs">
      <ProductCard
        name="Premium Crop Protection Spray"
        category="Chemical"
        price={1250}
        imageSrc={productImage}
        inStock={true}
        onAddToCart={() => console.log('Product added to cart')}
      />
    </div>
  );
}
