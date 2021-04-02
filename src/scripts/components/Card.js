
export default class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    //this._api = api;
  }
  _likeCard() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _deleteCard() {
    this._element.querySelector('.card__delete').closest('.card').remove();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    const titleElement = this._element.querySelector('.card__title');
    const imageElement = this._element.querySelector('.card__image');
    titleElement.textContent = this._title;
    imageElement.src = this._image;
    imageElement.alt = this._title;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._deleteCard()
    })
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._likeCard()
    })
    this._element.querySelector('.card__image').addEventListener('click', () => this._handleCardClick())
  }
}
