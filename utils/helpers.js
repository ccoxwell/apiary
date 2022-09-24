const cleanUpLetter = (letter) => letter.trim().replace(":", "").toUpperCase()

const cleanUpNumber = (num) => Number.isNaN(Number(num)) ? 0 : Number(num)

const cleanUpRow = (row) => row.split('\t').map((item, i) => i === 0 ? cleanUpLetter(item) : cleanUpNumber(item))

const cleanUpTwoLetter = (twoLetterText) => {
    return twoLetterText
        .trim()
        .split('\n')
        .map((row) => row.split(" "))
        .reduce((prev, curr) => prev.concat(curr))
        .map(item => item.split('-'))
        .map(itemArray => {
            return {
                id: itemArray,
                value: itemArray[0].toLowerCase(),
                count: Number(itemArray[1])
            }
        })
}

export {cleanUpRow, cleanUpTwoLetter}