import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceCategoryType } from "@/types/services";

export function ServiceCategory({
  title,
  description,
  styles,
  features,
  image,
}: ServiceCategoryType) {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-6">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-center text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {styles.map((style) => (
          <Card key={style.name}>
            <div className="relative h-[300px]">
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{style.name}</h3>
              <p className="text-sm text-muted-foreground">{style.description}</p>
              <p className="text-sm font-semibold mt-2">Starting from ${style.startingPrice}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}