import TableCell from './TableCell.js'

export default class TableRow {
    constructor(itemData) {
        this.itemData = itemData
        this.label = itemData.value
        this.remaining = itemData.count
        this.maximum = itemData.count
        this.count = itemData.count
        this.id = itemData.id
        this.found = 0
    }

    get el() {
        const tr = document.createElement('tr')
        const labelCell = new TableCell({column: 'label', content: this.label}).el
        const buttonCell = new TableCell({column: 'buttons', content: this.count}).el
        const foundCell = new TableCell({column: 'found', content: this.found}).el
        const remainingCell = new TableCell({column: 'remaining', content: this.remaining}).el
        tr.appendChild(labelCell)
        tr.appendChild(buttonCell)
        tr.appendChild(foundCell)
        tr.appendChild(remainingCell)
        return tr
    }
}