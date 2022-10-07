import ArrowButton from './ArrowButton.js'

export default class ListItem {
    constructor(itemData) {
        this.itemData = itemData
        this.remaining = itemData.count
        this.maximum = itemData.count
        this.id = itemData.id
        this.found = 0
    }

    get el() {
        const li = document.createElement("li")
        const twoLetterSpan = document.createElement("span")
        const upArrow = new ArrowButton('up').el
        const downArrow = new ArrowButton('down').el
        const spanText = document.createTextNode(`${this.itemData.value.toUpperCase()} - Found: ${this.found} Remaining: ${this.remaining}`)
        upArrow.setAttribute('data-li-id', this.id)
        downArrow.setAttribute('data-li-id', this.id)

        upArrow.addEventListener("click", () => this.handleClick('up'))
        downArrow.addEventListener('click', (e) => this.handleClick('down'))
        twoLetterSpan.appendChild(spanText)
        li.id = this.id
        li.appendChild(twoLetterSpan)
        li.appendChild(upArrow)
        li.appendChild(downArrow)
        return li
    }

    handleClick(direction) {
        if (direction === 'up') {
            if (this.remaining > 0) {
                this.remaining -= 1
                this.found += 1
            } else {
                return
            }
        } else {
            if (this.remaining === this.maximum) {
                return
            } else {
                this.remaining += 1
                this.found -= 1
            }
        }
        let currentLiSpan = document.querySelector(`#${this.id} span`)
        currentLiSpan.innerText = `${this.itemData.value.toUpperCase()} - Found: ${this.found} Remaining: ${this.remaining}`
    }

}