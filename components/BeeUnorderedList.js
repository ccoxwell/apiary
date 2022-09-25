export default class BeeUnorderedList extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
        const range = document.createRange()
        const template = `<ul></ul>`
        const fragment = range.createContextualFragment(template)
        shadowRoot.appendChild(fragment.cloneNode(true))
        console.log(this.getAttribute("data-items"))
    }
}