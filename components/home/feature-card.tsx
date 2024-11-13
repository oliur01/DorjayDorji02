import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}