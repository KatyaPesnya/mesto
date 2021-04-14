export {
    selectors, formElementEdit, openButtonEdit, formElementAdd, cardsList,
    openButtonAdd, openButtonAvatar, ownerId
}
const selectors = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
}
const formElementEdit = document.querySelector('.popup__container_type_edit');
const formElementAdd = document.querySelector('.popup__container_type_add');
const openButtonEdit = document.querySelector('.profile__popup-button');
const openButtonAdd = document.querySelector('.profile__add-button');
const openButtonAvatar = document.querySelector('.profile__avatar-edit-button')
const cardsList = '.cards__list';
const ownerId = 'b85d15c1fb17e9bebf8e8af5';