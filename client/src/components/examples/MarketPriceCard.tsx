import MarketPriceCard from '../MarketPriceCard';

export default function MarketPriceCardExample() {
  const mockPriceData = [
    { commodity: "Wheat", price: 2500, unit: "quintal", change: 2.5, market: "Delhi Mandi" },
    { commodity: "Rice", price: 3200, unit: "quintal", change: -1.2, market: "Punjab Market" },
    { commodity: "Tomato", price: 35, unit: "kg", change: 5.8, market: "Local Market" }
  ];
  
  return (
    <div className="p-4 max-w-md">
      <MarketPriceCard data={mockPriceData} />
    </div>
  );
}
