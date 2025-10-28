"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, ChevronLeft, ChevronRight, ChevronDown, MapPin, Shield, MessageCircle } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { mockProducts } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = mockProducts.find((p) => p.id === productId)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({})
  const [showAllAttributes, setShowAllAttributes] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (!product) {
    return <div>Product not found</div>
  }

  const images = product.images || [product.image]
  const attributes = product.attributes || {}
  const displayedAttributes = showAllAttributes ? Object.entries(attributes) : Object.entries(attributes).slice(0, 6)

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    })
  }

  const otherRecommendations = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="space-y-8">
      <div className="text-sm text-muted-foreground">
        Consumer Electronics &gt; Camera, Photo & Accessories &gt; Digital Cameras
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>No reviews yet</span>
        </div>
        {product.supplier && (
          <div className="flex items-center gap-3 mt-2">
            <span className="font-medium">{product.supplier.name}</span>
            <Badge variant="secondary">{product.supplier.yearsOnAlibaba} yrs</Badge>
            <Badge variant="secondary" className="gap-1">
              <MapPin className="h-3 w-3" />
              {product.supplier.location}
            </Badge>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-[200px_1fr_400px] gap-8">
        <div className="space-y-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={cn(
                "w-full aspect-square rounded-lg border-2 overflow-hidden transition-colors",
                selectedImageIndex === idx ? "border-primary" : "border-transparent hover:border-muted-foreground/30",
              )}
            >
              <img src={img || "/placeholder.svg"} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
          <Button variant="ghost" size="sm" className="w-full">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden relative group">
            <img
              src={images[selectedImageIndex] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">Other recommendations for your business</h3>
            <div className="grid grid-cols-4 gap-4">
              {otherRecommendations.map((rec) => (
                <Card key={rec.id} className="p-3 space-y-2 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-square bg-muted rounded overflow-hidden">
                    <img src={rec.image || "/placeholder.svg"} alt={rec.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-medium line-clamp-2">{rec.name}</p>
                  <p className="font-bold">US${rec.price}</p>
                  {rec.moq && <p className="text-xs text-muted-foreground">MOQ: {rec.moq} set</p>}
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Minimum order quantity: {product.moq || 1} set</p>
              <p className="text-3xl font-bold mt-1">US${product.price}</p>
            </div>

            {product.variations && (
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center justify-between">
                  Variations
                  <Button variant="link" size="sm" className="text-primary">
                    Edit selections
                  </Button>
                </h4>
                {product.variations.map((variation) => (
                  <div key={variation.type} className="space-y-2">
                    <p className="text-sm font-medium">
                      {variation.type}: {selectedVariations[variation.type] || variation.options[0].label}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {variation.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() =>
                            setSelectedVariations({ ...selectedVariations, [variation.type]: option.label })
                          }
                          className={cn(
                            "border rounded-lg p-2 hover:border-primary transition-colors",
                            selectedVariations[variation.type] === option.label && "border-primary",
                          )}
                        >
                          {option.image ? (
                            <img
                              src={option.image || "/placeholder.svg"}
                              alt={option.label}
                              className="w-12 h-12 object-cover rounded"
                            />
                          ) : (
                            <span className="px-3 py-1">{option.label}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {product.shippingInfo && (
              <div className="space-y-2">
                <h4 className="font-semibold">Shipping</h4>
                {product.shippingInfo.express && (
                  <div className="flex items-start justify-between text-sm">
                    <div>
                      <p className="font-medium">Express</p>
                      <p className="text-muted-foreground">
                        Shipping fee: US${product.shippingInfo.express.cost.toFixed(2)} for 1 set
                      </p>
                      <p className="text-muted-foreground">Estimated delivery in {product.shippingInfo.express.days}</p>
                    </div>
                    <Button variant="link" size="sm">
                      Change
                    </Button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  * Shipping costs are estimates for your reference. Please contact the supplier for the final quote.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-semibold flex items-center justify-between">
                Protections for this product
                <ChevronRight className="h-4 w-4" />
              </h4>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="font-medium">Secure payments</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Every payment you make on Alibaba.is secured with strict SSL encryption and PCI DSS data protection
                protocols
              </p>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-[#FF6A00] hover:bg-[#FF6A00]/90" size="lg">
                Send inquiry
              </Button>
              <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat now
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="supplier" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="attributes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Attributes
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Reviews
          </TabsTrigger>
          <TabsTrigger
            value="supplier"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Supplier
          </TabsTrigger>
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Description
          </TabsTrigger>
        </TabsList>

        <TabsContent value="attributes" className="mt-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Key attributes</h3>
            <div className="grid grid-cols-2 gap-4">
              {displayedAttributes.map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
            {Object.entries(attributes).length > 6 && (
              <Button variant="link" onClick={() => setShowAllAttributes(!showAllAttributes)}>
                {showAllAttributes ? "Show less" : "Show more"}{" "}
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", showAllAttributes && "rotate-180")} />
              </Button>
            )}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Ratings & Reviews</h3>
            <div className="flex gap-4 border-b">
              <button className="pb-2 border-b-2 border-transparent hover:border-primary">Product reviews (0)</button>
              <button className="pb-2 border-b-2 border-primary">Store reviews (0)</button>
            </div>
            <p className="text-muted-foreground">No reviews yet</p>
          </div>
        </TabsContent>

        <TabsContent value="supplier" className="mt-6">
          {product.supplier && (
            <div className="space-y-6">
              <h3 className="font-semibold text-lg">Know your supplier</h3>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-2xl font-bold">
                    {product.supplier.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{product.supplier.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Trading Company · {product.supplier.yearsOnAlibaba} yrs on Alibaba.com
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Located in {product.supplier.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h5 className="font-semibold mb-4">Store performance</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">On-time delivery rate</p>
                      <p className="text-2xl font-bold">{product.supplier.onTimeDeliveryRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="text-2xl font-bold">{product.supplier.responseTime}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button className="flex-1 bg-[#FF6A00] hover:bg-[#FF6A00]/90">Company profile</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    More products
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="description" className="mt-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product descriptions from the supplier</h3>
            <Card className="p-6">
              <p className="text-muted-foreground">{product.description}</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
