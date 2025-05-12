/**
* Sidebar
* 
* Main navigation for the app.Not collapsable
*/

import type { ArticleFeed, Article } from 'types/article';

const Sidebar = (): HTMLElement => {
    const container = document.createElement('div');
    container.innerHTML = `
        <nav class="nav flex-column bg-body-tertiary h-100">
            <div class="mt-3 ms-3 me-5 mb-2">
                <a class="nav-link fw-bold text-body" href='/categories'>
                    <h3>Categories</h3>
                </a>
                <nav class="nav flex-column ms-3" id="category-links">
                    <p class="text-muted">Loading...</p>
                </nav>
            </div>
        </nav>
    `;

    const categoryContainer = container.querySelector('#category-links') as HTMLElement;
    const categories: Set<string> = new Set<string>();

    fetch('/news_feed.json')
        .then(res => res.json())
        .then((data: ArticleFeed) => {
            data.articles.forEach((entry: Article) => {
                categories.add(entry.category);
            });

            const pathParts = location.pathname.split('/');
            let currentCategory = '';
            if (pathParts[1] === 'categories' && pathParts.length > 2) {
                currentCategory = decodeURIComponent(pathParts[2]);
            }
            const categoriesHTML = Array.from(categories).map((category: string) => {
                return currentCategory === category
                    ? `<a class="nav-link text-body h2 fw-bold" href="/categories/${category}">${category}</a>`
                    : `<a class="nav-link text-body h2" href="/categories/${category}">${category}</a>`
            }).join('\n');

            categoryContainer.innerHTML = categoriesHTML;
        });


    return container;
};

export default Sidebar;