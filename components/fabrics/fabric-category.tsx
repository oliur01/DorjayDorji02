import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { FabricCategoryType } from "@/types/fabrics";

export function FabricCategory({
  title,
  description,
  fabrics,
}: FabricCategoryType) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fabrics.map((fabric) => (
          <Card key={fabric.name}>
            <div className="relative h-[300px]">
              <Image
                src={fabric.image}
                alt={fabric.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{fabric.name}</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Weight: {fabric.weight}</p>
                      <p>Origin: {fabric.origin}</p>
                      <p>Season: {fabric.season}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{fabric.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">${fabric.pricePerMeter}/meter</p>
                <div className="flex gap-2">
                  {fabric.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}