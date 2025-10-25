"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export function CartSummary() {
  const { items, total } = useCart()

  const subtotal = total
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.1
  const finalTotal = subtotal + shipping + tax

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold">{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between text-lg">
          <span className="font-bold">Total</span>
          <span className="font-bold">${finalTotal.toFixed(2)}</span>
        </div>
        {subtotal < 50 && (
          <p className="text-xs text-muted-foreground">Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>
        )}
      </CardContent>
      <CardFooter>
        <Link href="/checkout" className="w-full">
          <Button size="lg" className="w-full" disabled={items.length === 0}>
            Proceed to Checkout
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
