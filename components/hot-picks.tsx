import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HotPicks() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-sm p-6 h-full">
      <h2 className="text-3xl font-bold mb-6">Hot Picks</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <Image
              src="/brown-leather-backpack.png"
              alt="Product"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <Image
              src="/modern-tablet.png"
              alt="Product"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 rounded-xl">View more</Button>
        <div className="flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-900" : "bg-blue-300"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
