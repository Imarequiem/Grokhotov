import { defineStore } from "pinia"
import { ref, type Ref } from "vue"

import type { Cart } from "~/components/cart/types/cart.interface"
import type CartProduct from "~/components/cart/types/cart-product.interface"

export const useCartStore = defineStore('cart', () => {
  const router = useRouter()

  const url = "grokhotov.com"
  const cart: Ref<Cart> = ref({
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
  })

  const getTotalPrice = () => {
    if(!cart.value.products.length) {
      return 0
    }

    let total = 0

    cart.value.products.forEach((product: CartProduct) => {
      total += product.targetPrice * product.count
    })
    return total.toFixed(3).toString().replaceAll('.', ' ')
  }

  const getCountProduct = () => {
    let total = 0

    cart.value.products.forEach((product: CartProduct) => {
      total += product.count
    })
    return total
  }

  const deleteProduct = (product: CartProduct) => {
    const index = cart.value.products.findIndex((el: CartProduct) => el.name === product.name)
    cart.value.products.splice(index, 1)
  }

  const buyToServer = async () => {
    if(!cart.value.products.length) {
      return alert('Чтобы что-нибудь купить, заполните корзину')
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(cart),
    })

    if(!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки: ${JSON.stringify(response)}`)
    }

    await router.push({ path: "/success-order" })
  }

  return { cart, getTotalPrice, getCountProduct, deleteProduct, buyToServer }
})