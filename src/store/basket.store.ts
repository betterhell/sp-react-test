import { create } from "zustand";
import { IBasket } from "../types/basket";
import { persist } from "zustand/middleware";

export const useBasketStore = create(
  persist<IBasket>(
    (set, get) => ({
      items: [],
      isOpen: false,

      toggleCart: () => {
        if (get().isOpen) {
          set({ isOpen: false });
        } else {
          set({ isOpen: true });
        }
      },

      addToCart: (product) => {
        const indexOfItem = get().items.findIndex(
          (item) => item.product.id === product.id
        );

        if (indexOfItem !== -1) {
          return get().increaseItemCount(product.id);
        }

        set((state) => ({
          items: [...state.items, { product, count: 1 }],
        }));
      },

      deleteFromCart: (productId) => {
        const FilteredCart = get().items.filter(
          (item) => item.product.id !== productId
        );

        set({ items: FilteredCart });
      },

      increaseItemCount: (productId) => {
        const indexOfItem = get().items.findIndex(
          (item) => item.product.id === productId
        );

        if (indexOfItem !== -1) {
          return set((state) => {
            const items = [...state.items];
            items[indexOfItem].count += 1;
            return { items };
          });
        }
      },

      decreaseItemCount: (productId) => {
        const indexOfItem = get().items.findIndex(
          (item) => item.product.id === productId
        );

        if (indexOfItem !== -1) {
          return set((state) => {
            const products = [...state.items];

            if (products[indexOfItem].count === 1) {
              state.deleteFromCart!(productId);
              return {};
            }

            products[indexOfItem].count -= 1;
            return { items: products };
          });
        }
      },
    }),
    {
      name: "basket",
    }
  )
);
