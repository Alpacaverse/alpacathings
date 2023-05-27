import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [
    {
      name: "Neck Sweatshirt",
      price: 15,
      image: "./sweat-shirt.jpg",
      type: "NEW",
    },
    {
      name: "Swimming Cloth",
      price: 20,
      image: "./swimming-cloth.jpg",
      type: "USED",
    },
  ],
  addToCart: (item) => set({ cart: [...cart, item] }),
  setCart: (item) => set({ cart: item }),
}));
