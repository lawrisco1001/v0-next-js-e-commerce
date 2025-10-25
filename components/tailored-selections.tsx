"use client"

import { mockProducts } from "@/lib/mock-data"
import { ProductCard } from "@/components/product-card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function TailoredSelections() {
  const premiumElectronics = mockProducts.filter((p) => p.category === "electronics").slice(0, 5)
  const fashionEssentials = mockProducts.filter((p) => p.category === "fashion").slice(0, 5)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Premium Electronics Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Premium Electronics & Gadgets</h2>
              <p className="text-gray-600 text-sm">2,750+ items</p>
            </div>
            <Link
              href="/products?category=electronics"
              className="text-primary font-medium flex items-center hover:gap-2 transition-all"
            >
              View more <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {premiumElectronics.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-48">
                <ProductCard product={product} compact />
              </div>
            ))}
          </div>
        </div>

        {/* Fashion Essentials Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Fashion Essentials</h2>
              <p className="text-gray-600 text-sm">1,892+ items</p>
            </div>
            <Link
              href="/products?category=fashion"
              className="text-primary font-medium flex items-center hover:gap-2 transition-all"
            >
              View more <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {fashionEssentials.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-48">
                <ProductCard product={product} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
