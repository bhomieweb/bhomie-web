"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "amber"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
}

export function EnhancedButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  ...props
}: EnhancedButtonProps) {
  const baseClasses = "font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"

  const variants = {
    primary: "bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white",
    outline: "border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:text-white bg-transparent",
    amber: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button className={cn(baseClasses, variants[variant], sizes[size], className)} onClick={onClick} {...props}>
      {children}
    </Button>
  )
}
