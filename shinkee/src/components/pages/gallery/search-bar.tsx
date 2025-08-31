'use client'

import { cn } from '@/lib/helper'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [searchValue, setSearchValue] = useState(searchParams.get('query') ?? '')

  useEffect(() => {
    setSearchValue(searchParams.get('query') ?? '')
  }, [searchParams])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    
    if (searchValue) params.set('query', searchValue)
    else params.delete('query')
    
    params.set('page', '1')
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-0">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by name, group, tag..."
        className={cn(
          "flex-1 rounded-l-xl bg-gray-200 text-gray-900 px-6 py-2",
          "focus:outline-none focus:ring-zinc-400",
          "dark:bg-zinc-900 dark:text-white"
        )}
        aria-label="Search"
      />

      <button 
        type="submit" 
        className={cn("rounded-r-xl bg-[#999]  px-4 py-2 text-white",
          "dark:bg-gray-600 dark:text-white",
          "hover:bg-[#666] hover:cursor-pointer"
        )}
      >
        Search
      </button>
    </form>
  )
}