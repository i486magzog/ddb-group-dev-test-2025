"use client"

import { DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/helper"
import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

/*********************************************
 * KebabButton v1
 ********************************************/
export function KebabButton() {
  return (
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
    </DisclosureButton>
  )
}

type KebabDropdownMenuProps = {
  navigation: { 
    name: string; 
    href: string; 
    current: boolean
  }[]
}

export function KebabDropdownMenu({ navigation }: KebabDropdownMenuProps) {
  return <DisclosurePanel className="md:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={cn(
            item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          )}
        >
          {item.name}
        </DisclosureButton>
      ))}
    </div>
</DisclosurePanel>
}


/*********************************************
 * KebabMenu v2
 ********************************************/

interface INavigation {
  name: string; 
  href: string; 
}

type KebabMenuProps = { menus: INavigation[] }
type NavigationProps = { menus: INavigation[] }
type PathProps = {
  d?: string
  variants: Variants
  transition?: { duration: number }
}

export function KebabMenu({ menus }: KebabMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)

  return (
    <div>
      <div style={container}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={nav}
        >
          <motion.div style={background} variants={sidebarVariants} />
          {isOpen && <Navigation menus={menus} />}
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </div>
    </div>
  )
}

const Navigation = ({ menus }: NavigationProps) => {
  const pathname = usePathname();
  return (
    <motion.ul style={list} variants={navVariants}>
      {menus?.map((menu, i) => {
        const isActive = pathname === menu.href;
        return (
          <MenuItem menu={menu} key={i} isActive={isActive} />
        )
      })}
    </motion.ul>
  )
}

const MenuItem = ({ menu, isActive }: { menu: INavigation, isActive: boolean }) => {
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div 
        style={{ ...menuText, color: isActive ? "red" : "#ccc" }}
        onClick={() => window.location.href = menu.href}
      >
        {menu.name}
      </div>
    </motion.li>
  )
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 90%)"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

/*********************************************
 * Variants
 *********************************************/

const navVariants = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      },
    }),
  closed: {
    clipPath: "circle(0px at 27px 42px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

/*********************************************
 * Styles
 *********************************************/

const container: React.CSSProperties = {
  // position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  // width: 500,
  // maxWidth: "100%",
  // height: 400,
  backgroundColor: "var(--accent)",
  borderRadius: 20,
  overflow: "hidden",
}

const nav: React.CSSProperties = {
  width: 300,
}

const background: React.CSSProperties = {
  backgroundColor: "#000",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 99999,
}

const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 10,
  left: 15,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
  zIndex: 99999,
}

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  marginLeft: 25,
  position: "absolute",
  top: 80,
  width: 230,
  zIndex: 99999,
}

const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
}

const menuText: React.CSSProperties = {
  color: "#fff",
  borderRadius: 5,
  width: 200,
  height: 40,
  flex: 1,
  fontSize: 24,
}

/*********************************************
 * Utils
 *********************************************/
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
  }, [ref])

  return dimensions.current
}
