/**
 * Sidebar
 * 
 * Main navigation for the app. Not collapsable
 */

const Sidebar = () => {
    return (`
        <aside style="width: 200px; background-color: #f8f9fa; padding: 1rem;">
            <h2>Sidebar</h2>
            <ul style="list-style: none; padding: 0;">
                <li><a href="/categories">Categories</a></li>
            </ul>
        </aside>
    `);
}

export default Sidebar;