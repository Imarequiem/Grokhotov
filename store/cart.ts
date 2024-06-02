import { defineStore } from "pinia";

import type { Cart } from "~/components/cart/types/cart.interface";
import type CartProduct from "~/components/cart/types/cart-product.interface";

export const useCartStore = defineStore('cart', () => {
  const cart: Cart = reactive({
    products: [
      {
        name: "BXC",
        description: "Вытяжное устройство для механической системы вентиляции",
        type: "Вытяжное устройство",
        info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "G2H1065",
        targetPrice: 12.644,
        img: "BXC",
        count: 1,
      },
      {
        name: "G2H",
        description: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
        type: "Вытяжное устройство",
        info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "G2H1065",
        targetPrice: 12.644,
        img: "G2H",
        count: 1,
      },
      {
        name: "GHN",
        description: "Вытяжное устройство с датчиком присутствия",
        type: "Вытяжное устройство",
        info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "G2H1065",
        targetPrice: 12.644,
        img: "GHN",
        count: 1,
      },
    ],
    installation: false,
  });

  const getTotalPrice = () => {
    return cart.products.reduce((total: number, product: CartProduct): number => {
      total += product.targetPrice * product.count;
      return total;
    }, 0);
  }

  const getCountProduct = () => {
    return cart.products.reduce((total: number, product: CartProduct): number => {
      total += product.count;
      return total;
    }, 0);
  }

  const deleteProduct = (product: CartProduct) => {
    const index = cart.products.findIndex((el: CartProduct) => el.name === product.name)
    cart.products.splice(index, 1)
  }

  return { cart, getTotalPrice, getCountProduct, deleteProduct }
})