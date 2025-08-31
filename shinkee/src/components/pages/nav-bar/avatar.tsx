import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

interface AvatarProps {
  navigation: { 
    name: string; 
    href: string; 
    current: boolean 
  }[]
}

export function Avatar({ navigation }: AvatarProps) { 
  return (
    <Menu as="div" className="relative ml-3 hover:cursor-pointer">
      <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:cursor-pointer">
        <AvatarRoundImage />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#333] py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {navigation.map((item) => (
          <MenuItem key={item.name}>    
            <a href={item.href}
              className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

export function AvatarRoundImage() {
  return (
    <img
      alt=""
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
    />
  )
}