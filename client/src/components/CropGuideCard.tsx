import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface CropGuideCardProps {
  name: string;
  scientificName: string;
  icon: string;
  path: string;
}

export default function CropGuideCard({ name, scientificName, icon, path }: CropGuideCardProps) {
  return (
    <Link href={path}>
      <a data-testid={`card-crop-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        <Card className="hover-elevate active-elevate-2 transition-transform hover:scale-[1.02]">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-md bg-accent flex items-center justify-center text-2xl">
                {icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground italic">{scientificName}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
