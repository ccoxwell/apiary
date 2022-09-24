import {cleanUpRow, cleanUpTwoLetter} from './helpers.js'

export default class BeeHelper {
    constructor(grid, twoLetter) {
        this.grid = grid
        this.twoLetter = twoLetter
    }

    get cleanTwoLetterArray() {
        return cleanUpTwoLetter(this.twoLetter)
    }

    get cleanGrid() {
        let cleanGrid = this.grid.split('\n').map(row => cleanUpRow(row))
        return cleanGrid
    }

    get lengthsArray() {
        return this.cleanGrid[0].slice(1)
    }

    get lettersArray() {
        return this.cleanGrid.map(row => row[0]).slice(1).map(letter => letter.replace(":", "")).map(letter => letter.toUpperCase())
    }

    get countMatrix() {
        let [, ...noColHeaders] = this.cleanGrid
        return noColHeaders.map(row => row.slice(1)).map(row => {
            return row.map(count => Number(count)).map(count => Number.isNaN(count) ? 0 : count)
        })
    }

    get lettersAndCounts() {
        return this.countMatrix.map((row, i) => {
            return row.map((count, j) => {
                return {
                    letter: this.lettersArray[i],
                    length: this.lengthsArray[j],
                    count
                }
            })
        })
    }

}