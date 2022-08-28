window.addEventListener('DOMContentLoaded', (event) => {
    const gridTextArea = document.getElementById("grid");
    const twoLetterTextArea = document.getElementById("two-letter");
    const showMeButton = document.getElementById("show-me-the-text");
    const gridOutputPre = document.querySelector("#grid-output > pre");
    const twoLetterOutputSection = document.getElementById("two-letter-output");
    const twoLetterOutputPre = document.querySelector("#two-letter-output > pre");

    showMeButton.addEventListener("click", function logOutput(e) {
        e.preventDefault();
        // gridOutputPre.textContent = gridTextArea.value;
        const twoLetterObjectArray = createArrayFromTwoLetter(
            twoLetterTextArea.value
        ).map((twoLetter) => getTwoLetterObject(twoLetter));
        let twoLetterListUl = createTwoLetterListElement(twoLetterObjectArray);
        twoLetterOutputSection.appendChild(twoLetterListUl);
    });

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

    const createArrayFromTwoLetter = (twoLetterText) => {
        let twoLetterArray = twoLetterText
            .trim()
            .split("\n")
            .map((row) => row.split(" "))
            .reduce((prev, curr) => prev.concat(curr));
        return twoLetterArray;
    }

    const getTwoLetterObject = (twoLetterEntry) => {
        const twoLetterEntryArr = twoLetterEntry.split("-");
        return {
            id: twoLetterEntry,
            value: twoLetterEntryArr[0].toLowerCase(),
            count: Number(twoLetterEntryArr[1])
        };
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
        //   instead of setting checked like this, i should probably create an attribute node that conditionally adds the checked attribute
        // checkbox.setAttribute("checked", val)
        return checkbox;
    }

});

