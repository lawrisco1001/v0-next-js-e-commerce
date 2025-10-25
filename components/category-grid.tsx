import Link from "next/link"
import { Card } from "@/components/ui/card"

const categories = [
  { name: "Electronics", image: "/modern-electronics.jpg", href: "/products?category=electronics" },
  { name: "Fashion", image: "/diverse-fashion-collection.png", href: "/products?category=fashion" },
  { name: "Home & Living", image: "/cozy-living-room.png", href: "/products?category=home" },
  { name: "Sports", image: "/assorted-sports-gear.png", href: "/products?category=sports" },
]

export function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
