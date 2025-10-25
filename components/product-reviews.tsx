"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const mockReviews = [
  {
    id: "1",
    author: "John D.",
    rating: 5,
    date: "2025-01-15",
    comment: "Excellent product! Exceeded my expectations in every way.",
  },
  {
    id: "2",
    author: "Sarah M.",
    rating: 4,
    date: "2025-01-10",
    comment: "Great quality and fast shipping. Very satisfied with my purchase.",
  },
  {
    id: "3",
    author: "Mike R.",
    rating: 5,
    date: "2025-01-05",
    comment: "Absolutely love it! Will definitely buy again.",
  },
]

interface ProductReviewsProps {
  productId: string
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{review.author}</CardTitle>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
