import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import routes from './routes/routes';

const page = document.getElementById('app');

const renderRoute = (path: string) => {
  const component = routes[path] || (() => "<h1>Error 404</h1><h3>No such route.</h3>");
  if (page != null)
    page.innerHTML = component();
  else document.body.innerHTML = "<h1>Fatal error</h1><h3>Root Page Not Found</h3>";
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