import TableRow from "./TableRow.js"

export default class ResultsTable {
    constructor(listData) {
        this.listData = listData
    }

    get el() {
        const table = document.createElement("table")
        const headerRow = document.createElement("tr")
        const labelHeader = document.createElement("th")
        const buttonHeader = document.createElement("th")
        const foundHeader = document.createElement("th")
        const remainingHeader = document.createElement("th")
        labelHeader.innerText = 'label'
        buttonHeader.innerText = 'buttons'
        foundHeader.innerText = 'found'
        remainingHeader.innerText = 'remaining'
        headerRow.appendChild(labelHeader)
        headerRow.appendChild(buttonHeader)
        headerRow.appendChild(foundHeader)
        headerRow.appendChild(remainingHeader)
        table.appendChild(headerRow)
        for (const item of this.listData) {
            const tr = new TableRow(item)
            table.appendChild(tr.el)
        }
        return table
    }
}