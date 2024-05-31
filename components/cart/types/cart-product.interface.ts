import type Products from "./product.interface"

export default interface CartProduct extends Products {
  count: number
}