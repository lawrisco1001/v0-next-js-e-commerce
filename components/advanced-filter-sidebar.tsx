"use client"

import type React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Star, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface FilterSidebarProps {
  filters: {
    categories: string[]
    priceRange: [number, number]
    rating: number
    shipping: string[]
    moq: string[]
    badges: string[]
  }
  setFilters: React.Dispatch<React.SetStateAction<FilterSidebarProps["filters"]>>
}

export function AdvancedFilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    rating: true,
    shipping: true,
    moq: true,
    badges: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      categories: checked ? [...prev.categories, category] : prev.categories.filter((c) => c !== category),
    }))
  }

  const handleShippingChange = (shipping: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      shipping: checked ? [...prev.shipping, shipping] : prev.shipping.filter((s) => s !== shipping),
    }))
  }

  const handleMOQChange = (moq: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      moq: checked ? [...prev.moq, moq] : prev.moq.filter((m) => m !== moq),
    }))
  }

  const handleBadgeChange = (badge: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      badges: checked ? [...prev.badges, badge] : prev.badges.filter((b) => b !== badge),
    }))
  }

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>

        {/* Category Filter */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("category")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-medium">Category</span>
            {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.category && (
            <div className="px-4 pb-4 space-y-3">
              {["electronics", "fashion", "sports", "home"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cat-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={`cat-${category}`} className="capitalize cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("price")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-medium">Price Range</span>
            {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.price && (
            <div className="px-4 pb-4">
              <Slider
                min={0}
                max={1000}
                step={10}
                value={filters.priceRange}
                onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value as [number, number] }))}
                className="mb-4"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("rating")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-medium">Rating</span>
            {expandedSections.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.rating && (
            <div className="px-4 pb-4 space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters((prev) => ({ ...prev, rating: prev.rating === rating ? 0 : rating }))}
                  className={`w-full flex items-center gap-2 p-2 rounded hover:bg-gray-50 ${filters.rating === rating ? "bg-primary/10" : ""}`}
                >
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">& Up</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Shipping Options */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("shipping")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-medium">Shipping</span>
            {expandedSections.shipping ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.shipping && (
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ship-local"
                  checked={filters.shipping.includes("local")}
                  onCheckedChange={(checked) => handleShippingChange("local", checked as boolean)}
                />
                <Label htmlFor="ship-local" className="cursor-pointer">
                  Local Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ship-express"
                  checked={filters.shipping.includes("express")}
                  onCheckedChange={(checked) => handleShippingChange("express", checked as boolean)}
                />
                <Label htmlFor="ship-express" className="cursor-pointer">
                  Express Shipping
                </Label>
              </div>
            </div>
          )}
        </div>

        {/* MOQ Filter */}
        <div className="border-b">
          <button
            onClick={() => toggleSection("moq")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-medium">MOQ</span>
            {expandedSections.moq ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.moq && (
            <div className="px-4 pb-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="moq-1"
                  checked={filters.moq.includes("1")}
                  onCheckedChange={(checked) => handleMOQChange("1", checked as boolean)}
                />
                <Label htmlFor="moq-1" className="cursor-pointer">
                  1 piece
                </Label>
              </div>
            </div>
          )}
        </div>

        {/* Badges Filter */}
        <div>
          <button
            onClick={() => toggleSection("badges")}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <span className="font-medium">Special Offers</span>
            {expandedSections.badges ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.badges && (
            <div className="px-4 pb-4 space-y-3">
              {["BEST SELLER", "HOT", "NEW"].map((badge) => (
                <div key={badge} className="flex items-center space-x-2">
                  <Checkbox
                    id={`badge-${badge}`}
                    checked={filters.badges.includes(badge)}
                    onCheckedChange={(checked) => handleBadgeChange(badge, checked as boolean)}
                  />
                  <Label htmlFor={`badge-${badge}`} className="cursor-pointer">
                    {badge}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
