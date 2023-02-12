import { IBasketItem } from "../types/basket";

export const priceWithSpace = (numbers: number) => {
  return String(numbers).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const getSubtotal = (items: IBasketItem[]): number => {
  return items
    .map((item) => item.product.price * item.count)
    .reduce((acc, curr) => acc + curr, 0);
};

export const getTotalPrice = (items: IBasketItem[]): number => {
  const tax = 100;
  const shipping = 150;

  return getSubtotal(items) + tax + shipping;
};
