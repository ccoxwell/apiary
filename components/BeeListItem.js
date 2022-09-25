export default class BeeListItem extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
        const range = document.createRange()
        const template = `
            <li>${this.getAttribute('data-items')}</li>
        `
        const fragment = range.createContextualFragment(template)
        shadowRoot.appendChild(fragment.cloneNode(true))
        console.log(this.getAttribute("data-items"))
    }
}