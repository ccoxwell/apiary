import {cleanUpGridRow, cleanUpTwoLetter} from './helpers.js'

export default class BeeHelper {
    constructor(grid = null, twoLetter) {
        this.grid = grid
        this.twoLetter = twoLetter
    }

    get twoLetterData() {
        return cleanUpTwoLetter(this.twoLetter)
    }

    get gridData() {
        return this.grid.split('\n').map(row => cleanUpGridRow(row))
    }

    get lengthsArray() {
        return this.gridData[0].slice(1)
    }

    get lettersArray() {
        return this.gridData.map(row => row[0]).slice(1).map(letter => letter.replace(":", "")).map(letter => letter.toUpperCase())
    }

    removeSigmaColumn(grid) {
        return grid.map(row => row.slice(0, -1))
    }

    removeSigmaRow(grid) {
        return grid.slice(0, -1)
    }

    get countMatrix() {
        const [, ...noColHeaders] = this.gridData
        const matrixNoSigmaColumn = this.removeSigmaColumn(noColHeaders)
        const matrixNoSigmaRow = this.removeSigmaRow(matrixNoSigmaColumn)
        return matrixNoSigmaRow.map(row => row.slice(1)).map(row => {
            return row.map(count => Number(count)).map(count => Number.isNaN(count) ? 0 : count)
        })
    }

    get lettersAndCounts() {
        return this.countMatrix.flatMap((row, i) => {
            return row.map((count, j) => {
                const letterLength = `${this.lettersArray[i]}${this.lengthsArray[j]}`
                return {
                    id: letterLength,
                    value: letterLength,
                    count
                }
            })
        }).filter(x => x.count !== 0)
    }

}