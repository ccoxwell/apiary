import ResultsTable from './components/ResultsTable.js';
import BeeHelper from './beeHelper.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const gridTextArea = document.getElementById("grid");
    const twoLetterTextArea = document.getElementById("two-letter");
    const showMeButton = document.getElementById("show-me-the-text");
    const gridOutputSection = document.querySelector("#grid-output");
    const twoLetterOutputSection = document.getElementById("two-letter-output");

    showMeButton.onclick = e => {
        e.preventDefault()
        twoLetterOutputSection.innerHTML = ''
        gridOutputSection.innerHTML = ''
        const gridText = gridTextArea.value
        const twoLetterText = twoLetterTextArea.value
        const bee = new BeeHelper(gridText, twoLetterText)
        const twoLetterUl = new ResultsTable(bee.twoLetterData)
        const gridUl = new ResultsTable(bee.lettersAndCounts)
        twoLetterOutputSection.appendChild(twoLetterUl.el)
        gridOutputSection.appendChild(gridUl.el)
    }
})

