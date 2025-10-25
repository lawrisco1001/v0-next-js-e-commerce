"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AISearchBar() {
  const [query, setQuery] = useState("")
  const [isAIMode, setIsAIMode] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`)
    }
  }

  return (
    <Card className="p-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={isAIMode ? "Try: 'Show me comfortable running shoes under $100'" : "Search products..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className={`absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 ${isAIMode ? "text-primary" : ""}`}
            onClick={() => setIsAIMode(!isAIMode)}
          >
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>
        <Button type="submit">Search</Button>
      </form>
      {isAIMode && (
        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          AI-powered search enabled - describe what you're looking for naturally
        </p>
      )}
    </Card>
  )
}
