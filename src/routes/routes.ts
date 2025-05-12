import Home from '@components/Home';
import CategorizedArticleList from '@components/CategorizedArticleList';
import Article from '@components/Article';

type RouteHandler = () => string;

const routes: Record<string, RouteHandler> = {
    '/': Home,
    '/categories': CategorizedArticleList,
    '/article': Article
}

export default routes;