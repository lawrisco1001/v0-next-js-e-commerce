export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  category: string
  stock: number
  rating?: number
  reviews?: number
  badge?: string
}

export interface CartItem extends Product {
  quantity: number
}
