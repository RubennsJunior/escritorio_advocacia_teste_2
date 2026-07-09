import Link from "next/link"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 font-heading text-foreground",
        className
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/60 text-sm tracking-wide text-primary">
        {siteConfig.initials}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-tight">
          {siteConfig.shortName}
        </span>
        <span className="text-[0.65rem] font-sans tracking-[0.2em] text-muted-foreground uppercase">
          Advocacia
        </span>
      </span>
    </Link>
  )
}
