export default class ArrowButton {
    /**
     * Create ArrowButton object
     * @param {'up' | 'down'} direction 
     */
    constructor(direction) {
        this.direction = direction.toLowerCase()
    }

    /**
     * Get the ArrowButton element.
     * @return {HTMLButtonElement} an arrow button.
     */
    get el() {
        const arrowButton = document.createElement("button")
        const arrowIcon = document.createElement('i')
        const arrowClass = `fa-solid fa-circle-arrow-${this.direction}`
        arrowButton.className = "arrow"
        arrowIcon.className = arrowClass
        arrowButton.appendChild(arrowIcon)
        // arrowButton.addEventListener('click', e => console.log('clicked'))
        return arrowButton
    }
}