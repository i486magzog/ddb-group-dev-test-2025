import type { Item } from './types'

const GROUPS = ['Fruity', 'Soda', 'Dessert', 'Sour'] as const
const TAGS = ['vegan', 'limited', 'classic', 'sparkling', 'new'] as const

export const ITEMS: Item[] = Array.from({ length: 42 }).map((_, idx) => {
  const id = String(idx + 1)
  const group = GROUPS[idx % GROUPS.length]
  const name = `${group} Bean #${id}`
  return {
    id,
    name,
    group,
    image: `https://picsum.photos/seed/bean-${id}/600/400`,
    description: `A tasty ${group.toLowerCase()}-inspired jelly bean with id ${id}.`,
    tags: [TAGS[idx % TAGS.length], TAGS[(idx + 2) % TAGS.length]],
    ingredients: ['Sugar', 'Corn syrup', 'Natural flavors', 'Color (E129)'],
  }
})

export function findById(id: string) {
  return ITEMS.find((item) => item.id === id)
}

export function searchItems(query: string | undefined) {
  if (!query) return ITEMS
  const s = query.toLowerCase()
  return ITEMS.filter((item) =>
    [item.name, item.group, ...(item.tags ?? [])]
      .filter(Boolean)
      .some((f) => String(f).toLowerCase().includes(s))
  )
}