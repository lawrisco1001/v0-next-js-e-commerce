import { Shield, Truck, RotateCcw, CreditCard } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "100% secure payment",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center">
              <badge.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
