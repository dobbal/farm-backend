import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  location: string;
}

interface WeatherWidgetProps {
  data: WeatherData;
}

export default function WeatherWidget({ data }: WeatherWidgetProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Weather Data</CardTitle>
        <p className="text-sm text-muted-foreground">{data.location}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-accent">
              <Thermometer className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-2xl font-mono font-medium">{data.temperature}°C</div>
              <div className="text-xs text-muted-foreground">Temperature</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-accent">
              <Droplets className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-2xl font-mono font-medium">{data.humidity}%</div>
              <div className="text-xs text-muted-foreground">Humidity</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-accent">
              <Cloud className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-2xl font-mono font-medium">{data.rainfall}mm</div>
              <div className="text-xs text-muted-foreground">Rainfall</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-accent">
              <Wind className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-2xl font-mono font-medium">{data.windSpeed}</div>
              <div className="text-xs text-muted-foreground">Wind km/h</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
