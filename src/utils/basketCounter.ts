import { ICartItem } from "../types/cart";

export const basketCounter = (items: ICartItem[]): number => {
  const productCount = items.map((item) => item.count);

  return productCount.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
