"use client"

import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  compact?: boolean
  variant?: "default" | "alibaba" // Added variant prop for Alibaba-style cards
}

export function ProductCard({ product, compact = false, variant = "default" }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (variant === "alibaba") {
    return (
      <Link href={`/products/${product.id}`}>
        <Card className="group overflow-hidden hover:shadow-md transition-all cursor-pointer bg-white border border-gray-200 rounded-lg">
          <div className="aspect-square relative overflow-hidden bg-gray-50">
            {product.isLocal && (
              <Badge className="absolute top-2 left-2 bg-white text-gray-900 border border-gray-300 font-medium text-xs px-2 py-0.5">
                Local
              </Badge>
            )}
            {product.isFlashDeal && (
              <Badge className="absolute top-2 left-2 bg-red-600 text-white border-0 font-semibold text-xs px-2 py-0.5">
                ⚡ Flash Deal
              </Badge>
            )}
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-3">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            {product.moq && <p className="text-xs text-gray-600">MOQ: {product.moq}</p>}
            {product.deliveryDate && <p className="text-xs text-green-600 font-medium">{product.deliveryDate}</p>}
            {product.soldCount && <p className="text-xs text-gray-600">{product.soldCount}+ sold</p>}
          </CardContent>
        </Card>
      </Link>
    )
  }

  if (compact) {
    return (
      <Link href={`/products/${product.id}`}>
        <div className="group cursor-pointer">
          <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-lg mb-2">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
          </div>
        </div>
      </Link>
    )
  }

  const getBadgeColor = (badge: string) => {
    if (badge.includes("BEST SELLER")) return "bg-purple-600"
    if (badge.includes("HOT")) return "bg-red-500"
    if (badge.includes("NEW")) return "bg-blue-500"
    if (badge.includes("%") || badge.includes("Flash")) return "bg-orange-500"
    return "bg-purple-600"
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col bg-white border-gray-200">
        <div className="aspect-square relative overflow-hidden bg-gray-50">
          {product.badge && (
            <Badge
              className={`absolute top-2 left-2 ${getBadgeColor(product.badge)} text-white border-0 font-semibold text-xs px-2 py-1`}
            >
              {product.badge}
            </Badge>
          )}
          {product.isLocal && (
            <Badge className="absolute top-2 right-2 bg-white text-gray-900 border border-gray-300 font-medium text-xs px-2 py-0.5">
              Local
            </Badge>
          )}
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold mb-2 line-clamp-2 text-gray-900 text-sm">{product.name}</h3>

          {product.rating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-600">
                {product.rating} ({product.reviews})
              </span>
            </div>
          )}

          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {product.moq && <p className="text-xs text-gray-600 mb-1">MOQ: {product.moq}</p>}
            {product.deliveryDate && <p className="text-xs text-green-600 font-medium mb-1">{product.deliveryDate}</p>}
            {product.soldCount && <p className="text-xs text-gray-600 mb-3">{product.soldCount}+ sold</p>}

            <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
