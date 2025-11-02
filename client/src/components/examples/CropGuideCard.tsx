import CropGuideCard from '../CropGuideCard';

export default function CropGuideCardExample() {
  return (
    <div className="p-4 max-w-md">
      <CropGuideCard
        name="Wheat"
        scientificName="Triticum aestivum"
        icon="🌾"
        path="/fix-your-crop/agriculture/production/wheat"
      />
    </div>
  );
}
