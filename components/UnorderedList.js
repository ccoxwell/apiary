import ListItem from './ListItem.js'

export default class UnorderedList {

    constructor(listData) {
        this.listData = listData
    }

    get el() {
        const ul = document.createElement('ul')
        ul.classList.add('two-letter-list')
        console.log(this.listData)
        for (const twoLetter of this.listData) {
            const li = new ListItem(twoLetter)
            ul.appendChild(li.el)
        }
        return ul
    }

}