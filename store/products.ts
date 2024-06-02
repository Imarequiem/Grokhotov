import { defineStore } from "pinia";

import type Product from "~/components/cart/types/product.interface";

export const useProductsStore = defineStore('products', () => {
  const products: Array<Product> = [
    {
      name: "BXC",
      description: "Вытяжное устройство для механической системы вентиляции",
      type: "Вытяжное устройство",
      info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "G2H1065",
      targetPrice: 12.644,
      price: {
        ru: {
          min: 6.848,
          max: 56.584,
        },
        eu: {
          min: 77.60,
          max: 643.86,
        },
      },
      img: "BXC",
    },
    {
      name: "G2H",
      description: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
      type: "Вытяжное устройство",
      info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "G2H1065",
      targetPrice: 12.644,
      price: {
        ru: {
          min: 6.848,
          max: 56.584,
        },
        eu: {
          min: 77.60,
          max: 643.86,
        },
      },
      img: "G2H",
    },
    {
      name: "GHN",
      description: "Вытяжное устройство с датчиком присутствия",
      type: "Вытяжное устройство",
      info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "G2H1065",
      targetPrice: 12.644,
      price: {
        ru: {
          min: 6.848,
          max: 56.584,
        },
        eu: {
          min: 77.60,
          max: 643.86,
        },
      },
      img: "GHN",
    },
    {
      name: "TDA",
      description: "Вытяжное устройство для механической системы вентиляции",
      type: "Вытяжное устройство",
      info: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "G2H1065",
      targetPrice: 12.644,
      price: {
        ru: {
          min: 6.848,
          max: 56.584,
        },
        eu: {
          min: 77.60,
          max: 643.86,
        },
      },
      img: "TDA",
    },
  ];

  return { products };
})