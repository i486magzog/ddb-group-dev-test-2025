import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { randomNum } from "@/lib/helper"

type EdgePopinProps = {
  className?: string
  distanceFromMiddle?: number
  edge?: "left" | "right" | "top" | "bottom"
  isPopin?: boolean
  delay?: number,
  isRandomPopin?: boolean
  children: React.ReactNode,
}

export default function EdgePopin({ 
  className, 
  children, 
  distanceFromMiddle = 0, 
  edge = "bottom", 
  isPopin = true,
  delay = 0,
  isRandomPopin = true
}: EdgePopinProps) {

  return (
    <motion.div
      style={{
        ...container,
        transform: edge === "top" || edge === "bottom" 
          ? `translateX(calc(-50% + ${distanceFromMiddle}px))` 
          : `translateY(calc(-50% + ${distanceFromMiddle}px))`,
        left: edge === "left" 
          ? 0
          : edge === "right" 
            ? undefined 
            : "50%",
        top: edge === "top" 
          ? 0
          : edge === "bottom" 
            ? undefined 
            : "50%",
        right: edge === "right" 
          ? 0
          : edge === "left" 
            ? undefined 
            : "50%",
        bottom: edge === "bottom" 
          ? 0
          : edge === "top" 
            ? undefined 
            : "50%",
      }}
      className={className}
      initial={false}
      animate={ isPopin
        ? { // Show immediately
            opacity: 1,
            display: "block",
            transition: { duration: 0 },
          }
        : { // Hide after 1 second
            opacity: 0,
            transition: { delay: 1, duration: 0 },
            transitionEnd: { display: "none" },
          }
      }
    >
      <Card isPopin={isPopin} edge={edge} delay={delay} isRandomPopin={isRandomPopin}>
        {children}
      </Card>
    </motion.div>
  )
}

interface CardProps {
    children: React.ReactNode
    isPopin: boolean
    edge: "left" | "right" | "top" | "bottom"
    delay: number
    isRandomPopin: boolean
}

function Card({ children, isPopin, edge, isRandomPopin, delay}: CardProps) {
  
  const cardDelay = isRandomPopin 
    ? Number(randomNum(0, 1, 2)) 
    : delay
  
  const cardVariants: Variants = {
    offscreenleft: { x: -600, transition: { type: "spring", bounce: 0.4, duration: 1, delay: cardDelay } },
    offscreenright: { x: 600, transition: { type: "spring", bounce: 0.4, duration: 1, delay: cardDelay } },
    offscreentop: { y: -600, rotate: 180, transformOrigin: "50% 0%", transition: { type: "spring", bounce: 0.4, duration: 1, delay: cardDelay } },
    offscreenbottom: { y: 600, transition: { type: "spring", bounce: 0.4, duration: 1, delay: cardDelay } },
    onscreenbottom: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: cardDelay
      },
    },
    onscreentop: {
      y: 350,
      rotate: 180 + 10,
      transformOrigin: "50% 0%",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: cardDelay
      },
    },
    onscreenleft: {
      x: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: cardDelay
      },
    },
    onscreenright: {
      x: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: cardDelay
      },
    },
  }

  return (
    <motion.div
      className={`card-container`}
      style={cardContainer}
      initial={isPopin ? "offscreen"+edge : "onscreen"+edge}
      animate={isPopin ? "onscreen"+edge : "offscreen"+edge}
      transition={{
        type: "spring",
        bounce: 0.4,
        duration: .8,
      }}
    >   
      <motion.div 
        style={card} 
        variants={cardVariants}
        className="card scale-[1.2]"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/**********************************************
 * Styles 
 ********************************************/

const container: React.CSSProperties = {
  position: "fixed",
  maxWidth: 500,
  width: "100%",
  zIndex: 100,
}

const cardContainer: React.CSSProperties = {
  // overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
}

const card: React.CSSProperties = {
  // width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "bottom",
  background: "transparent",
  transformOrigin: "50% 100%",
}