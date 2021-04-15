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
    // renderItems() {
    //     this._items.forEach(item => {
    //         this._renderer(item)
    //     })

        renderCards(cardsData){
            cardsData.forEach(card => {
                this._renderer(card);
            })

    // _loadCards() {
    //  this._api.getCards()
    //  .then(resp => {
    //      resp.forEach(({name, link, owner, likes, _id}  ) => {
    //          this._renderer({title: name, image: link, owner: owner, likes: likes, id:_id})
    //
    //      });
     //})
    }
}