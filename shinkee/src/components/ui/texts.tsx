import { cn } from "@/lib/helper";

type TextProps = {
  className?: string
  children?: React.ReactNode
}

export const TextH1 = ({ className, children }: TextProps) => {
  return (  
    <h1 className={cn("text-header1", className)}>
      {children}
    </h1>
  )
}

export const TextH2 = ({ className, children }: TextProps) => {
  return (
    <h2 className={cn("text-header2", className)}>
      {children}
    </h2>
  )
}

export const TextH3 = ({ className, children }: TextProps) => {
  return (
    <h3 className={cn("text-header3", className)}>
      {children}
    </h3>
  )
}

export const TextBodyLg = ({ className, children }: TextProps) => {
  return (
    <span className={cn("text-body-lg", className)}>
      {children}
    </span>
  )
}

export const TextBodyBase = ({ className, children }: TextProps) => {
  return (
    <span className={cn("text-body-base", className)}>
      {children}
    </span>
  )
}

export const TextBodySm = ({ className, children }: TextProps) => {
  return (
    <span className={cn("text-body-sm", className)}>
      {children}
    </span>
  )
}