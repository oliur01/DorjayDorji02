import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Scissors, Package, Check } from "lucide-react";

const steps = [
  {
    title: "Book Appointment",
    description: "Schedule a convenient time for your home measurement session",
    icon: Check,
  },
  {
    title: "Get Measured",
    description: "Our professional tailor visits your location for precise measurements",
    icon: Ruler,
  },
  {
    title: "Tailoring Process",
    description: "Your garment is crafted with attention to every detail",
    icon: Scissors,
  },
  {
    title: "Home Delivery",
    description: "Receive your perfectly fitted garment at your doorstep",
    icon: Package,
  },
];

export function HowItWorks() {
  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Our simple four-step process ensures you get the perfect fit
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={step.title} className="relative">
            <div className="absolute -top-4 left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <CardHeader>
              <step.icon className="h-10 w-10 mb-4" />
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