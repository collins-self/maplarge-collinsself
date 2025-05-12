/**
 * Home component
 *
 * Renders the homepage layout with a sidebar and main content.
 * This component returns a static HTML string; it's used in the route renderer.
 */
import Sidebar from "@components/Sidebar";

const Home = (): string => {
    return (`
        <div style="display: flex; height: 100vh;">
            ${Sidebar()}
            <main style="flex: 1; padding: 1rem;">
                <h1>Home</h1>
                <p>Welcome to the home page.</p>
            </main>
        </div>
    `);
}

export default Home;