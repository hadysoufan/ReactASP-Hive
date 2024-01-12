
export  interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type?: string;
  brand: string;
  qtyInStock?: number;
}
