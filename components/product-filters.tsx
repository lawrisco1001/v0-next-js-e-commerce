"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const categories = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
  { value: "home", label: "Home & Living" },
  { value: "sports", label: "Sports" },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all")

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedCategory !== "all") {
      params.set("category", selectedCategory)
    } else {
      params.delete("category")
    }

    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())

    router.push(`/products?${params.toString()}`)
  }

  const resetFilters = () => {
    setSelectedCategory("all")
    setPriceRange([0, 1000])
    router.push("/products")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-semibold mb-3 block">Category</Label>
          <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
            {categories.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <RadioGroupItem value={category.value} id={category.value} />
                <Label htmlFor={category.value} className="cursor-pointer">
                  {category.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-semibold mb-3 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <Slider min={0} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} className="mt-2" />
        </div>

        <div className="space-y-2">
          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
          <Button onClick={resetFilters} variant="outline" className="w-full bg-transparent">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
