import { ProductCard } from "./product-card"
import type { Product } from "@/lib/types"
import { Star, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"

interface ProductListingGridProps {
  products: Product[]
  viewMode: "grid" | "list"
}

export function ProductListingGrid({ products, viewMode }: ProductListingGridProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <p className="text-gray-500 text-lg">No products found matching your filters.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria.</p>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-2">
                        {product.badge && (
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded ${
                              product.badge === "BEST SELLER"
                                ? "bg-purple-100 text-purple-700"
                                : product.badge === "HOT"
                                  ? "bg-red-100 text-red-700"
                                  : product.badge === "NEW"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {product.badge}
                          </span>
                        )}
                        {product.isLocal && (
                          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">
                            Local
                          </span>
                        )}
                        {product.isFlashDeal && (
                          <span className="px-2 py-1 text-xs font-semibold bg-red-600 text-white rounded">
                            Flash Deal
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary">{product.name}</h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                      {/* Rating & Reviews */}
                      {product.rating && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating!) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      )}

                      {/* Additional Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {product.soldCount && (
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{product.soldCount}+ sold</span>
                          </div>
                        )}
                        {product.moq && <span>MOQ: {product.moq} piece</span>}
                        {product.deliveryDate && <span className="text-green-600">{product.deliveryDate}</span>}
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-1">${product.price.toFixed(2)}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through mb-1">
                          ${product.originalPrice.toFixed(2)}
                        </div>
                      )}
                      {product.moq && <div className="text-xs text-gray-500">Min. order: {product.moq} piece</div>}
                      <button className="mt-3 w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        Contact Supplier
                      </button>
                    </div>
                  </div>

                  {/* Supplier Info */}
                  {product.supplier && (
                    <div className="mt-auto pt-3 border-t flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{product.supplier.name}</span>
                      <span className="text-gray-400">•</span>
                      <span>{product.supplier.yearsOnAlibaba} yrs</span>
                      <span className="text-gray-400">•</span>
                      <span>{product.supplier.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant="alibaba" />
      ))}
    </div>
  )
}
