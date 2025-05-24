import { LoadingSkeleton } from "@/components/loading-skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 md:px-6 py-8">
        <div className="mb-8">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <LoadingSkeleton variant="form" />
          </div>
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="flex gap-2">
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <LoadingSkeleton variant="card" count={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
