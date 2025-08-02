
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground border-accent hover:bg-accent/90 shadow-lg hover:shadow-xl font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
        outline:
          "border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80 font-semibold",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
        link: "text-accent underline-offset-4 hover:underline border-transparent font-semibold",
        navy: "bg-foreground text-background border-foreground hover:bg-foreground/90 font-semibold",
        white: "bg-background text-foreground border-border hover:bg-muted font-semibold",
        outlineWhite: "bg-transparent border-background text-background hover:bg-background/20 font-semibold",
        outlineNavy: "border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold",
        gradient: "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground border-accent hover:brightness-110 shadow-lg hover:shadow-xl font-semibold",
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
