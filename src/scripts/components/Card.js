
export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleDeleteCard, handleLikeClick,handleDeleteLikeClick }, api) {
    this._title = data.title;
    this._image = data.image;
    this._likes = data.likes;
    this._id = data._id;
    this.ownerId = data.owner._id
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteLikeClick = handleDeleteLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this._api = api;
    this.deleteElementCard = this.deleteElementCard.bind(this)
  }

  _removeLikedClass() {
    this._element.querySelector('.card__like').classList.remove('card__like_active');
  }

  _addLikedClass() {
    this._element.querySelector('.card__like').classList.add('card__like_active');
  }
  setLikeCount() {
    this._element.querySelector('.card__like-count').textContent = String(this._likes.length)

   }
  _dislike() {
    this._removeLikedClass();
    this._handleDeleteLikeClick(this._likes);
  }

  _like() {
    this._addLikedClass();
    this._handleLikeClick(this._likes);
  }
  _checkLiked() {
    this._likes.forEach((like) => {
      if (like._id === this.ownerId) {
        this._addLikedClass();
      }
    })
  }
  _checkDeleteCard() {
    if (this.ownerId !== this.ownerId) {
      this._deleteCard()
    }
  }
  deleteElementCard(){
  this._element.remove()

}
  _deleteCard() {
    this._element.querySelector('.card__delete').remove();
  }

  _getTemplate() {
    const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .firstElementChild
        .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    this._checkDeleteCard()
    this.setLikeCount()
    this._checkLiked()
    const titleElement = this._element.querySelector('.card__title');
    const imageElement = this._element.querySelector('.card__image');
    titleElement.textContent = this._title;
    imageElement.src = this._image;
    imageElement.alt = this._title;

    return this._element;

  }

  _setEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteCard(this)
    })
    this._element.querySelector('.card__like').addEventListener('click', () => {
      if (this._element.querySelector('.card__like').classList.contains('card__like_active')) {
        this._dislike();
      } else {
        this._like();
      }
    })
    this._element.querySelector('.card__image').addEventListener('click', () =>{
      this._handleCardClick()
    })
  }
}