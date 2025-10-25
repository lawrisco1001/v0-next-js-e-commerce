"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"
import { useSearchParams } from "next/navigation"
import type { Product } from "@/lib/types"

export function ProductsGrid() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)

  useEffect(() => {
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")

    let filtered = [...mockProducts]

    if (category && category !== "all") {
      filtered = filtered.filter((p) => p.category === category)
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower),
      )
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number.parseFloat(minPrice))
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number.parseFloat(maxPrice))
    }

    setFilteredProducts(filtered)
  }, [searchParams])

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
