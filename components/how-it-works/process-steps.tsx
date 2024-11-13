import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Scissors, Package, Calendar, Palette, Check } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule a convenient time for your home measurement session through our online booking system.",
  },
  {
    icon: Ruler,
    title: "Professional Measurement",
    description: "Our expert tailor visits your location to take precise measurements and discuss your preferences.",
  },
  {
    icon: Palette,
    title: "Style & Fabric Selection",
    description: "Choose from our premium fabric collection and customize your garment's style details.",
  },
  {
    icon: Scissors,
    title: "Crafting Process",
    description: "Your garment is meticulously crafted by our skilled artisans with attention to every detail.",
  },
  {
    icon: Check,
    title: "Fitting Session",
    description: "We ensure your garment fits perfectly with a dedicated fitting session.",
  },
  {
    icon: Package,
    title: "Delivery",
    description: "Receive your perfectly fitted garment at your doorstep.",
  },
];

export function ProcessSteps() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={step.title} className="relative">
            <div className="absolute -top-4 left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <CardHeader>
              <step.icon className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}