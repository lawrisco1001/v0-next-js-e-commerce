"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { mockProducts } from "@/lib/mock-data"
import { SellerChat } from "@/components/seller-chat"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = mockProducts.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="space-y-4">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
          {product.discount && (
            <Badge className="absolute top-4 right-4" variant="destructive">
              -{product.discount}% OFF
            </Badge>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground text-lg">{product.description}</p>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg">
            <Button variant="ghost" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </Button>
            <span className="px-4 font-semibold">{quantity}</span>
            <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>

        <div className="flex gap-3">
          <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={product.stock === 0}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <Button size="lg" variant="outline">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <div className="pt-2">
          <SellerChat
            sellerId={`seller-${product.id}`}
            sellerName="Premium Electronics Store"
            productName={product.name}
          />
        </div>

        <Card className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-semibold">Free Shipping</p>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-semibold">Secure Payment</p>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-semibold">Easy Returns</p>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
