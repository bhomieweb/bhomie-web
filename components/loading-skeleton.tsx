import { Skeleton } from "@/components/ui/skeleton"

interface LoadingSkeletonProps {
  variant?: "hero" | "card" | "form" | "stats"
  count?: number
  className?: string
}

export function LoadingSkeleton({ variant = "card", count = 1, className = "" }: LoadingSkeletonProps) {
  if (variant === "hero") {
    return (
      <div className={`space-y-6 ${className}`}>
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    )
  }

  if (variant === "stats") {
    return (
      <div className="grid gap-6 md:grid-cols-4 text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-8 w-24 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
        ))}
      </div>
    )
  }

  if (variant === "form") {
    return (
      <div className="border rounded-lg p-6 space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  }

  // Default card variant
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex justify-between">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-8 w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
