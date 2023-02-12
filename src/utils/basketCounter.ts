import { IBasketItem } from "../types/basket";

export const basketCounter = (items: IBasketItem[]): number => {
  const productCount = items.map((item) => item.count);

  return productCount.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
