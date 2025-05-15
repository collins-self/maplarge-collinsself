/**
* Sidebar
* 
* Main navigation for the app.Not collapsable
*/

import type { ArticleFeed, Article } from 'types/article';

const Sidebar = (): HTMLElement => {
    const container = document.createElement('div');
    container.className = '100vh';
    container.id = 'sidebar';
    container.innerHTML = `
        <nav class="flex-md-column navbar navbar-expand-md navbar-light bg-body-tertiary p-4 pe-5 h-100">
            <div class="h3 text-decoration-none px-2 me-3" href="#">Categories</div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCategories">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse ms-3 align-items-start" id="navbarCategories">
                <ul class="flex-column navbar-nav me-auto mb-2 mb-md-0" id="category-links">
                    <li class="nav-item"><span class="nav-link text-muted">Loading...</span></li>
                </ul>
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
            if (pathParts[1] === 'category' && pathParts.length > 2) {
                currentCategory = decodeURIComponent(pathParts[2]);
            }

            const categoriesHTML = Array.from(categories).map((category: string) => {
                const activeClass = currentCategory === category ? 'fw-bold' : '';
                return `
                    <li class="nav-item">
                        <a class="nav-link fs-5 ${activeClass}" href="/category/${encodeURIComponent(category)}">${category}</a>
                    </li>
                `;
            }).join('\n');

            categoryContainer.innerHTML = categoriesHTML;
        });

    return container;
};

export default Sidebar;