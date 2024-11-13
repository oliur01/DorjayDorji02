import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container py-24">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2064')",
          }}
        />
        <div className="relative z-10 px-8 py-24 md:px-16">
          <div className="max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Create Your Perfect Piece?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the luxury of custom tailoring with a personal fitting session
            </p>
            <Button size="lg" asChild>
              <Link href="/book" className="flex items-center gap-2">
                Book Your Appointment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}