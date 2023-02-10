import { IProduct } from "../types/product";
import { ItemOfCart } from "../types/cart";

const tax = 100;
const shipping = 150;

export const priceWithSpace = (numbers: number) => {
  return String(numbers).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const getPrice = (items: ItemOfCart[]): number => {
  return items
    .map((item) => item.product.price * item.count)
    .reduce((acc, curr) => acc + curr, 0);
};

export const getPriceWithTax = (product: IProduct): number => {
  return product.price + tax + shipping;
};

export const getPriceOfCart = (items: ItemOfCart[]): number => {
  return Number(
    items
      .map((item) => getPriceWithTax(item.product) * item.count)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
      .toFixed()
  );
};
