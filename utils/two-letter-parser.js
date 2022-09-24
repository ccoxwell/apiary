export const createArrayFromTwoLetter = (twoLetterText) => {
    let twoLetterArray = twoLetterText
        .trim()
        .split("\n")
        .map((row) => row.split(" "))
        .reduce((prev, curr) => prev.concat(curr));
    return twoLetterArray;
}

export const getTwoLetterObject = (twoLetterEntry) => {
    const twoLetterEntryArr = twoLetterEntry.split("-");
    return {
        id: twoLetterEntry,
        value: twoLetterEntryArr[0].toLowerCase(),
        count: Number(twoLetterEntryArr[1])
    };
}