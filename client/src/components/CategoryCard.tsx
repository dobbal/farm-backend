import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  imageSrc: string;
  path: string;
}

export default function CategoryCard({ title, description, icon, imageSrc, path }: CategoryCardProps) {
  return (
    <Link href={path}>
      <a data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <Card className="overflow-hidden hover-elevate active-elevate-2 h-full transition-transform hover:scale-[1.02]">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
              <span>View Guides</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
