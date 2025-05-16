/**
 * Home component
 *
 * Renders the homepage layout with a sidebar and main content.
 * This component is really more of a placeholder. No specs for a home page provided.
 */

import type { Article, ArticleFeed } from "types/article";
import NewsCard from "./NewsCard";

const Home = (): HTMLElement => {
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

    // Filter
    const container = document.createElement('div');
    const articleWrapper = document.createElement('div');
    let sortCategory = 'None';
    let allArticles: Article[] = [];

    container.innerHTML = `<h2 class="mb-4">Loading all articles...</h2>`;

    const renderDropdown = (): string => `
        <div class="dropdown m-2">
            <button class="btn dropdown-toggle border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort ${' - ' + sortCategory}
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" data-sort="Date">Date</a></li>
                <li><a class="dropdown-item" data-sort="Author">Author</a></li>
                <li><a class="dropdown-item" data-sort="Title">Title</a></li>
            </ul>
        </div>`

    // Articles
    const renderArticle = () => {
        let filtered = [...allArticles];

        if (sortCategory === 'Title')
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        if (sortCategory === 'Author')
            filtered.sort((a, b) => a.author.localeCompare(b.title));
        if (sortCategory === 'Date')
            filtered.sort((a, b) => {
                const aDate = new Date(a.date_posted);
                const bDate = new Date(b.date_posted);
                return bDate.getTime() - aDate.getTime();
            });

        const cards = filtered.map(a => `
            <div class="col-12">
                ${NewsCard({
            title: a.title,
            date: parseDate(a.date_posted),
            shortDescription: a.excerpt,
            imageLink: a.image,
            author: a.author,
            id: a.id,
            category: a.category
        })}
            </div>
        `).join('');

        articleWrapper.innerHTML = `
            <h2 class="m-3 text-capitalize">News Articles</h2>
            ${renderDropdown()}
            <div class="row g-4" style="margin-right: 0 !important;">${cards}</div>
        `
        // Add dropdown listeners
        articleWrapper.querySelectorAll('[data-sort]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                sortCategory = (el as HTMLElement).getAttribute('data-sort')!;
                renderArticle();
            });
        });
    }

    fetch('/news_feed.json')
        .then(res => res.json())
        .then((data: ArticleFeed) => {
            allArticles = data.articles;
            if (allArticles.length === 0) {
                container.innerHTML = `<h2 class="m-3">No articles found</h2>`;
            } else {
                renderArticle();
                container.innerHTML = ''; // clear loading
                container.appendChild(articleWrapper);
            }
        })
        .catch(() => {
            container.innerHTML = `<h2 class="m-2">Error loading articles</h2>`;
        });

    return container;
};

export default Home;
