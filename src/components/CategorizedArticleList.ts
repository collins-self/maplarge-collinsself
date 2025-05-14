/**
 * Article List
 * 
 * Displays a list of articles based on the category in URL.
 */

import type { Article, ArticleFeed } from "types/article";
import NewsCard from "./NewsCard";

const CategorizedArticleList = (categoryFilter: string): HTMLElement => {
    const parseDate = (date: string): string => {
        try {
            const d = new Date(date);
            if (isNaN(d.getTime())) throw new Error("Invalid date");
            return d.toLocaleDateString(undefined, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
        } catch {
            return "Invalid date";
        }
    }

    const container = document.createElement('div');
    container.innerHTML = `<h2 class="mb-4">Loading ${categoryFilter} articles...</h2>`;

    fetch('/news_feed.json')
        .then(res => res.json())
        .then((data: ArticleFeed) => {
            const filteredArticles = data.articles.filter((entry: Article) => {
                return entry.category === categoryFilter;
            });
            if (filteredArticles.length === 0) container.innerHTML = `
                <h2 class="m-3">No articles found in ${categoryFilter}</h2>
            `;
            const cards = filteredArticles.map((a) => {
                const cardHtml = NewsCard({
                    title: a.title,
                    date: parseDate(a.date_posted),
                    shortDescription: a.excerpt,
                    imageLink: a.image,
                    author: a.author,
                    id: a.id
                });
                return `<div class="col-12">${cardHtml}</div>`;
            }).join('');

            container.innerHTML = `
                <h2 class="m-3 text-capitalize">${categoryFilter}</h2>
                <div class="row g-4" style="margin-right: 0 !important;">
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