const cleanUpLetter = (letter) => letter.trim().replace(":", "").toUpperCase()

const cleanUpNumber = (num) => Number.isNaN(Number(num)) ? 0 : Number(num)

const getLetterOrNumber = (item, i) => i === 0 ? cleanUpLetter(item) : cleanUpNumber(item)

const cleanUpGridRow = (row) => row.split('\t').map((item, i) => getLetterOrNumber(item, i))

const gridData = (grid) => grid.split('\n').map(row => cleanUpGridRow(row))

const lengthsArray = (grid) =>  gridData(grid)[0].slice(1)

const lettersArray = (grid) => gridData(grid).map(row => row[0]).slice(1).map(letter => letter.replace(":", "")).map(letter => letter.toUpperCase())

const removeSigmaColumn = (grid) => grid.map(row => row.slice(0, -1))

const removeSigmaRow = (grid) => grid.slice(0, -1)

const countMatrix = (grid) => {
    const [, ...noColHeaders] = gridData(grid)
    const matrixNoSigmaColumn = removeSigmaColumn(noColHeaders)
    const matrixNoSigmaRow = removeSigmaRow(matrixNoSigmaColumn)
    return matrixNoSigmaRow.map(row => row.slice(1)).map(row => {
        return row.map(count => Number(count)).map(count => Number.isNaN(count) ? 0 : count)
    })
}

const cleanUpGrid = (grid) => {
    return countMatrix(grid).flatMap((row, i) => {
        return row.map((count, j) => {
            const letterLength = `${lettersArray(grid)[i]}${lengthsArray(grid)[j]}`
            return {
                id: letterLength,
                value: letterLength,
                count
            }
        })
    }).filter(x => x.count !== 0)
}

export default cleanUpGrid