import { englishBlogArticles, englishBlogContent } from './blog/en'
import { spanishBlogArticles, spanishBlogContent } from './blog/es'
import { germanBlogArticles, germanBlogContent } from './blog/de'
import { frenchBlogArticles, frenchBlogContent } from './blog/fr'
import { italianBlogArticles, italianBlogContent } from './blog/it'
import { portugueseBlogArticles, portugueseBlogContent } from './blog/pt'
import { dutchBlogArticles, dutchBlogContent } from './blog/nl'

export type BlogLocale = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt' | 'nl'

export interface BlogArticleSubheading {
  title: string
  paragraphs: string[]
  takeaways?: string[]
}

export interface BlogArticle {
  slug: string
  title: string
  readingTime: string
  date: string
  category: string
  excerpt: string
  content: {
    lead: string
    subheadings: BlogArticleSubheading[]
    summaryBox: {
      title: string
      text: string
    }
  }
}

export interface BlogSectionContent {
  eyebrow: string
  title: string
  description: string
  readMoreLabel: string
  backToArticlesLabel: string
  articles: BlogArticle[]
}

export {
  englishBlogArticles,
  spanishBlogArticles,
  germanBlogArticles,
  frenchBlogArticles,
  italianBlogArticles,
  portugueseBlogArticles,
  dutchBlogArticles,
}

export const defaultBlogContent: BlogSectionContent = englishBlogContent

export const blogContentByLocale: Record<BlogLocale, BlogSectionContent> = {
  en: englishBlogContent,
  es: spanishBlogContent,
  de: germanBlogContent,
  fr: frenchBlogContent,
  it: italianBlogContent,
  pt: portugueseBlogContent,
  nl: dutchBlogContent,
}
