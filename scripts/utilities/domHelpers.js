/**
 * DOM Helpers module.
 * @module utilities/domHelpers
 */

/**
 * Retrieves the correct parent `<tr>` whether e.target is the `<button>` or `<i>` element.
 * @param {Event} e - the event object provided by the event listener.
 * @returns {HTMLTableRowElement} - the parent `<tr>` element
 */
const getParentTr = (e) => {
    return e.target.tagName === 'BUTTON' ? e.target.parentElement.parentElement : e.target.parentElement.parentElement.parentElement
}

/**
 * Increment and decrement the found/remaining values when an arrow button is clicked.
 * @param {Event} e - the event object provided by the event listener.
 * @param {'up' | 'down'} direction - the direction of the arrow button clicked.
 * @param {number} maximum - the number of instances of each grid or two letter entry.
 * @returns {boolean} `true` if found/remaining values are updated; `false` if they are not.
 */
const handleArrowButtonClick = (e, direction, maximum) => {
    const parentTr = getParentTr(e)
    const foundAndRemaining = {}
    for (const el of Array.from(parentTr.children)) {
        if (el.className === 'remaining' || el.className === 'found') {
            foundAndRemaining[el.className] = {
                val: Number(el.dataset.val),
                el
            }
        }
    }
    const {found, remaining} = foundAndRemaining
    if (direction === 'up') {
        if (remaining.val > 0) {
            remaining.val -= 1
            found.val += 1
            found.el.setAttribute('data-val', found.val)
            found.el.innerText = found.val
            remaining.el.setAttribute('data-val', remaining.val)
            remaining.el.innerText = remaining.val
            parentTr.setAttribute('data-remaining', remaining.val)
            return true
        } else {
            return false
        }
    } else {
        if (remaining.val === maximum) {
            return false
        } else {
            remaining.val += 1
            found.val -= 1
            found.el.setAttribute('data-val', found.val)
            found.el.innerText = found.val
            remaining.el.setAttribute('data-val', remaining.val)
            remaining.el.innerText = remaining.val
            parentTr.setAttribute('data-remaining', remaining.val)
            return true
        }
    }


}
export default handleArrowButtonClick