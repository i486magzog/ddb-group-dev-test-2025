import { SkeletonCard } from "@/components/pages/gallery/item-card";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 max-w-root w-full mx-auto my-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}