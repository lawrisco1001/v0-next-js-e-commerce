import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function TopDeals() {
  const deals = [
    {
      name: "Premium Wireless Headphones",
      price: "$299.99",
      image: "yellow headphones",
      badge: "Flash Deal",
    },
    {
      name: "Smart Watch Pro",
      price: "$399.99",
      image: "smart watch",
      badge: null,
    },
    {
      name: "Designer Leather Jacket",
      price: "$249.99",
      image: "leather jacket",
      badge: null,
    },
    {
      name: "Modern Coffee Table",
      price: "$189.99",
      image: "coffee table",
      badge: null,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Top Deals</h2>
          <p className="text-gray-600">Score the lowest prices on MarketHub.com</p>
        </div>
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
          View more
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {deals.map((deal, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
              {deal.badge && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <span>⚡</span>
                  {deal.badge}
                </div>
              )}
              <Image
                src={`/.jpg?height=300&width=300&query=${deal.image}`}
                alt={deal.name}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="font-medium text-sm mb-1 line-clamp-2">{deal.name}</h3>
            <p className="text-lg font-bold">{deal.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
