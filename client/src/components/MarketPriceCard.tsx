import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MarketPrice {
  commodity: string;
  price: number;
  unit: string;
  change: number;
  market: string;
}

interface MarketPriceCardProps {
  data: MarketPrice[];
}

export default function MarketPriceCard({ data }: MarketPriceCardProps) {
  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Market Prices</CardTitle>
        <p className="text-sm text-muted-foreground">Latest commodity rates</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover-elevate"
              data-testid={`price-item-${item.commodity.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex-1">
                <div className="font-medium">{item.commodity}</div>
                <div className="text-xs text-muted-foreground">{item.market}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-mono font-medium">
                  ₹{item.price}/{item.unit}
                </div>
                <div className="flex items-center gap-1 justify-end text-xs">
                  {getTrendIcon(item.change)}
                  <span className={item.change > 0 ? "text-green-600" : item.change < 0 ? "text-red-600" : "text-muted-foreground"}>
                    {item.change > 0 ? "+" : ""}{item.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
