'use client'

import { ButtonBase } from "@/components/ui/buttons";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="rounded-2xl max-w-root w-full m-10 p-20 bg-amber-200 self-center">
      <h2 className="text-header3 font-semibold">Something went wrong</h2>
      <p className="mt-2 text-body-base opacity-80 my-4">{error.message}</p>
      <ButtonBase onClick={reset}>
        Try again
      </ButtonBase>
    </div>
  )
}