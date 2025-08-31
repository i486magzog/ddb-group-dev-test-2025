'use client'

import { motion } from 'framer-motion'
import type { Item } from '@/lib/types'

export function ItemDetails({ item }: { item: Item }) {
  return (
    <motion.section layoutId={`card-${item.id}`} className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-zinc-900">
      <img src={item.image} alt={item.name} className="h-auto w-full object-cover" />
      <div className="p-5">
        <h1 className="text-xl font-semibold">{item.name}</h1>
        <p className="mt-1 text-sm opacity-70">{item.group}</p>
        {item.description && <p className="mt-4 leading-relaxed opacity-90">{item.description}</p>}
        {item.ingredients && (
          <ul className="mt-4 flex flex-wrap gap-2 text-xs opacity-80">
            {item.ingredients.map((ing, i) => (
              <li key={i} className="rounded-full border px-2 py-0.5">{ing}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  )
}