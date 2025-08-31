import Link from 'next/link'
import { cn } from '@/lib/helper'

export default function Pagination({ total, page, pageSize }: { total: number; page: number; pageSize: number }) {
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  if (pageCount <= 1) return null

  const makeHref = (p: number) => {
    const sp = new URLSearchParams(typeof window === 'undefined' ? '' : window.location.search)
    sp.set('page', String(p))
    return `?${sp.toString()}`
  }

  return (
    <nav className="mt-6 flex items-center justify-center gap-2" aria-label="Pagination">
      
      <Link className={cn(
          "rounded-lg px-3 py-1.5 text-sm opacity-80",
          "hover:opacity-100 hover:text-black dark:hover:text-white"
        )}
        href={makeHref(Math.max(1, page - 1))}
        aria-disabled={page === 1}
      >
        Prev
      </Link>

      {Array.from({ length: pageCount }).map((_, i) => {
        const p = i + 1
        const active = p === page
        return (
          <Link
            key={p}
            href={makeHref(p)}
            className={`rounded-lg px-3 py-1.5 text-sm ${active 
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
              : 'border opacity-80 hover:opacity-100 hover:bg-zinc-100 hover:text-gray-900'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {p}
          </Link>
        )
      })}
      
      <Link className={cn(
          "rounded-lg px-3 py-1.5 text-sm opacity-80",
          "hover:opacity-100 hover:text-black dark:hover:text-white"
        )}
        href={makeHref(Math.min(pageCount, page + 1))}
        aria-disabled={page === pageCount}
      >
        Next
      </Link>

    </nav>
  )
}