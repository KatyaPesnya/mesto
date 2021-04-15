export default class Section {
    constructor({items, renderer}, containerSelector, api) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._items= items;
        this._api = api;
       // this._loadCards()
    }
    prependItem (element){
        this._container.prepend(element)  
    }
    
    addItem(element) {
        this._container.append(element)
    }

    renderCards(cardsData){
        cardsData.forEach(card => {
            this._renderer(card);
        })

    }
}