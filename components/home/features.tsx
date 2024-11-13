import { Ruler, Palette, Truck, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Home Measurements",
    description: "Professional tailors visit your location for precise measurements",
    icon: Ruler,
  },
  {
    title: "Custom Fabric Selection",
    description: "Choose from our premium collection of fabrics",
    icon: Palette,
  },
  {
    title: "Free Delivery",
    description: "Complimentary delivery of your finished garments",
    icon: Truck,
  },
  {
    title: "Quick Turnaround",
    description: "Fast delivery without compromising on quality",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Experience the convenience of premium tailoring services at your doorstep
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="border-2">
            <CardHeader>
              <feature.icon className="h-10 w-10 mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}