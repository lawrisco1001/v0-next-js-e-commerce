"use client"

import Link from "next/link"
import { ShoppingCart, Search, User, Camera, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { Input } from "@/components/ui/input"

export function Header() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const trendingSearches = [
    "iphones 15 pro max",
    "labubu",
    "watch",
    "electric bike",
    "women's intimates",
    "electric scooter",
    "cars",
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">MarketHub</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="flex-1 max-w-3xl hidden md:flex items-center gap-2">
              {/* Deep Search Button */}
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50 whitespace-nowrap"
              >
                <Zap className="h-4 w-4 fill-orange-600" />
                <span className="font-medium">Deep Search</span>
              </Button>

              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 pr-4 w-full h-10 border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Image Search Button */}
              <Button
                variant="outline"
                className="flex items-center gap-2 whitespace-nowrap border-gray-300 bg-transparent"
              >
                <Camera className="h-4 w-4" />
                <span className="font-medium">Image Search</span>
              </Button>

              {/* Search Button */}
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Search</Button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-4">
              <Link href="/products" className="hidden lg:block text-sm font-medium text-gray-700 hover:text-primary">
                Products
              </Link>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/login">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-10 text-sm overflow-x-auto scrollbar-hide">
            <span className="font-semibold mr-4 whitespace-nowrap">Frequently searched:</span>
            <div className="flex items-center gap-4">
              {trendingSearches.map((term, index) => (
                <Link
                  key={index}
                  href={`/products?search=${encodeURIComponent(term)}`}
                  className="hover:underline whitespace-nowrap"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
