export default interface Product {
  name: string,
  description: string,
  type: string,
  info: string,
  article: string,
  targetPrice: number,
  price?: Price,
  img: string,
}

interface Price {
  ru: Currency,
  eu: Currency,
}

interface Currency {
  min: number,
  max: number,
}