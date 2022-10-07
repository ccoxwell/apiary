export default class ArrowButton {
    constructor(direction) {
        // How to restrict this to only up or down
        this.direction = direction.toLowerCase()
    }

    get el() {
        const arrowButton = document.createElement("button")
        const arrowIcon = document.createElement('i')
        const arrowClass = `fa-solid fa-circle-arrow-${this.direction}`
        arrowButton.className = "arrow"
        arrowIcon.className = arrowClass
        arrowButton.appendChild(arrowIcon)
        return arrowButton
    }
}