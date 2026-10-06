'use client'

import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type FlowButtonVariant = 'watermelon' | 'leaf' | 'light'

interface FlowButtonProps {
  text?: string
  href?: string
  external?: boolean
  icon?: LucideIcon
  variant?: FlowButtonVariant
  className?: string
}

const variants: Record<
  FlowButtonVariant,
  { border: string; text: string; hoverText: string; circle: string; arrow: string; icon: string; iconHover: string }
> = {
  watermelon: {
    border: 'border-watermelon/40 hover:border-transparent',
    text: 'text-watermelon-dark',
    hoverText: 'hover:text-white',
    circle: 'bg-watermelon',
    arrow: 'stroke-watermelon-dark group-hover:stroke-white',
    icon: 'text-watermelon',
    iconHover: 'group-hover:text-white',
  },
  leaf: {
    border: 'border-leaf/40 hover:border-transparent',
    text: 'text-leaf-dark',
    hoverText: 'hover:text-white',
    circle: 'bg-leaf',
    arrow: 'stroke-leaf-dark group-hover:stroke-white',
    icon: 'text-leaf',
    iconHover: 'group-hover:text-white',
  },
  light: {
    border: 'border-white/60 hover:border-transparent',
    text: 'text-white',
    hoverText: 'hover:text-watermelon-dark',
    circle: 'bg-white',
    arrow: 'stroke-white group-hover:stroke-watermelon-dark',
    icon: 'text-white',
    iconHover: 'group-hover:text-watermelon-dark',
  },
}

export function FlowButton({
  text = 'Modern Button',
  href,
  external = false,
  icon: Icon,
  variant = 'watermelon',
  className,
}: FlowButtonProps) {
  const v = variants[variant]

  const classes = cn(
    'group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-transparent px-8 py-3 text-sm font-semibold cursor-pointer transition-all duration-600 ease-flow hover:rounded-[12px] active:scale-[0.95]',
    v.border,
    v.text,
    v.hoverText,
    className,
  )

  const content = (
    <>
      {/* Left arrow */}
      <ArrowRight
        className={cn(
          'absolute left-[-25%] z-[9] h-4 w-4 fill-none transition-all duration-800 ease-flow-in group-hover:left-4',
          v.arrow,
        )}
      />

      {/* Icon + Text (move together to make room for the left arrow) */}
      <span className="relative z-[1] flex -translate-x-3 items-center gap-1.5 transition-all duration-800 ease-out group-hover:translate-x-3">
        {Icon ? <Icon className={cn('h-4 w-4 shrink-0', v.icon, v.iconHover)} /> : null}
        <span>{text}</span>
      </span>

      {/* Circle */}
      <span
        className={cn(
          'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-0 transition-all duration-800 ease-flow-out group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100',
          v.circle,
        )}
      ></span>

      {/* Right arrow */}
      <ArrowRight
        className={cn(
          'absolute right-4 z-[9] h-4 w-4 fill-none transition-all duration-800 ease-flow-in group-hover:right-[-25%]',
          v.arrow,
        )}
      />
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  )
}

export default FlowButton
