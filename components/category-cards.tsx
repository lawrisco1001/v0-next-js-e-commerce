import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Electronics",
    count: "12,563 products",
    image: "/modern-smartphone-on-blue-gradient-background.jpg",
    gradient: "from-cyan-400 to-blue-500",
    href: "/products?category=electronics",
  },
  {
    name: "Fashion",
    count: "8,932 products",
    image: "/clothing-rack-with-colorful-clothes-on-pink-gradie.jpg",
    gradient: "from-pink-400 to-purple-500",
    href: "/products?category=fashion",
  },
  {
    name: "Home & Living",
    count: "6,127 products",
    image: "/modern-minimalist-furniture-on-coral-gradient.jpg",
    gradient: "from-orange-300 to-pink-400",
    href: "/products?category=home",
  },
]

export function CategoryCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-gray-600">Browse our wide selection of products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-8 h-64 group cursor-pointer transition-transform hover:scale-[1.02]`}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{category.count}</p>
                  <div className="inline-flex items-center text-white font-medium group-hover:gap-2 transition-all">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
                  <img src={category.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
