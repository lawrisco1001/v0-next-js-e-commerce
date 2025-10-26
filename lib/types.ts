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
  moq?: number // Minimum Order Quantity
  deliveryDate?: string // Delivery date text
  soldCount?: number // Number of items sold
  isLocal?: boolean // Local stock badge
  isFlashDeal?: boolean // Flash deal badge
  supplierLocation?: string // Supplier location
}

export interface CartItem extends Product {
  quantity: number
}
