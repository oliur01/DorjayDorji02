import { FabricCategory } from "@/components/fabrics/fabric-category";
import { fabricCategories } from "@/config/fabrics";

export default function FabricsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Fabric Catalog</h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Explore our premium collection of fabrics from renowned mills worldwide
          </p>
        </div>

        <div className="space-y-20">
          {fabricCategories.map((category) => (
            <FabricCategory key={category.id} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
}