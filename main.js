const url = 'https://fakestoreapi.com/products'

function request(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => result(data))

}


request(url)


function result(data) {
    console.log(data[0]);
    console.log(data.title);
    const trendingCardImg = document.querySelector('.trending-card-img1')
    trendingCardImg.setAttribute('src', data[0].image)
    const trendingCardTitle = document.querySelector('.trending-card-title1')
    trendingCardTitle.textContent = data[0].title
}
