import { ServiceCategory } from "@/components/services/service-category";
import { serviceCategories } from "@/config/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Discover our premium tailoring services, featuring bespoke designs and expert craftsmanship
          </p>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((category) => (
            <ServiceCategory key={category.id} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
}