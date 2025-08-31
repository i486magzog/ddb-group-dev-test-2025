import { cn } from '@/lib/helper'

export const LoadingImage = () => {
  return (
    <div className="absolute inset-0 grid place-items-center bg-zinc-200 dark:bg-zinc-800">
      <div role="status" aria-live="polite" aria-busy="true" className="flex items-center gap-2">
        <span className="sr-only">Loading image…</span>
        <span aria-hidden="true"
          className={cn(
            "inline-block h-20 w-20 animate-spin rounded-full border-2 border-zinc-400/70 border-t-transparent",
            "dark:border-zinc-600/70 dark:border-t-transparent"
          )}
        />
      </div>
    </div>
  )
}

export const ErrorImage = () => {
  return (
    <div className="h-[300px] inset-0 grid place-items-center bg-zinc-200 dark:bg-zinc-800">
      <span className="text-lg font-bold">Image failed to load</span>
    </div>
  )
}