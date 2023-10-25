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