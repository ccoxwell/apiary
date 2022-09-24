import BeeHelper  from './utils/grid-parser.js'
import { createArrayFromTwoLetter, getTwoLetterObject } from './utils/two-letter-parser.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const gridTextArea = document.getElementById("grid");
    const twoLetterTextArea = document.getElementById("two-letter");
    const showMeButton = document.getElementById("show-me-the-text");
    const gridOutputPre = document.querySelector("#grid-output > pre");
    const twoLetterOutputSection = document.getElementById("two-letter-output");
    const twoLetterOutputPre = document.querySelector("#two-letter-output > pre");

    function createElementWithText(elementTag, textContent) {
        let el = document.createElement(elementTag);
        el.textContent = textContent;
        return el;
    }

    // how do i make this automatically reactive
    function clearOutputElements(elementArray) {
        for (const element of elementArray) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }

    const createTwoLetterListElement = (twoLetterArr) => {
        let ul = document.createElement("ul");
        ul.classList.add("two-letter-list");
        for (const twoLetter of twoLetterArr) {
            ul.appendChild(createTwoLetterLi(twoLetter));
        }
        return ul;
    }

    const createTwoLetterLi = (twoLetterObject) => {
        let li = document.createElement("li");
        li.id = twoLetterObject.id;
        let lettersSpan = document.createElement("span");
        lettersSpan.classList.add("two-letters");
        lettersSpan.innerText = twoLetterObject.value;
        let checkboxesSpan = document.createElement("span");
        for (let i = 0; i < twoLetterObject.count; i++) {
            checkboxesSpan.appendChild(createCheckbox(twoLetterObject));
        }
        li.appendChild(lettersSpan);
        li.appendChild(checkboxesSpan);
        return li;
    }

    const createCheckbox = (twoLetterObject, val = false) => {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", twoLetterObject.value);
        //  instead of setting checked like this, i should probably create an attribute node that conditionally adds the checked attribute
        // checkbox.setAttribute("checked", val)
        return checkbox;
    }

    showMeButton.onclick = e => {
        e.preventDefault();
        const gridText = gridTextArea.value
        gridOutputPre.textContent = gridText
        const helper = new BeeHelper(gridText)
        let gridData = helper.mapLettersAndCounts()
        const twoLetterObjectArray = createArrayFromTwoLetter(
            twoLetterTextArea.value
        ).map((twoLetter) => getTwoLetterObject(twoLetter));
        let twoLetterListUl = createTwoLetterListElement(twoLetterObjectArray);
        twoLetterOutputSection.appendChild(twoLetterListUl);
    }

    const resetElementContents = (element) => element.innerHTML = ''

    // showMeButton.addEventListener("click", function logOutput(e) {

    // });

});

