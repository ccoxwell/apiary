import CheckboxInput from './CheckboxInput.js'

export default class ListItem {
    constructor(itemData) {
        this.itemData = itemData
    }

    get el() {
        const li = document.createElement("li")
        const twoLetterSpan = document.createElement("span")
        const checkboxSpan = document.createElement("span")
        li.id = this.itemData.id
        twoLetterSpan.classList.add("two-letters")
        twoLetterSpan.innerText = this.itemData.value
        for (let i = 0; i < this.itemData.count; i++) {
            let checkbox = new CheckboxInput(this.itemData)
            checkboxSpan.append(checkbox.el)
        }
        li.appendChild(twoLetterSpan)
        li.appendChild(checkboxSpan)
        return li
    }
}