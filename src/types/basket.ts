import { IProduct } from "./product";

export interface IBasketItem {
  product: IProduct;
  count: number;
}

export interface IBasket {
  items: IBasketItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: IProduct) => void;
  deleteFromCart: (id: number) => void;
  increaseItemCount: (id: number) => void;
  decreaseItemCount: (id: number) => void;
}
