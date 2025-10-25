import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Discover Premium Products</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Experience the future of shopping with AI-powered search and curated collections tailored to your style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products?category=new">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
