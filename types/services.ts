export interface StyleType {
  name: string;
  description: string;
  image: string;
  startingPrice: number;
}

export interface ServiceCategoryType {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  styles: StyleType[];
}