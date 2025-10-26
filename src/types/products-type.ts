export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  whatItIs: string;
  ingredients: string;
  benefits: string;
  howToUse: string;
  sale: boolean;
  images: string[];
}