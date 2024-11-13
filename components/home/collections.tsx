import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const collections = [
  {
    title: "Professional Wear",
    image: "https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=2064",
    link: "/services#professional"
  },
  {
    title: "Evening Wear",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2064",
    link: "/services#evening"
  },
  {
    title: "Traditional Elegance",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=2064",
    link: "/services#traditional"
  }
];

export function Collections() {
  return (
    <section className="container py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Collections</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Discover our curated collections, each piece thoughtfully designed to enhance your personal style
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Link key={collection.title} href={collection.link}>
            <Card className="group cursor-pointer overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{collection.title}</h3>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}