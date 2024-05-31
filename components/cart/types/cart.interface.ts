import type CartProduct from "./cart-product.interface"

interface Cart {
  products: Array<CartProduct>
  installation: boolean,
}

export type { Cart }