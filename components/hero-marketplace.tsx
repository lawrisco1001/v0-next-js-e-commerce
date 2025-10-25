import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Truck, CreditCard } from "lucide-react"
import Image from "next/image"

export function HeroMarketplace() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200 py-16 md:py-24">
      <div className="absolute inset-0 opacity-40">
        {/* Floating cubes */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/50 rounded-lg rotate-12 shadow-xl backdrop-blur-sm" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-white/40 rounded-lg -rotate-6 shadow-lg backdrop-blur-sm" />
        <div className="absolute bottom-20 right-60 w-40 h-40 bg-white/30 rounded-lg rotate-45 shadow-xl backdrop-blur-sm" />
        <div className="absolute top-32 left-1/3 w-28 h-28 bg-white/35 rounded-lg -rotate-12 shadow-lg backdrop-blur-sm" />
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-white/45 rounded-lg rotate-6 shadow-xl backdrop-blur-sm" />

        {/* Floating icons */}
        <div className="absolute top-20 left-1/4 animate-float">
          <div className="bg-white/60 p-4 rounded-full shadow-lg backdrop-blur-sm">
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float-delayed">
          <div className="bg-white/60 p-4 rounded-full shadow-lg backdrop-blur-sm">
            <Shield className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              Discover Amazing Products at{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 inline-block rounded">
                MarketHub
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
              Shop millions of products from trusted sellers worldwide. Fast shipping, secure payments, and satisfaction
              guaranteed.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white border-2 border-gray-300 hover:border-primary">
                View Deals
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <Truck className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <Shield className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">Secure Pay</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                <CreditCard className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-[400px]">
              {/* Main product image */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-2xl shadow-2xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/premium-wireless-headphones-yellow.jpg"
                  alt="Featured Product"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Secondary product */}
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/smart-watch-modern-design.jpg"
                  alt="Product 2"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg animate-pulse">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
