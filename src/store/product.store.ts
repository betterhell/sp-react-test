import {create} from "zustand";
import {ProductState} from "../types/product";
import productList from "../data/productList";

export const useProductStore = create<ProductState>((set) => ({
    currentProduct: null,

    getCurrentProduct: (productId: any) => {
        const product = productList.find((product) => product.id === productId)
        set({currentProduct: product})
    }
}))