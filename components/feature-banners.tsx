import { Check, Zap, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeatureBanners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MarketHub Guaranteed */}
          <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">MarketHub Guaranteed</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Quick order and pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <span>On-time delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Money-back guarantee</span>
              </div>
            </div>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              Explore now
            </Button>
            <div className="flex gap-3 mt-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
            </div>
          </div>

          {/* Fast Customization */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Fast Customization</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Low MOQ</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>14-day dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Print to design</span>
              </div>
            </div>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              Explore now
            </Button>
            <div className="flex gap-3 mt-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
              <div className="w-16 h-16 bg-white/20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
