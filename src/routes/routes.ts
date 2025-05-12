import Home from '../components/Home';
//import { Categories } from '../components/home';
import Article from '../components/Article';

type RouteHandler = () => string;

const routes: Record<string, RouteHandler> = {
    '/': Home,
    //    '/categories': Categories,
    '/article': Article
}

export default routes;