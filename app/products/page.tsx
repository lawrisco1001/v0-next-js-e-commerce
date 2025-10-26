import { AlibabaSearchHeader } from "@/components/alibaba-search-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { BrowsingHistory } from "@/components/browsing-history"
import { KeepLookingFor } from "@/components/keep-looking-for"
import { HotPicks } from "@/components/hot-picks"
import { FeatureBanners } from "@/components/feature-banners"
import { TopDeals } from "@/components/top-deals"
import { FloatingActions } from "@/components/floating-actions"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AlibabaSearchHeader />

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Welcome to MarketHub.com</h1>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">Accio AI</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="font-medium">Request for Quotation</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <span className="font-medium">Fast customization</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <CategorySidebar />

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <BrowsingHistory />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <KeepLookingFor title="Drones" />
                <KeepLookingFor title="Used Digital Cameras" />
              </div>
              <div>
                <HotPicks />
              </div>
            </div>

            <FeatureBanners />

            <TopDeals />
          </div>
        </div>
      </div>

      <FloatingActions />
    </main>
  )
}
