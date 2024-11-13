import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    content: "The home measurement service was incredibly convenient. The tailor was professional and the final suit exceeded my expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200",
  },
  {
    name: "Michael Chen",
    role: "Wedding Client",
    content: "DorjayDorji created the perfect wedding suit for me. Their attention to detail and customer service is outstanding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200",
  },
  {
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    content: "As someone in the fashion industry, I appreciate their craftsmanship. They brought my design vision to life perfectly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}