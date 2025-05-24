import { LoadingSkeleton } from "@/components/loading-skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Loading */}
      <section className="bg-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <LoadingSkeleton variant="hero" className="max-w-2xl" />
        </div>
      </section>

      {/* Content Loading */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <LoadingSkeleton variant="card" count={3} />
        </div>
      </section>

      {/* Stats Loading */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 md:px-6">
          <LoadingSkeleton variant="stats" />
        </div>
      </section>
    </div>
  )
}
