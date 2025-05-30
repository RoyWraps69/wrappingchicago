
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2",
  {
    variants: {
      variant: {
        default: "bg-brand-red text-white border-brand-red hover:bg-red-600 hover:border-red-600 shadow-lg hover:shadow-xl font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
        outline:
          "border-brand-navy bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white font-semibold",
        secondary:
          "bg-brand-navy text-white border-brand-navy hover:bg-gray-800 hover:border-gray-800 font-semibold",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
        link: "text-brand-red underline-offset-4 hover:underline border-transparent font-semibold",
        navy: "bg-brand-navy text-white border-brand-navy hover:bg-gray-800 hover:border-gray-800 font-semibold",
        white: "bg-white text-brand-navy border-gray-300 hover:bg-gray-100 hover:border-gray-400 font-semibold",
        outlineWhite: "bg-transparent border-white text-white hover:bg-white/20 hover:border-white font-semibold",
        outlineNavy: "border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold",
        gradient: "bg-gradient-to-r from-brand-red to-red-500 text-white border-brand-red hover:brightness-110 shadow-lg hover:shadow-xl font-semibold",
      },
      size: {
        default: "h-11 px-8 py-2 text-sm",
        sm: "h-9 rounded-full px-5 text-sm",
        lg: "h-12 rounded-full px-10 py-3 text-base font-semibold",
        xl: "h-14 rounded-full px-12 py-4 text-lg font-semibold",
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
