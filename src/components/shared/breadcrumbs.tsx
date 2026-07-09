import Link from "next/link"
import { ChevronRight } from "lucide-react"

import type { Crumb } from "@/lib/breadcrumb"

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-editorial pt-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-foreground">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="size-3" aria-hidden />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
