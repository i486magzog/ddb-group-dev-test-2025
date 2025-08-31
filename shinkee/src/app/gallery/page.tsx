import SearchBar from '@/components/pages/gallery/search-bar'
import Pagination from '@/components/pages/gallery/pagenation'
import ItemGrid from '@/components/pages/gallery/item-grid'
import { searchItems } from '@/lib/data'
import { GALLERY_PAGE_SIZE } from '@/lib/constants'

type SearchParams = Promise<{ query?: string; page?: string }>

export default async function GalleryPage({ searchParams }: { searchParams: SearchParams }) {
  const { query, page } = await searchParams
  const pageNum = Math.max(1, Number(page ?? '1'))

  const all = searchItems(query)
  const total = all.length
  const start = (pageNum - 1) * GALLERY_PAGE_SIZE
  const items = all.slice(start, start + GALLERY_PAGE_SIZE)

  return (
    <main className="flex flex-col gap-8 max-w-root w-full mx-auto mb-10 p-8">
      <SearchBar />
      <ItemGrid items={items} />
      <Pagination total={total} page={pageNum} pageSize={GALLERY_PAGE_SIZE} />
    </main>
  )
}