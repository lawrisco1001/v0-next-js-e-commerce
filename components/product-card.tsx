"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  compact?: boolean
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
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

  // Generate random badge for demo
  const badges = ["BEST SELLER", "HOT", "NEW", "-20%"]
  const badgeColors = ["bg-purple-600", "bg-red-500", "bg-blue-500", "bg-orange-500"]
  const randomBadge = badges[Math.floor(Math.random() * badges.length)]
  const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)]

  // Generate random rating
  const rating = (4 + Math.random()).toFixed(1)
  const reviews = Math.floor(Math.random() * 500) + 50

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

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col bg-white border-gray-200">
        <div className="aspect-square relative overflow-hidden bg-gray-50">
          <Badge className={`absolute top-2 left-2 ${randomColor} text-white border-0 font-semibold text-xs px-2 py-1`}>
            {randomBadge}
          </Badge>

          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 flex-1">
          <h3 className="font-semibold mb-2 line-clamp-2 text-gray-900">{product.name}</h3>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              {rating} ({reviews})
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
