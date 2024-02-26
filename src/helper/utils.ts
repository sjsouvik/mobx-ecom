import { Product } from "../pages/Home/Home";

export const isProductInCart = (cart: Product[], productId: number) => {
  return cart.some((item) => item.id === productId);
};

export const pluralize = (count: number, query: string) => {
  return count > 1 ? `${count} ${query}s` : `${count} ${query}`;
};
