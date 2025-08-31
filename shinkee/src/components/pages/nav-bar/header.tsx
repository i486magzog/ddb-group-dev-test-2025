'use client'

import { Disclosure } from '@headlessui/react'
import { BellIcon, BugAntIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/helper'
import { Avatar } from '@/components/pages/nav-bar/avatar'
import { KebabMenu } from '@/components/pages/nav-bar/kebab-menu'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Projects', href: '/projects' },
  { name: 'Calendar', href: '/calendar' },
]

const profileMenu = [
  { name: 'Your profile', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Sign out', href: '#', current: false },
]

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className={cn(
        "relative bg-nav after:pointer-events-none w-full max-w-root mx-auto",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-nav-border"
      )}
    >
      <div className={cn(
        "mx-auto max-w-7xl pr-2",
        "md:px-6"
      )}>
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile menu button*/}
          <div className={cn(
            "absolute inset-y-0 left-0 flex items-center",
            "md:hidden"
          )}>
            <KebabMenu menus={navigation}/>
          </div>

          <div className={cn(
            "flex flex-1 items-center justify-center",
            "md:items-stretch md:justify-center"
          )}>
            <Logo />
            <MenuButtons />
          </div>

          <div className={cn(
            "absolute inset-y-0 right-0 flex items-center pr-2",
            "md:static md:inset-auto md:ml-6 md:pr-0"
          )}>
            <NotificationButton />
            <Avatar navigation={profileMenu} />
          </div>
        </div>
      </div>

    </Disclosure>
  )
}

export const Logo = () => {
  return (
  <div className="relative flex items-center w-[80px] mr-10">
    <motion.img
      src="/logo/boy.png"
      alt="Logo"
      className="absolute w-[80px] h-auto"
      initial={{ x: [0], zIndex: [0] }}
      animate={{ x: [0, 50] }}
      transition={{ 
        duration: 1,
        ease: "easeInOut",
        repeatType: "reverse",
        repeat: Infinity,
        repeatDelay: 1
      }}
      draggable={false}
    />
    <motion.img
      src="/logo/girl.png"
      alt="Logo"
      className="absolute w-[80px] h-auto"
      initial={{ x: [0], zIndex: [1] }}
      animate={{ x: [0, 50], zIndex: [1, 1] }}
      transition={{ 
        duration: 1,
        ease: "easeOut",
        repeatType: "reverse",
        repeat: Infinity,
        delay: .8,
        repeatDelay: 1
      }}
      draggable={false}
    />
  </div>
)}

const MenuButtons = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return <a
            key={item.name}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              isActive ? 'bg-btn-menu-current text-color-menu-current' : 'bg-btn-menu text-color-menu hover:bg-btn-menu-current hover:text-color-menu-current',
              'px-3 py-2 text-sm font-medium rounded-md',
            )}
          >
            {item.name}
          </a>
        })}
      </div>
    </div>
  )
}

const NotificationButton = () => {
  return (
    <button
      type="button"
      className="relative rounded-full p-1 text-gray-400 hover:text-black dark:hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 hover:cursor-pointer"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <BellIcon aria-hidden="true" className="size-6" />
    </button>
  )
}
  