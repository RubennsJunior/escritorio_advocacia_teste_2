import { Camera } from "lucide-react"

import { cn } from "@/lib/utils"

type ImagePlaceholderProps = {
  caption: string
  className?: string
  tone?: "light" | "dark"
}

/**
 * Stand-in for real photography. Every usage has a matching entry in
 * IMAGE_PROMPTS.md — swap for a next/image once photos are delivered.
 */
export function ImagePlaceholder({
  caption,
  className,
  tone = "light",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={caption}
      className={cn(
        "relative flex w-full items-end overflow-hidden rounded-2xl border",
        tone === "light"
          ? "border-border bg-[linear-gradient(155deg,var(--muted)_0%,var(--secondary)_60%,var(--accent)_100%)]"
          : "border-white/10 bg-[linear-gradient(155deg,#23262a_0%,#1d3a3e_100%)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(135deg,currentColor_0px,currentColor_1px,transparent_1px,transparent_14px)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Camera
          className={cn(
            "size-8 opacity-20",
            tone === "light" ? "text-foreground" : "text-background"
          )}
          strokeWidth={1.25}
        />
      </div>
      <p
        className={cn(
          "relative z-10 m-3 rounded-md px-2.5 py-1 text-xs leading-snug font-medium backdrop-blur-sm",
          tone === "light"
            ? "bg-background/70 text-muted-foreground"
            : "bg-background/10 text-background/80"
        )}
      >
        {caption}
      </p>
    </div>
  )
}
