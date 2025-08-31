"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ " // Space included

type TextCounterProps = {
  text?: string
  className?: string
  style?: React.CSSProperties
}

export default function TextCounter({ 
  text = "HELLO WORLD", 
  className = "",
  style,
}: TextCounterProps) {

  const count = useMotionValue(0)
  const display = useTransform(() => {
    const latest = count.get()          // 0 ~ 100
    const p = latest / 100              // 0 ~ 1
    const reveal = Math.floor(p * (text.length + 1))

    let out = ""
    for (let i = 0; i < text.length; i++) {
      if (i < reveal) {
        out += text[i]
      } else {
        const idx = Math.floor(latest + i * 7) % ALPHABET.length
        out += ALPHABET[idx]
      }
    }
    return out
  })

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 })
    return () => controls.stop()
  }, [])

  return (
    <motion.pre 
      className={className}
      style={{...textStyle, ...style}}
    >
      {display}
    </motion.pre>
  )
}

const textStyle: React.CSSProperties = {
  fontSize: "2rem",
  color: "#AAA",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  letterSpacing: "0.06em",
  textAlign: "center",
}

// const classes = {
//   text: "font-mono text-[64px] text-[#8df0cc] tracking-[0.06em]",
// } as const
