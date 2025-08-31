import { JSX } from "react"

export type FullViewportProps = {
  /** HTML element to render as (section/div/main, etc.) */
  as?: keyof JSX.IntrinsicElements
  /** Center children with flexbox (both axes) */
  center?: boolean
  /** Allow internal scrolling (auto). Default: false (hidden) */
  scroll?: boolean
  /** Fixed overlay that truly covers the screen */
  fixed?: boolean
  /** Extra class names */
  className?: string
  /** Inline style extension */
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function FullViewport({
  as: Tag = "section",
  center = true,
  scroll = false,
  fixed = false,
  className = "",
  style,
  children,
}: FullViewportProps) {
  const base = fixed ? "fixed inset-0" : "w-full min-h-screen"
  const layout = [
    base,
    center && "flex items-center justify-center",
    scroll ? "overflow-auto" : "overflow-hidden",
    "px-4 py-4 sm:px-6 sm:py-8",
    className,
  ]
  .filter(Boolean)
  .join(" ")

  return (
    <Tag
      className={layout}
      style={{
        minHeight: "100dvh",
        // iOS safe areas (works even if 0 on non-notch devices)
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
