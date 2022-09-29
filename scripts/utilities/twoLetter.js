const flattenTwoLetterText = (twoLetterText) => {
    const rowsArray = twoLetterText.trim().split('\n').map(row => row.split(' '))
    return rowsArray.flat()
}

const isolateTwoLetter = twoLetter => twoLetter.split('-')[0].toLowerCase()

const isolateCount = twoLetter => Number(twoLetter.split('-')[1])

const createTwoLetterObj = item => {
    return {
        id: item,
        value: isolateTwoLetter(item),
        count: isolateCount(item)
    }
}

const cleanUpTwoLetter = twoLetterText => {
    const flatTwoLetterArray = flattenTwoLetterText(twoLetterText)
    return flatTwoLetterArray
        .map(item => createTwoLetterObj(item))
}

export default cleanUpTwoLetter