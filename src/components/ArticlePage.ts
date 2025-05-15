import type { ArticleFeed, Article } from "types/article";

const ArticlePage = (id: string): HTMLElement => {
    const component = document.createElement('div');
    component.innerHTML = `<p class="m-3">Loading article...</p>`;
    fetch('/news_feed.json')
        .then(res => res.json())
        .then((data: ArticleFeed) => {
            const article = data.articles.find((entry: Article) => entry.id.toString() == id);
            if (!article) {
                component.innerHTML = `<h3 class="m-3">Article not found</h3>`;
                return;
            }

            component.innerHTML = `
                <article class="container p-4 py-5">
                    <h6 class="mb-3 text-uppercase text-danger">${article.category}</h6>
                    <h2 class="mb-3">${article.title.endsWith('.') ? article.title.slice(0, -1) : article.title}</h2>
                    <div class="fs-5 lh-lg">
                    <div class="row">
                        <img src=${article.image}
                            class="rounded-start col-md-8"
                            style="max-height: 20rem; max-width: 100%; object-fit: cover"
                            onerror="this.remove()">
                        <div class="col-md-4">
                            <p>${article.excerpt}</p>
                            <p>${new Date(article.date_posted).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} – ${article.author}</p>
                        </div>
                    </div>
                    <p class="mt-5">${article.full_article}</p>
                    </div>
                </article>
            `;
        })
        .catch(() => `<h3 class="m-3">Unable to load article</h3>`);
    return component;
}

export default ArticlePage;