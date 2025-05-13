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
    fullArticle: string,
    image: string,
    datePosted: string,
    author: string,
    source: string,
    tags: string[]
}