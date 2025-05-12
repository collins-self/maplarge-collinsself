/**
 * Banner
 * 
 * This serves as home navigation and title for all pages.
 */

const Banner = (): string => {
    return `
    <nav class="navbar navbar-dark bg-dark p-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><h3>My News Site</h3></a>
        </div>
    </nav>`;
}

export default Banner;