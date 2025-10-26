"use client"

import { MessageCircle, Camera, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-200 p-0"
        title="Messenger"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-200 p-0"
        title="Alibaba Lens"
      >
        <Camera className="w-6 h-6" />
      </Button>

      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-lg border border-gray-200 p-0"
        title="Survey"
      >
        <FileText className="w-6 h-6" />
      </Button>
    </div>
  )
}
