import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const processSteps = [
  {
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2064",
    step: "01",
    title: "Personal Consultation",
    description: "Begin your journey with a private consultation to discuss your style preferences and requirements."
  },
  {
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=2067",
    step: "02",
    title: "Custom Design",
    description: "Work with our designers to create your perfect piece, from fabric selection to final details."
  },
  {
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070",
    step: "03",
    title: "Expert Crafting",
    description: "Watch as your vision comes to life through our skilled artisans' precise craftsmanship."
  }
];

export function Process() {
  return (
    <section className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">The Journey</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Experience our signature process of creating your perfect custom garment
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step) => (
          <div key={step.step} className="relative group">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-5xl font-light text-primary/80 mb-4">{step.step}</span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}