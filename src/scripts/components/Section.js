export default class Section {
    constructor({renderer}, containerSelector, api) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._api = api;
        this._loadCards()
    }
    prependItem (element){
        this._container.prepend(element)  
    }
    
    addItem(element) {
        this._container.append(element)
    }
    _loadCards() {
     this._api.getCards()
     .then(resp => { 
         resp.forEach(({name, link, owner, likes}  ) => {
             this._renderer({title: name, image: link, owner: owner, likes: likes})
             
         });
     })
    }
}