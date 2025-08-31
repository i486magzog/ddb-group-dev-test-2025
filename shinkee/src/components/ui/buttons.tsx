import { cn } from "@/lib/helper";
import { Button } from '@headlessui/react'
import { ArrowRightIcon } from "@heroicons/react/24/outline"

interface IButtonProps{
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  className?: string
  label?: string
  children?: React.ReactNode
  onClick?: () => void
}

export const ButtonHero = ({ startIcon, endIcon, className, label, children, ...props }: IButtonProps) => {
  return <Button className={cn("hover:cursor-pointer rounded px-4 py-4 text-body-base border border-[#000]", className)} {...props}>
    <div className="flex flex-row items-center gap-2 hover:cursor-pointer justify-center">
      {startIcon}
      {label} {children}
      {endIcon}
    </div>
  </Button>;
}

export const ButtonArrow = ({ startIcon, endIcon, className, label, children, ...props }: IButtonProps) => {
  return <Button className={cn("hover:cursor-pointer", className)} {...props}>
    <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
      {startIcon} 
      {label} {children} 
      <ArrowRightIcon className="w-5 h-5" /> 
      {endIcon}
    </div>
  </Button>;
}

export const ButtonBase = ({ startIcon, endIcon, className, label, children, ...props }: IButtonProps) => {
  return <Button className={cn("", className)} {...props}>
    <div className={cn(
      "mt-4 rounded-xl bg-zinc-900 px-4 py-2 text-white", 
      "dark:bg-zinc-100 dark:text-zinc-900", 
      "hover:cursor-pointer hover:bg-zinc-600"
    )}>
      {startIcon}
      {label} {children}
      {endIcon}
    </div>
  </Button>;
}
