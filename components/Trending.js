import request from "./Request.js";

export default function trending(data, count = 5) {
    const trendingTitle = document.querySelectorAll(".trending-card-title");
    const trendingCardCategory = document.querySelectorAll(".trending-card-category");
    const trendingCardImg = document.querySelectorAll('.trending-card-img');
  
    for (let i = 0; i < count; i++) {
          trendingTitle[i].textContent = data[i].title
          trendingCardCategory[i].textContent = data[i].category
          trendingCardImg[i].setAttribute("src", data[i].image);
    }
  }
  
  
  request(trending)

//   const root = document.getElementById('root')

// console.log(root);

//     const trendingSection = document.createElement('section')
//     trendingSection.classList.add('trending')
//     root.appendChild(trendingSection)

//     const titleContainer = document.createElement('div')
//     titleContainer.classList.add('title-container')
//     trendingSection.appendChild(titleContainer)

//     const titlePrimary = document.createElement('h2')
//     titlePrimary.textContent = 'New Trending'
//     titlePrimary.classList.add('title-primary')
//     titleContainer.appendChild(titlePrimary)

//     const browseMore = document.createElement('a')
//     browseMore.classList.add('browse-more')