import ItemCard from '@/components/pages/gallery/item-card'
import type { Item } from '@/lib/types'

export default function ItemGrid({ items }: { items: Item[] }) {
  if (!items.length) {
    return (
      <div className="rounded-2xl max-w-root w-full m-10 p-20 bg-amber-200 self-center">
        <div>
          <div className="text-3xl">🔍</div>
          <h2 className="mt-2 text-lg font-semibold">No results</h2>
          <p className="opacity-70">Try a different search or clear filters.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}