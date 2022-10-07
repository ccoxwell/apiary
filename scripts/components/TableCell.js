import handleArrowButtonClick from '../utilities/domHelpers.js'
import ArrowButton from './ArrowButton.js'

export default class TableCell {
    /**
     * Create a TableCell object.
     * @param {('label' | 'buttons' | 'found' | 'remaining')} column - the column this TableCell belongs to.
     * @param {string} content - the content that is placed inside the TableCell
     * @param {string} rowId - the id attribute of the parent `<tr>`.
     * @param {number} maximum - the number of instances of each grid or two letter entry.
     */
    constructor(column, content, rowId, maximum) {
        this.className = column
        this.column = column
        this.content = content
        this.rowId = rowId
        this.maximum = maximum
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
                upButton.addEventListener('click', (e) => handleArrowButtonClick(e, 'up', this.maximum))
                downButton.addEventListener('click', (e) => handleArrowButtonClick(e, 'down', this.maximum))
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