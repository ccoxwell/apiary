import TableCell from './TableCell.js'

export default class TableRow {
    constructor({value, count, id}) {
        this.label = value
        this.remaining = count
        this.maximum = count
        this.count = count
        this.id = id
        this.found = 0
    }

    get el() {
        const tr = document.createElement('tr')
        const labelCell = new TableCell('label', this.label).el
        const buttonCell = new TableCell('buttons',this.count, this.id, this.maximum).el
        const foundCell = new TableCell('found', this.found).el
        const remainingCell = new TableCell('remaining', this.remaining).el
        buttonCell.setAttribute('data-tr-id', this.id)
        foundCell.setAttribute('data-val', this.found)
        remainingCell.setAttribute('data-val', this.remaining)
        tr.id = this.id
        tr.appendChild(labelCell)
        tr.appendChild(buttonCell)
        tr.appendChild(foundCell)
        tr.appendChild(remainingCell)
        return tr
    }
}