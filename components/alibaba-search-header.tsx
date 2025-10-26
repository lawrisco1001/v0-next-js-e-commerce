"use client"

import { useState } from "react"
import { Search, Camera, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function AlibabaSearchHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [deepSearchEnabled, setDeepSearchEnabled] = useState(false)

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
    <div className="bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <div className="flex items-center gap-4">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-6">
              {/* Deep Search Toggle */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Deep Search</span>
                </div>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Free</span>
                <Switch checked={deepSearchEnabled} onCheckedChange={setDeepSearchEnabled} />
              </div>

              {/* Image Search */}
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Camera className="w-5 h-5" />
                <span className="font-medium">Image Search</span>
              </button>
            </div>

            {/* Search Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Frequently Searched */}
        <div className="flex items-center gap-4 text-white">
          <span className="font-semibold">Frequently searched:</span>
          <div className="flex flex-wrap gap-3">
            {trendingSearches.map((term) => (
              <button key={term} className="hover:underline transition-all">
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
