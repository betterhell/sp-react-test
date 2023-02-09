import {create} from "zustand";
import { IProducts } from "../types/products";
import productList from "../data/productList";

export const useProductsStore = create<IProducts>()((set) => ({
    products: null,

    getAllProducts: () => {
        set({products: productList})
    }
}));