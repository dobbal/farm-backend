import WeatherWidget from '../WeatherWidget';

export default function WeatherWidgetExample() {
  const mockWeatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 15,
    location: "Delhi, India"
  };
  
  return (
    <div className="p-4 max-w-md">
      <WeatherWidget data={mockWeatherData} />
    </div>
  );
}
