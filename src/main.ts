import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import routes from '@routes/routes';
import Sidebar from "@components/Sidebar";
import Banner from '@components/Banner';

const page = document.getElementById('app');

const renderRoute = (path: string) => {
    if (page == null) {
        document.body.innerHTML = "<h1>Fatal error</h1><h3>Root Page Not Found</h3>";
        return;
    }

    page.innerHTML = `
        ${Banner()}
        <div style="display: flex; height: 100vh;">
            ${Sidebar()}
            <main class="flex-1 p-1" id="root"></main>
        </div>
    `

    const root = document.getElementById('root');
    const component = routes[path] || (() => "<h1>Error 404</h1><h3>No such route.</h3>");
    root!.innerHTML = component(); // Should be safe due to early return
}
// first load render
renderRoute(location.pathname);

const handleRoute = (event: MouseEvent) => {
    event.preventDefault();

    const target = event.target as HTMLElement;
    const href = target.getAttribute('href');

    if (href != null) {
        // Update the browser history without reloading the page
        history.pushState({}, '', href);

        // Call your routing function to change the view
        renderRoute(href);
    }
};

document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    // Check if the clicked element is a link
    if (target.tagName.toLowerCase() === 'a') {
        handleRoute(event); // Handle the route change
    }
});