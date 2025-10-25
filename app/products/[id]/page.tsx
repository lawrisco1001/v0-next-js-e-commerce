import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"
import { ProductReviews } from "@/components/product-reviews"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <ProductDetail productId={params.id} />
        <ProductReviews productId={params.id} />
        <RelatedProducts productId={params.id} />
      </div>
    </main>
  )
}
