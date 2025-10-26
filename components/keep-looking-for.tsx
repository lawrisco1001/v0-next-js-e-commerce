import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"

interface KeepLookingForProps {
  title: string
}

export function KeepLookingFor({ title }: KeepLookingForProps) {
  // Filter products based on title to show relevant items
  const getProductsByTitle = (title: string) => {
    if (title.toLowerCase().includes("drone")) {
      // Return electronics products for drones
      return mockProducts.filter((p) => p.category === "electronics").slice(0, 4)
    }
    if (title.toLowerCase().includes("camera")) {
      // Return electronics products for cameras
      return mockProducts.filter((p) => p.category === "electronics").slice(4, 8)
    }
    return mockProducts.slice(0, 4)
  }

  const products = getProductsByTitle(title)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-1">Keep looking for</h3>
      <p className="text-gray-600 mb-4">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} compact />
        ))}
      </div>
    </div>
  )
}
