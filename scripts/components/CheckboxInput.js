export default class CheckboxInput {
    constructor(twoLetter, val) {
        this.twoLetter = twoLetter
        this.val = val        
    }

    get el() {
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("name", this.twoLetter.value)
        return checkbox
    }
}