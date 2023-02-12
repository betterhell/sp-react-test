import { IProduct } from "./product";

export interface ICartItem {
  product: IProduct;
  count: number;
}

export interface ICart {
  items: ICartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: IProduct) => void;
  deleteFromCart: (id: number) => void;
  increaseItemCount: (id: number) => void;
  decreaseItemCount: (id: number) => void;
}
