'use client'

import Link from 'next/link'
import type { Item } from '@/lib/types'
import Image from 'next/image'

export default function ItemCard({ item }: { item: Item }) {
  return (
    <article className="relative group overflow-hidden rounded-2xl bg-gray-100 transition dark:bg-zinc-900">
      <Link href={`/gallery/items/${item.id}`}
        className="block shiny">
        
        <Image 
          src={item.image ?? ''} 
          alt={item.name} 
          className="h-100 w-full object-cover" 
          width={600} height={400} 
        />

        <div className="absolute inset-0 z-10 flex items-end bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/60 group-hover:opacity-100">
          <div className="w-full p-4 text-white pointer-events-none">
            <h3 className="text-base font-semibold">{item.name}</h3>
            <p className="mt-1 text-sm opacity-90">{item.group ?? '—'}</p>
            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((t, i) => (
                  <span key={item.id+i+t} className="rounded-full border border-white/40 px-2 py-0.5 text-xs text-white/90">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

      </Link>

    </article>
  )
}

export function SkeletonCard() {
  return (
    <div className="animate-pulse border border-zinc-200 rounded-2xl bg-white/40 p-4 dark:bg-zinc-900/50">
      <div className="h-100 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-4 h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-2 h-3 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800" />
    </div>
  )
}