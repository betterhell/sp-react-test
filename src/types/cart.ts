import {IProduct} from "./product";

export interface ItemOfCart {
    product: IProduct;
    count: number;
}

export interface ICart {
    items: ItemOfCart[]
    addToCart: (product: IProduct) => void;
    deleteFromCart: (productId: string) => void;
    increaseItemCount: (productId: string) => void;
    decreaseItemCount: (productId: string) => void;
}