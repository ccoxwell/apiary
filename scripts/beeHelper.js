import cleanUpTwoLetter from './utilities/twoLetter.js'
import cleanUpGrid from './utilities/grid.js'

export default class BeeHelper {
    constructor(grid, twoLetter) {
        this.grid = grid
        this.twoLetter = twoLetter
    }

    get twoLetterData() {
        return cleanUpTwoLetter(this.twoLetter)
    }


    get lettersAndCounts() {
        return cleanUpGrid(this.grid)
    }

}