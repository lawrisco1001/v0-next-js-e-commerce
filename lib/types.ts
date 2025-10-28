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
  images?: string[] // Multiple product images
  supplier?: {
    name: string
    yearsOnAlibaba: number
    location: string
    onTimeDeliveryRate: number
    responseTime: string
  }
  attributes?: {
    [key: string]: string
  }
  variations?: {
    type: string
    options: { label: string; value: string; image?: string }[]
  }[]
  shippingInfo?: {
    express?: { cost: number; days: string }
    standard?: { cost: number; days: string }
  }
}

export interface CartItem extends Product {
  quantity: number
}
