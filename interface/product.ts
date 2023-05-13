export interface IProduct {
  id: number
  image: string
  name: string
  description?: string
  variants?: string[]
  price: number
  originalPrice?: number
}
