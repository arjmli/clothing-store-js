const url = "https://fakestoreapi.com/products";

function request(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // trending(data)
      createCollectionBox(data)
    });
}

request(url);


function trending(data, count = 5) {
  const trendingTitle = document.querySelectorAll(".trending-card-title");
  const trendingCardCategory = document.querySelectorAll(".trending-card-category");
  const trendingCardImg = document.querySelectorAll(".trending-card-img");

  for (let i = 0; i < count; i++) {
        trendingTitle[i].textContent = data[i].title
        trendingCardCategory[i].textContent = data[i].category
        trendingCardImg[i].setAttribute("src", data[i].image);
  }
}



function createCollectionBox (data, count = 8) {

  const collectionImg = document.querySelectorAll(".collection-img");
  const  collectionTitle = document.querySelectorAll(".collection-title");
  const collectionPriceMain = document.querySelectorAll(".collection-price");

  console.log(collectionImg);

  for (let i = 0; i < count; i++) {
        collectionPriceMain[i].textContent = `USD ${data[i].price}`
        collectionTitle[i].textContent = data[i].category
        collectionImg[i].setAttribute("src", data[i].image);
  }

  console.log(data);
}
