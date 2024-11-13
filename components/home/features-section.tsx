import { Calendar, Ruler, Scissors, Truck } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book your tailor visit at your convenience",
  },
  {
    icon: Ruler,
    title: "Home Measurement",
    description: "Professional measurements in the comfort of your home",
  },
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Expertly crafted garments to your specifications",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Your finished garments delivered to your doorstep",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}