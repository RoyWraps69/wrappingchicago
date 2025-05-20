
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand-red text-white hover:bg-red-600 shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-brand-red bg-transparent text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300",
        secondary:
          "bg-brand-navy text-white hover:brightness-125",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-brand-red underline-offset-4 hover:underline",
        navy: "bg-brand-navy text-white hover:brightness-125",
        white: "bg-white text-brand-red hover:bg-gray-100 border border-gray-200",
        outlineWhite: "bg-transparent border-2 border-white text-white hover:bg-white/20",
        outlineNavy: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
        gradient: "bg-gradient-to-r from-brand-red to-red-500 text-white hover:brightness-110 shadow-lg hover:shadow-xl transition-all duration-300",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-full px-5",
        lg: "h-12 rounded-full px-10 py-3 text-base",
        xl: "h-14 rounded-full px-12 py-4 text-lg",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        glow: "hover:animate-glow",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animation?: "none" | "glow";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
