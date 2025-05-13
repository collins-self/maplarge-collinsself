/**
 * main.ts
 * 
 * Renders content and sets up routing.
 * #app  id for outer app conetent, should only be used for always visible components
 * #root id for main content, is available after initial render
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import routes from '@routes/routes';
import Sidebar from "@components/Sidebar";
import Banner from '@components/Banner';
import CategorizedArticleList from '@components/CategorizedArticleList';
import ArticlePage from '@components/ArticlePage';

const page = document.getElementById('app');

const renderComponent = (target: HTMLElement, comp: HTMLElement | string) => {
    if (typeof comp === 'string') {
        target.innerHTML += comp;
    } else {
        target.appendChild(comp);
    }
};

const initializeLayout = (): { mainContent: HTMLElement } => {
    if (!page) throw new Error("Root page not found");

    // Main Banner
    page.innerHTML = '';
    renderComponent(page, Banner());

    // Main Sidebar
    const layoutContainer = document.createElement('div');
    layoutContainer.style.display = 'flex';
    layoutContainer.style.height = '100vh';
    renderComponent(layoutContainer, Sidebar());

    // Main Content
    const mainContent = document.createElement('main');
    mainContent.className = 'flex-1 p-1';
    mainContent.id = 'root';
    renderComponent(layoutContainer, mainContent);

    // Content + Sidebar on Page
    renderComponent(page, layoutContainer);

    return { mainContent };
};

const renderRoute = (path: string, target: HTMLElement) => {
    const existingSidebar = document.getElementById('sidebar');
    if (existingSidebar) {
        existingSidebar.replaceWith(Sidebar()); // re-renders with new category highlighted
    }

    target.innerHTML = '';

    if (path.startsWith('/category/')) {
        const slug = decodeURIComponent(path.split('/')[2] ?? '');
        renderComponent(target, CategorizedArticleList(slug));
        return;
    }

    if (path.startsWith('/article/')) {
        const slug = path.split('/')[2] ?? '';
        renderComponent(target, ArticlePage(slug));
        return;
    }

    const component = routes[path] || (() => "<h1>Error 404</h1><h3>No such route.</h3>");
    const result = component();
    renderComponent(target, result);
};

const setupRouting = (main: HTMLElement) => {
    const handleRoute = (event: MouseEvent) => {
        event.preventDefault();

        const target = (event.target as HTMLElement).closest('a');
        const href = target?.getAttribute('href');

        if (href != null) {
            history.pushState({}, '', href);
            renderRoute(href, main);
        }
    };

    document.addEventListener('click', (event) => {
        const target = (event.target as HTMLElement).closest('a');
        if (target) handleRoute(event);
    });

    window.addEventListener('popstate', () => {
        renderRoute(location.pathname, main);
    });
};

const mainApp = () => {
    // Banner Sidebar Main content
    const { mainContent } = initializeLayout();
    // Main content
    renderRoute(location.pathname, mainContent);
    setupRouting(mainContent);
};

mainApp();