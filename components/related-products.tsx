"use client"

import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"

interface RelatedProductsProps {
  productId: string
}

export function RelatedProducts({ productId }: RelatedProductsProps) {
  const currentProduct = mockProducts.find((p) => p.id === productId)
  const relatedProducts = mockProducts
    .filter((p) => p.id !== productId && p.category === currentProduct?.category)
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
