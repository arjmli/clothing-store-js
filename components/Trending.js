import elementGenerator from "../share/ElementGenerator.js";
import titlePrimary from "../share/titlePrimary.js";

export default function trending (data, count = 4) {
  console.log(data);
  const trending = elementGenerator('section', 'trending', root)
  trending.classList.add('container')
  titlePrimary('New Trending', trending)
  const trendingCardContainer = elementGenerator('div', 'trending-card-container', trending)


  for (let i = 0; i < count; i++) {
    const trendingCard = elementGenerator('div', 'trending-card', trendingCardContainer)
    trendingCard.classList.add('trending-card--lg', 'grid-span-2')
    const trendingCardInfo = elementGenerator('div', 'trending-card-info', trendingCard)
    
    const trendingCardCategory = elementGenerator('span', 'trending-card-category', trendingCardInfo)
    trendingCardCategory.textContent = data[i].category
    
    const trendingCardTitle = elementGenerator('span', 'trending-card-title', trendingCardInfo)
    trendingCardTitle.textContent = data[i].title
    
    const btn = elementGenerator('button', 'trending-card-btn', trendingCardInfo)
    btn.textContent = 'Shop Now'
    
    const img = elementGenerator('img', 'trending-card-img', trendingCard)
    img.setAttribute("src", data[i].image);
  }
}