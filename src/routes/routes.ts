/**
 * routes
 * 
 * handles static and dynaimc routes
 */
import ArticlePage from '@components/ArticlePage';
import CategorizedArticleList from '@components/CategorizedArticleList';
import Home from '@components/Home';

const routes: RouteEntry[] = [
    { path: '/', handler: Home },
    { path: '/category/', handler: (category) => CategorizedArticleList(category ?? '') },
    { path: '/article/', handler: (id) => ArticlePage(id ?? '') }
];

const matchRoute = (path: string): string | HTMLElement => {
    const match = path === '/'
        ? routes.find(route => path.startsWith(route.path))
        : routes.find((route) => path.startsWith(route.path) && route.path != '/'); // skips home path if not home path
    if (!match) return `<h3 class="m-3">404</h1><h5>Route not found.</h5?`;

    const param = path.slice(match?.path.length) || undefined;
    return match?.handler(param);
}

export default matchRoute;