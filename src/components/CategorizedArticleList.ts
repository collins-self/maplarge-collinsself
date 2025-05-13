/**
 * Article List
 * 
 * Displays a list of articles based on the category in URL.
 */

import type { Article, ArticleFeed } from "types/article";
import NewsCard from "./NewsCard";

const CategorizedArticleList = (categoryFilter: string): HTMLElement => {
    const container = document.createElement('div');
    container.innerHTML = `<h2 class="mb-4">Loading ${categoryFilter} articles...</h2>`;
    fetch('/news_feed.json')
        .then(res => res.json())
        .then((data: ArticleFeed) => {
            const filteredArticles = data.articles.filter((entry: Article) => {
                return entry.category === categoryFilter;
            });
            if (filteredArticles.length === 0) container.innerHTML = `
                <h2 class="mb-4">No articles found in ${categoryFilter}</h2>
            `
            const cards = filteredArticles.map((a) => {
                return `
                <div class="col">
                    ${NewsCard({
                    title: a.title,
                    date: a.datePosted,
                    shortDescription: a.excerpt,
                    imageLink: a.image,
                    author: a.author,
                    id: a.id
                })}</div>`
            }).join('');

            container.innerHTML = `
                <h2 class="m-3 text-capitalize">${categoryFilter}</h2>
                <div class="row row-cols-1 g-4">
                    ${cards}
                </div>
            `;
        })
        .catch(() => {
            container.innerHTML = `<h2 class="m-2">Error loading articles</h2>`;
        });

    return container;
};

export default CategorizedArticleList;