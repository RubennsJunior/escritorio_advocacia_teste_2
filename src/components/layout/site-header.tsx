"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { primaryNav } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/layout/logo"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 12)
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/0"
      )}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {primaryNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<Link href="/contato" />}
            nativeButton={false}
            size="lg"
            className="rounded-full px-6"
          >
            Agendar Consulta
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label="Abrir menu de navegação"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navegação principal do site
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label="Navegação principal (mobile)"
              className="flex flex-col gap-1 px-4"
            >
              {primaryNav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={<Link href={item.href} />}
                  nativeButton={false}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    render={<Link href="/contato" />}
                    nativeButton={false}
                    size="lg"
                    className="w-full rounded-full"
                  />
                }
              >
                Agendar Consulta
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
