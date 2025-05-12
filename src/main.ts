import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import routes from '@routes/routes';
import Sidebar from "@components/Sidebar";
import Banner from '@components/Banner';

const page = document.getElementById('app');

const renderComponent = (target: HTMLElement, comp: HTMLElement | string) => {
    if (typeof comp === 'string') {
        target.innerHTML += comp;
    } else {
        target.appendChild(comp);
    }
};

const renderRoute = (path: string) => {
    if (page == null) {
        document.body.innerHTML = "<h1>Fatal error</h1><h3>Root Page Not Found</h3>";
        return;
    }

    page.innerHTML = '';

    // Banner
    renderComponent(page, Banner());
    // Sidebar
    const layoutContainer = document.createElement('div');
    layoutContainer.style.display = 'flex';
    layoutContainer.style.height = '100vh';
    layoutContainer.appendChild(Sidebar());
    // Center Content
    const main = document.createElement('main');
    main.className = 'flex-1 p-1';
    main.id = 'root';

    layoutContainer.appendChild(main);
    page.appendChild(layoutContainer);

    const component = routes[path] || (() => "<h1>Error 404</h1><h3>No such route.</h3>");
    main.innerHTML = component(); // Should be safe due to early return
};
// first load render
renderRoute(location.pathname);

const handleRoute = (event: MouseEvent) => {
    event.preventDefault();

    const target = (event.target as HTMLElement).closest('a');
    const href = target?.getAttribute('href');

    if (href != null) {
        // Update the browser history without reloading the page
        history.pushState({}, '', href);
        renderRoute(href);
    }
};

document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest('a');
    if (target) handleRoute(event);
});