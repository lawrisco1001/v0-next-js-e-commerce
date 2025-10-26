import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"

export function BrowsingHistory() {
  // Show the first product as browsing history
  const product = mockProducts[0]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Browsing history</h2>
      <div className="max-w-sm">
        <ProductCard product={product} compact />
      </div>
    </div>
  )
}
