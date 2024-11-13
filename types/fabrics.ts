export interface FabricType {
  name: string;
  description: string;
  image: string;
  pricePerMeter: number;
  weight: string;
  origin: string;
  season: string;
  colors: string[];
}

export interface FabricCategoryType {
  id: string;
  title: string;
  description: string;
  fabrics: FabricType[];
}