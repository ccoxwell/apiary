import ArrowButton from './ArrowButton.js'

export default class TableCell {
    /**
     * Create a TableCell object.
     * @param {Object} options 
     * @property {string} className
     * @property {'label' | 'buttons' | 'found' | 'remaining'} column
     * @property {string} content
     */
    constructor(options) {
        this.className = options.column
        this.column = options.column
        this.content = options.content
    }

    /**
     * Get the TableCell element.
     * @return {HTMLTableCellElement} the `<td>` element.
     */
    get el() {
        const td = document.createElement('td')
        td.className = this.className

        switch(this.column) {
            case 'buttons':
                const upButton = new ArrowButton('up').el
                const downButton = new ArrowButton('down').el
                td.appendChild(upButton)
                td.appendChild(downButton)
                break
            default:
                const textNode = document.createTextNode(this.content)
                td.appendChild(textNode)
        }
        return td
    }

}