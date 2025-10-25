import { HeroMarketplace } from "@/components/hero-marketplace"
import { CategoryCards } from "@/components/category-cards"
import { TailoredSelections } from "@/components/tailored-selections"
import { FeatureBanners } from "@/components/feature-banners"
import { AllProductsGrid } from "@/components/all-products-grid"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroMarketplace />
      <CategoryCards />
      <TailoredSelections />
      <FeatureBanners />
      <AllProductsGrid />
    </main>
  )
}
