export default function fixedPrice(price: number | string) {
  if(typeof price === "number") {
    return price.toFixed(3).replaceAll('.', ' ')
  }
  return price.replaceAll('.', ' ')
}