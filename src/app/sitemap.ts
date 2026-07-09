import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/constants"
import { practiceAreas } from "@/lib/data/practice-areas"
import { team } from "@/lib/data/team"
import { articles } from "@/lib/data/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: now, changeFrequency: "yearly", priority: 1 },
    { url: `${siteConfig.url}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteConfig.url}/areas-de-atuacao`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/equipe`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/artigos`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${siteConfig.url}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/termos-de-uso`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]

  const areaRoutes: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${siteConfig.url}/areas-de-atuacao/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const teamRoutes: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${siteConfig.url}/equipe/${member.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/artigos/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...areaRoutes, ...teamRoutes, ...articleRoutes]
}
