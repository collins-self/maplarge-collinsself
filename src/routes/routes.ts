import Home from '../components/home';
//import { Categories } from '../components/home';
import Article from '../components/article';

type RouteHandler = () => string;

const routes: Record<string, RouteHandler> = {
    '/': Home,
    //    '/categories': Categories,
    '/article': Article
}

export default routes;