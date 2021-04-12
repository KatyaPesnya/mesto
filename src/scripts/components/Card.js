import {ownerId} from '../utils/constants'
export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleDeleteCard}, api) {
    this._title = data.title;
    this._image = data.image;
    this._id = data._id;
    this.ownerId = data.owner._id
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    // this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this._api = api;
this.deleteElementCard = this.deleteElementCard.bind(this)
  }

  _likeCard() {
    this._element.querySelector('.card__like')
        .classList.toggle('card__like_active');
  }

  _checkDeleteCard() {
    if (this.ownerId !== ownerId) {
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
      this._likeCard()
    })
    this._element.querySelector('.card__image').addEventListener('click', () =>{
      this._handleCardClick()
    })
  }
}