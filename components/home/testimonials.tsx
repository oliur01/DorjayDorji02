import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    content: "The attention to detail and perfect fit exceeded my expectations. Truly a premium service!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "Having a tailor come to my home made the process incredibly convenient. The results are outstanding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    content: "The quality of craftsmanship and fabric selection is unmatched. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="container py-20 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Hear from our satisfied customers about their experience with our tailoring services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-background">
            <CardHeader className="flex flex-row items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Quote className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}