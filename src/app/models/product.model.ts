export interface Product {
  quantity: number;
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  productId?: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  previousPrice?: number;
  badge?: string;
}
