import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=2070')",
        }}
      />
      <div className="relative z-20 container">
        <div className="max-w-[600px] space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Elevate Your Style with Custom Tailoring
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the luxury of perfectly fitted garments, crafted just for you. From elegant suits to timeless dresses, we bring haute couture to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base" asChild>
              <Link href="/book">Book Your Personal Fitting</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="/collections">Explore Collections</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}