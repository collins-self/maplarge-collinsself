/**
 * routes
 * 
 * handles static routes
 */
import Home from '@components/Home';

const routes: Record<string, () => string> = {
    '/': Home,
}

export default routes;