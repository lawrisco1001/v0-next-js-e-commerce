import { Check, Zap, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"

export function FeatureBanners() {
  const localProducts = mockProducts.filter((p) => p.isLocal).slice(0, 4)
  const guaranteedProducts = mockProducts.filter((p) => p.deliveryDate).slice(0, 4)
  const customProducts = mockProducts.slice(0, 4)

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* US Local Stock Banner */}
        <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇺🇸</span>
              <h3 className="text-2xl font-bold">US local stock</h3>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span className="text-sm">Fastest delivery in 5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span className="text-sm">No import charges</span>
              </div>
            </div>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 mb-6">
              Explore now
            </Button>

            {/* Product Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {localProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="alibaba" />
              ))}
            </div>
          </div>
        </div>

        {/* Alibaba Guaranteed Banner */}
        <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-400">Alibaba</span> Guaranteed
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span className="text-sm">Quick order and pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="text-sm">On-time delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm">Money-back guarantee</span>
              </div>
            </div>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 mb-6">
              Explore now
            </Button>

            {/* Product Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {guaranteedProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="alibaba" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fast Customization Banner */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6" />
            <h3 className="text-2xl font-bold">Fast customization</h3>
          </div>
          <div className="flex gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span className="text-sm">Low MOQ</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span className="text-sm">14-day dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span className="text-sm">Print to design</span>
            </div>
          </div>
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 mb-6">
            Explore now
          </Button>

          {/* Product Thumbnails */}
          <div className="grid grid-cols-4 gap-3 max-w-md">
            {customProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="alibaba" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
