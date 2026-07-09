import { Hero } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { Differentials } from "@/components/sections/differentials"
import { PracticeAreasSection } from "@/components/sections/practice-areas-section"
import { TeamSection } from "@/components/sections/team-section"
import { ArticlesSection } from "@/components/sections/articles-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Differentials />
      <PracticeAreasSection />
      <TeamSection />
      <ArticlesSection />
      <CtaSection />
    </>
  )
}
