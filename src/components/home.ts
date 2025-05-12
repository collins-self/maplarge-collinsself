/**
 * Home component
 *
 * Renders the homepage layout with a sidebar and main content.
 * This component returns a static HTML string; it's used in the route renderer.
 */

const Home = (): string => {
    return (`
        <h1>Home</h1>
        <p>Welcome to the home page.</p>
    `);
}

export default Home;