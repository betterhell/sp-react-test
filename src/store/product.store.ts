import {create} from "zustand";

import {ProductState} from "../types/product";
import productList from "../data/productList";
import {persist} from "zustand/middleware";


export const useProductStore = create<ProductState>()((set, get) => ({
    currentProduct: null,

    getCurrentProduct: (productId: string) => {
        const product = productList.find((product) => product.id === productId)
        set({currentProduct: product})
    }
}))