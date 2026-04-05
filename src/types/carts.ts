export type Carts = {
  id: number;
  title: string;
  date: string;
  total: number;
  products: {
    productId: number;
    price: number;
    quantity: number;
    title: string;
  }[];
};
