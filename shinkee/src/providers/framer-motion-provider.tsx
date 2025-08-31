'use client'

import { AnimatePresence, LayoutGroup, MotionConfig } from 'framer-motion'
import * as React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {/* LayoutGroup enables shared‑element transitions via layoutId across routes */}
      <LayoutGroup id="app">
        {/* AnimatePresence can wrap route regions for page transitions if desired */}
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </LayoutGroup>
    </MotionConfig>
  )
}