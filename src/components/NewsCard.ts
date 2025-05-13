/**
 * News Card
 *
 * displays a news article based on ID
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
    return (`
        <a href='/article/${props.id}' class='text-decoration-none'>
        <div class="card mx-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${props.imageLink}" 
                         class="img-fluid rounded-start" 
                         style="object-fit: cover; height: 200px;"
                         onerror="this.remove()">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${props.title} | ${props.author}</h5>
                        <p class="card-text">${props.shortDescription}</p>
                        <p class="card-text"><small class="text-body-secondary">${props.date}</small></p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    `);
}

export default NewsCard;