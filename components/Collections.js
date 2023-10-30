import titlePrimary from "../share/titlePrimary.js"
import elementGenerator from "../share/ElementGenerator.js"

export default function collection(data, count = 8) {
    const collection = elementGenerator('section', 'collection', root)
    collection.classList.add('container')
    titlePrimary('Collection', collection, "../pages/collections.html")
    const collectionCardContainer = elementGenerator('div', 'collection-card-container', collection)

    for (let i = 0; i < count; i++) {
        const collectionCard = elementGenerator('div', 'collection-card', collectionCardContainer)
        const img = elementGenerator('img', 'collection-img', collectionCard)
        img.setAttribute("src", data[i].image);
    
        const collectionInfo = elementGenerator('div', 'collection-info-container', collectionCard)
        const title = elementGenerator('span', 'collection-title', collectionInfo)
        title.textContent = data[i].title
        const price = elementGenerator('span', 'collection-price', collectionInfo)
        price.textContent = `USD ${data[i].price}`
    }

}