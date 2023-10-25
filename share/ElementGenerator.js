export default function elementGenerator (el = 'div', className, parent = root) {

    const name = document.createElement(el)
    name.classList.add(className)
    parent.appendChild(name)

    return name
}