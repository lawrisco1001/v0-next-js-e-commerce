import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { AICopilot } from "@/components/ai-copilot"
import "./globals.css"

const _playfairDisplay = Playfair_Display({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apex Commerce - Premium Shopping Experience",
  description: "Discover premium products with AI-powered search and seamless shopping",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_inter.className}`}>
        <CartProvider>
          <Header className={_playfairDisplay.className} />
          {children}
          <Footer />
          <AICopilot />
          <Toaster />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
