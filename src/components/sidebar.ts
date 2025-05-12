/**
 * Sidebar
 * 
 * Main navigation for the app. Not collapsable
 */

const Sidebar = () => {
    return (`
        <nav class="nav flex-column bg-body-tertiary">
            <div class="mt-3 ms-3 me-5 mb-2">
                <a class="nav-link fw-bold text-body" href='/categories'>
                    <h3>Categories</h3>
                </a>
                <nav class="nav flex-column ms-3">
                    <a class="nav-link text-body h2" href="/categories/art">Art</a>
                    <a class="nav-link text-body h2" href="/categories/science">Science</a>
                    <a class="nav-link text-body h2" href="/categories/history">History</a>
                    <a class="nav-link text-body h2" href="/categories/math">Math</a>
                </nav>
            </div>
        </nav>
    `);
}

export default Sidebar;