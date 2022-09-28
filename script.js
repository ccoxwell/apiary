import UnorderedList from './components/UnorderedList.js';
import BeeHelper from './utils/BeeHelper.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const gridTextArea = document.getElementById("grid");
    const twoLetterTextArea = document.getElementById("two-letter");
    const showMeButton = document.getElementById("show-me-the-text");
    const gridOutputSection = document.querySelector("#grid-output");
    const twoLetterOutputSection = document.getElementById("two-letter-output");
    // const twoLetterOutputPre = document.querySelector("#two-letter-output > pre");

    // how do i make this automatically reactive
    function clearOutputElements(elementArray) {
        for (const element of elementArray) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }


    showMeButton.onclick = e => {
        e.preventDefault();
        const gridText = gridTextArea.value
        const twoLetterText = twoLetterTextArea.value
        const bee = new BeeHelper(gridText, twoLetterText)
        // gridOutputPre.textContent = gridText
        // let gridData = bee.gridData
        // console.log(bee.lettersAndCounts)
        // let twoLetterData = bee.twoLetterData
        console.log('lettersAndCounts', bee.lettersAndCounts)
        const twoLetterUl = new UnorderedList(bee.twoLetterData)
        const gridUl = new UnorderedList(bee.lettersAndCounts)
        twoLetterOutputSection.appendChild(twoLetterUl.el)
        gridOutputSection.appendChild(gridUl.el)
    }

    const resetElementContents = (element) => element.innerHTML = ''
});

