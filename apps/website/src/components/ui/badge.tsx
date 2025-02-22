import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        celestial: "bg-ranks-celestial text-ranks-celestial-foreground",
        immortal: "bg-ranks-immortal text-ranks-immortal-foreground",
        emperor: "bg-ranks-emperor text-ranks-emperor-foreground",
        shogun: "bg-ranks-shogun text-ranks-shogun-foreground",
        samurai: "bg-ranks-samurai text-ranks-samurai-foreground",
        pancake: "bg-ranks-pancake text-ranks-pancake-foreground",
        cherry: "bg-servers-cherry text-servers-cherry-foreground",
        spirit: "bg-servers-spirit text-servers-spirit-foreground",
        lotus: "bg-servers-lotus text-servers-lotus-foreground",
        tulip: "bg-servers-tulip text-servers-tulip-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
