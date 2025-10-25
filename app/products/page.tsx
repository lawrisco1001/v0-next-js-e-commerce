import { ProductsGrid } from "@/components/products-grid"
import { ProductFilters } from "@/components/product-filters"
import { AISearchBar } from "@/components/ai-search-bar"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-balance">Discover Our Collection</h1>
          <p className="text-muted-foreground text-lg">Explore premium products curated just for you</p>
        </div>

        <AISearchBar />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters />
          </aside>

          <div className="flex-1">
            <ProductsGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
