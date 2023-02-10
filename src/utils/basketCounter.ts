import {ItemOfCart} from "../types/cart";

export const getPriceOfProduct = (items: ItemOfCart[]): number => {
    const productCount = items.map((item) => item.count)

    return productCount
        .reduce((acc, curr) => {
                return acc + curr;
            }, 0
        );
}
