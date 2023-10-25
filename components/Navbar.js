import { root } from "../src/main.js";
import elementGenerator from "../share/ElementGenerator.js";

const navbarItems = ['Trending', 'Collection', 'Reviews']
const navIcons = ["search-outline", "heart-outline", "bag-handle-outline"]

export default function navigation() {

    const navbar = elementGenerator('nav', 'navbar', root)
    navbar.classList.add('container')

    const navbarLogo = elementGenerator('span', 'navbar-logo', navbar)
    navbarLogo.textContent = 'Clotha'

    const navbarList = elementGenerator('ul', 'navbar-list', navbar)

    navbarItems.forEach(el => {
        const li = elementGenerator('li', 'navbar-item', navbarList)
        const a = elementGenerator('a', null, li)
        a.textContent = el
        a.setAttribute('href', '#')
    })

    const navbarIcons = elementGenerator('div', 'navbar-icons', navbar)

    navIcons.forEach(el => {
        const a  = elementGenerator('a', null, navbarIcons)
        const ionIcon = elementGenerator('ion-icon', 'navbar-icon', a)
        ionIcon.setAttribute('name', el)
    })
}