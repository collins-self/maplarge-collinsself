/**
 * News Card
 *
 * displays a news article
 */
interface NewsCardProps {
    title: string,
    date: string,
    shortDescription: string,
    imageLink: string,
    author: string,
    id: number
}

const NewsCard = (props: NewsCardProps) => {
    const imageColumn = props.imageLink
        ? `<div class="col-md-4">
                <img src="${props.imageLink}"
                     class="w-100 rounded-start"
                     style="object-fit: cover; height: 200px;"
                     onerror="this.parentElement?.remove()">
           </div>`
        : '';
    const title = props.title.endsWith('.') ? props.title.slice(0, -1) : props.title.slice;

    return (`
        <a href='/article/${props.id}' class='text-decoration-none'>
        <div class="card mx-3" style="height: 200px">
            <div class="row g-0">
                ${imageColumn}
                <div class="col-md">
                    <div class="card-body">
                        <h4 class="card-title">${title} | ${props.author}</h5>
                        <p class="card-text"><small class="text-body-secondary">${props.date}</small></p>
                        <p class="card-text">${props.shortDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    `);
}

export default NewsCard;