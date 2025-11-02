import CategoryCard from '../CategoryCard';
import wheatImage from "@assets/generated_images/Wheat_crop_guide_image_42c52eca.png";

export default function CategoryCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <CategoryCard
        title="Agriculture"
        description="Expert guides for field crops including wheat, rice, corn, and more"
        icon="🌾"
        imageSrc={wheatImage}
        path="/fix-your-crop/agriculture/production"
      />
    </div>
  );
}
