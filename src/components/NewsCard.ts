/**
 * News Card
 *
 * displays a news article based on ID
 *  Title
● Date (formatted MM/DD/YYYY)
● Short description or summary
● Image (if available)
● Clicking on a card should also take the user to the full article page.

 */
interface NewsCardProps {
    title: string,
    date: string,
    shortDescription: string,
    imageLink: string,
    author: string
}

const NewsCard = (props: NewsCardProps) => {
    return (`
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${props.imageLink}" class="img-fluid rounded-start">
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
    `);
}

export default NewsCard;