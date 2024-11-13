import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1556442378-466202037edb?q=80&w=2070"
        alt="Tailor measuring a client"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">
          Tailoring Redefined
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your Personalized Garment, From Home to Delivery
        </p>
        <Link href="/book">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Book Your Tailor Now
          </Button>
        </Link>
      </div>
    </section>
  );
}