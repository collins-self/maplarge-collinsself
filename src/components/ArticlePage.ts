import type { ArticleFeed, Article } from "types/article";

const ArticlePage = (id: string): string => {
    fetch('/news_feed.json')
        .then(res => res.json())
        .then((data: ArticleFeed) => {
            const article = data.articles.find((entry: Article) => {
                entry.id.toString() === id;
            });
        })
        .catch(() => `<h3 class="m-3">Unable to load article</h3>`);
    return `<h1>Article ${id}</h1>`;
}

export default ArticlePage;