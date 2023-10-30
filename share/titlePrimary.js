import elementGenerator from "./ElementGenerator.js"

export default function titlePrimary (content ,parent, link = '#') {
    const titleContainer = elementGenerator('div', 'title-container', parent)
    const h2 = elementGenerator('h2', 'title-primary', titleContainer)
    h2.textContent = content
    const a = elementGenerator('a', 'browse-more', titleContainer)
    a.setAttribute('href', link)
    a.textContent = 'Browse more' 

    return titleContainer
  }