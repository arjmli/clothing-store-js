import elementGenerator from "../share/ElementGenerator.js";
import { root } from "../src/main.js";

export default function Header() {
    const header = elementGenerator('header', 'header', root)
    header.classList.add('container')

    const titleContainer = elementGenerator('div', 'header-title-container', header)

    const headerTitle = elementGenerator('h1', 'header-title', titleContainer)
    headerTitle.textContent = 'Make your perfect look for any occasion'

    const headerSubTitle = elementGenerator('span', 'header-subtitle', titleContainer)
    headerSubTitle.textContent = `Update your wardrobe with our fresh selection of clothing and other
    fashion accessories.`

    const btn = elementGenerator('button', 'btn', titleContainer)
    btn.textContent = 'Shop Now'

    const paleBg = elementGenerator('span', 'pale-bg', root)
}