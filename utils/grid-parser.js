export default class BeeHelper {
    constructor(grid, twoLetter) {
        this.twoLetter = twoLetter
        this.grid = grid;
        this.cleanGrid = grid.split('\n').map(row => row.split('\t').map(cell => cell.trim()))
        this.lengths = this.cleanGrid[0]
        this.letters = this.cleanGrid.map(row => row[0]).slice(1)
    }

    countMatrix() {
        let [, ...noColHeaders] = this.cleanGrid
        return noColHeaders.map(row => row.slice(1)).map(row => {
            return row.map(count => Number.isNaN(Number(count)) ? 0 : Number(count))
        })
    }

    mapLettersAndCounts() {
        let countMatrix = this.countMatrix()
        return countMatrix.map((letter, i) => {
            return letter.map((count, j) => {
                return {
                    letter: this.letters[i],
                    length: this.lengths[j],
                    count 
                }
            })
        })
    }

}