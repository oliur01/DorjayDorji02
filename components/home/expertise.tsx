import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Scissors, Shield } from "lucide-react";

const expertiseAreas = [
  {
    icon: Sparkles,
    title: "Exquisite Craftsmanship",
    description: "Every stitch is crafted with precision and care, ensuring the highest quality in every garment."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "We understand your unique style and preferences to create pieces that truly reflect you."
  },
  {
    icon: Scissors,
    title: "Perfect Fit",
    description: "Our expert tailors ensure each garment fits you flawlessly, enhancing your natural silhouette."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "We stand behind our work with a satisfaction guarantee and complimentary adjustments."
  }
];

export function Expertise() {
  return (
    <section className="container py-24 bg-muted/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Expertise</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          With years of experience in haute couture and bespoke tailoring, we bring you the finest in custom clothing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertiseAreas.map((area) => (
          <Card key={area.title} className="bg-background">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <area.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}