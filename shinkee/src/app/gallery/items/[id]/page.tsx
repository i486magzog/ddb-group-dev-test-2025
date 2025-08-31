import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ITEMS, findById } from '@/lib/data'
import type { Item } from '@/lib/types'
import { Suspense } from 'react'
import { ItemDetails } from '../../../../components/pages/gallery/item-details'
import { cn } from '@/lib/helper'

export default async function ItemDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = findById(id)
  if (!item) return notFound()
  const related = getRelated(item)

  return (
    <main className="flex flex-col gap-8 max-w-root w-full mx-auto mb-10 p-8">
      <Link href="/gallery" className={cn(
        "inline-block rounded-xl bg-gray-200 px-3 py-2.5 text-sm opacity-80 transition hover:opacity-10",
        "dark:bg-[#333] dark:text-white dark:hover:text-white hover:opacity-100"
      )}>← Back to list</Link>

      <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />}>
        <ItemDetails item={item} />
      </Suspense>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Related</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link key={r.id} href={`/items/${r.id}`} className="rounded-2xl bg-gray-200 dark:bg-[#333] p-3 transition hover:bg-gray-100 dark:hover:bg-zinc-900/50">
              <div className="text-sm font-medium">{r.name}</div>
              <div className="text-xs opacity-70">{r.group}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

function getRelated(item: Item): Item[] {
  // Synthesized related content: same group, otherwise next 6 deterministic picks
  const byGroup = ITEMS.filter((x) => x.group === item.group && x.id !== item.id).slice(0, 6)
  if (byGroup.length) return byGroup
  return ITEMS.filter((x) => x.id !== item.id).slice(0, 6)
}