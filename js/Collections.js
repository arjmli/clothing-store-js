import request from "./Request.js";

export default function collection (data, count = 8) {
    
    const collectionImg = document.querySelectorAll(".collection-img");
    const  collectionTitle = document.querySelectorAll(".collection-title");
    const collectionPriceMain = document.querySelectorAll(".collection-price");
    
    console.log(collectionImg);
    
    for (let i = 0; i < count; i++) {
        collectionPriceMain[i].textContent = `USD ${data[i].price}`
        collectionTitle[i].textContent = data[i].category
        collectionImg[i].setAttribute("src", data[i].image);
    }
    
}


request(collection)

