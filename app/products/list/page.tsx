"use client"

import { useState, useMemo } from "react"
import { AlibabaSearchHeader } from "@/components/alibaba-search-header"
import { AdvancedFilterSidebar } from "@/components/advanced-filter-sidebar"
import { ProductListingGrid } from "@/components/product-listing-grid"
import { FloatingActions } from "@/components/floating-actions"
import { mockProducts } from "@/lib/mock-data"
import { ChevronRight, Grid3x3, List, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductListingPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("best-match")
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 1000] as [number, number],
    rating: 0,
    shipping: [] as string[],
    moq: [] as string[],
    badges: [] as string[],
  })
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...mockProducts]

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category))
    }

    // Apply price range filter
    result = result.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter((p) => (p.rating || 0) >= filters.rating)
    }

    // Apply shipping filter
    if (filters.shipping.includes("local")) {
      result = result.filter((p) => p.isLocal)
    }
    if (filters.shipping.includes("express")) {
      result = result.filter((p) => p.deliveryDate)
    }

    // Apply MOQ filter
    if (filters.moq.includes("1")) {
      result = result.filter((p) => p.moq === 1)
    }

    // Apply badge filter
    if (filters.badges.length > 0) {
      result = result.filter((p) => p.badge && filters.badges.includes(p.badge))
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case "newest":
        result.sort((a, b) => (b.badge === "NEW" ? 1 : 0) - (a.badge === "NEW" ? 1 : 0))
        break
      case "orders":
        result.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
        break
      default:
        // best-match - keep original order
        break
    }

    return result
  }, [filters, sortBy])

  // Get active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.categories.length > 0) count += filters.categories.length
    if (filters.rating > 0) count++
    if (filters.shipping.length > 0) count += filters.shipping.length
    if (filters.moq.length > 0) count += filters.moq.length
    if (filters.badges.length > 0) count += filters.badges.length
    return count
  }, [filters])

  const removeFilter = (type: string, value?: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev }
      if (type === "category" && value) {
        newFilters.categories = newFilters.categories.filter((c) => c !== value)
      } else if (type === "rating") {
        newFilters.rating = 0
      } else if (type === "shipping" && value) {
        newFilters.shipping = newFilters.shipping.filter((s) => s !== value)
      } else if (type === "moq" && value) {
        newFilters.moq = newFilters.moq.filter((m) => m !== value)
      } else if (type === "badge" && value) {
        newFilters.badges = newFilters.badges.filter((b) => b !== value)
      }
      return newFilters
    })
  }

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 1000],
      rating: 0,
      shipping: [],
      moq: [],
      badges: [],
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <AlibabaSearchHeader />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">All Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <AdvancedFilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{filteredAndSortedProducts.length}</span> products
                    found
                  </span>

                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden bg-transparent"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="best-match">Best Match</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="orders">Most Orders</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex items-center gap-1 border rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`}
                    >
                      <Grid3x3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-600">Active filters:</span>
                    {filters.categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => removeFilter("category", cat)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20"
                      >
                        {cat}
                        <span className="text-lg leading-none">&times;</span>
                      </button>
                    ))}
                    {filters.rating > 0 && (
                      <button
                        onClick={() => removeFilter("rating")}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20"
                      >
                        {filters.rating}+ stars
                        <span className="text-lg leading-none">&times;</span>
                      </button>
                    )}
                    {filters.shipping.map((ship) => (
                      <button
                        key={ship}
                        onClick={() => removeFilter("shipping", ship)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20"
                      >
                        {ship === "local" ? "Local Stock" : "Express Shipping"}
                        <span className="text-lg leading-none">&times;</span>
                      </button>
                    ))}
                    {filters.badges.map((badge) => (
                      <button
                        key={badge}
                        onClick={() => removeFilter("badge", badge)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20"
                      >
                        {badge}
                        <span className="text-lg leading-none">&times;</span>
                      </button>
                    ))}
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-gray-600 hover:text-gray-900 underline ml-2"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Filter Sidebar */}
            {showMobileFilters && (
              <div className="lg:hidden mb-4">
                <AdvancedFilterSidebar filters={filters} setFilters={setFilters} />
              </div>
            )}

            {/* Product Grid/List */}
            <ProductListingGrid products={filteredAndSortedProducts} viewMode={viewMode} />

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                ...
              </Button>
              <Button variant="outline" size="sm">
                10
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FloatingActions />
    </main>
  )
}
