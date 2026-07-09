import { Camera } from "lucide-react"

import { cn } from "@/lib/utils"

type ImagePlaceholderProps = {
  caption: string
  className?: string
}

/**
 * Stand-in for real photography. Every usage has a matching entry in
 * IMAGE_PROMPTS.md — swap for a next/image once photos are delivered.
 */
export function ImagePlaceholder({ caption, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={caption}
      className={cn(
        "relative flex w-full items-end overflow-hidden rounded-2xl border border-border bg-[linear-gradient(155deg,var(--muted)_0%,var(--secondary)_60%,var(--accent)_100%)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(135deg,currentColor_0px,currentColor_1px,transparent_1px,transparent_14px)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Camera className="size-8 text-foreground opacity-20" strokeWidth={1.25} />
      </div>
      <p className="relative z-10 m-3 rounded-md bg-background/70 px-2.5 py-1 text-xs leading-snug font-medium text-muted-foreground backdrop-blur-sm">
        {caption}
      </p>
    </div>
  )
}
