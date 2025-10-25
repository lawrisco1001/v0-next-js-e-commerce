import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">Review your items before checkout</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>

          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
