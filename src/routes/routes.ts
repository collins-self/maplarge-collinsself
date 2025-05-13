/**
 * routes
 * 
 * handles static routes
 */
import Home from '@components/Home';
import Article from '@components/Article';

const routes: Record<string, () => string> = {
    '/': Home,
    '/article': Article
}

export default routes;