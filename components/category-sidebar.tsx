import { Star, User, Headphones, Dumbbell, Sparkles, Diamond, ChevronRight } from "lucide-react"

const categories = [
  { icon: Star, label: "Categories for you" },
  { icon: User, label: "Apparel & Accessories" },
  { icon: Headphones, label: "Consumer Electronics" },
  { icon: Dumbbell, label: "Sports & Entertainment" },
  { icon: Sparkles, label: "Beauty" },
  { icon: Diamond, label: "Jewelry, Eyewear & Watches" },
]

export function CategorySidebar() {
  return (
    <aside className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <button
              key={index}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          )
        })}
      </div>
    </aside>
  )
}
