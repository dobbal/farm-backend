import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface DiseaseCardProps {
  name: string;
  crop: string;
  severity: "Low" | "Medium" | "High";
  description: string;
  onViewDetails?: () => void;
}

export default function DiseaseCard({ name, crop, severity, description, onViewDetails }: DiseaseCardProps) {
  const severityColors = {
    Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <Card data-testid={`card-disease-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-md bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-medium text-lg">{name}</h3>
                <Badge className={severityColors[severity]}>{severity}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Affects: {crop}</p>
              <p className="text-sm">{description}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onViewDetails?.();
                console.log(`Viewing details for ${name}`);
              }}
              data-testid={`button-view-disease-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              View Prevention & Treatment
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
