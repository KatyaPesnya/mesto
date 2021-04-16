export default class Section {
    constructor({items, renderer}, containerSelector, api) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._items= items;
        this._api = api;
    }
    prependItem (element){
        this._container.prepend(element)  
    }
    
    addItem(element) {
        this._container.append(element)
    }

    renderCards(cardsData){
        cardsData.forEach(({name, link, owner, likes, _id})  => {
            this._renderer({title: name, image: link, owner: owner, likes: likes, id:_id});
        })

    }
}