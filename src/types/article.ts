/**
 * Article Type
 * 
 * used to more easily handle article data from news_feed.json
 */

export interface ArticleFeed {
    type: string,
    articles: Article[],
}

export interface Article {
    id: number,
    category: string,
    title: string,
    excerpt: string,
    full_article: string,
    image: string,
    date_posted: string,
    author: string,
    source: string,
    tags: string[]
}