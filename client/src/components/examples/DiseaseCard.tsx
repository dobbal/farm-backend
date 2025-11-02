import DiseaseCard from '../DiseaseCard';

export default function DiseaseCardExample() {
  return (
    <div className="p-4 max-w-2xl">
      <DiseaseCard
        name="Leaf Rust"
        crop="Wheat"
        severity="High"
        description="Fungal disease causing orange-brown pustules on leaves, leading to reduced photosynthesis and yield loss."
        onViewDetails={() => console.log('Disease details viewed')}
      />
    </div>
  );
}
