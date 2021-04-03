export {
  initialCards, selectors, popupEdit, formElementEdit, nameInput, jobInput, openButtonEdit,
  titleName, descriptionName, popupAdd,
  formElementAdd, titleInput, urlInput, cardsList,
  openButtonAdd, popupPreview, popupImage, popupCaption, EscCode, openButtonAvatar
}

const initialCards = [{
  title: 'Архыз',
  image: 'https://cdn.photosight.ru/img/5/1ea/6958682_xlarge.jpg'
},
{
  title: 'Челябинская область',
  image: 'http://mediazavod.ru/upload/iblock/cb2/cb2e63971b4d54b0223680201ef94689.jpg'
},
{
  title: 'Иваново',
  image: 'http://s1.fotokto.ru/photo/full/421/4219820.jpg'
},
{
  title: 'Камчатка',
  image: 'https://spletnik.ru/img/__post/31/311bd19174dbed244405c51744e8b10d_731.jpg'
},
{
  title: 'Холмогорский район',
  image: 'https://cdn.fishki.net/upload/post/201510/03/1683934/1a1bb3e7d9d85f4fe5344bbe750d4921.jpg'
},
{
  title: 'Байкал',
  image: 'https://i.artfile.ru/1920x1167_1191880_[www.ArtFile.ru].jpg'
}];

const selectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
}

//1 попап имя ученого edit
const popupEdit = '.overlay_type_edit';
const formElementEdit = document.querySelector('.popup__container_type_edit');
const nameInput = formElementEdit.querySelector('[name="popup-name"]');
const jobInput = formElementEdit.querySelector('[name="popup-job"]');
const openButtonEdit = document.querySelector('.profile__popup-button');
const titleName = '.profile__title';
const descriptionName = '.profile__description';

//2 попап добавление карточки add
const popupAdd = document.querySelector('.overlay_type_add');
const formElementAdd = document.querySelector('.popup__container_type_add');
const titleInput = formElementAdd.querySelector('[name="caption"]');
const urlInput = formElementAdd.querySelector('[name="url"]');
const cardsList = '.cards__list';
const openButtonAdd = document.querySelector('.profile__add-button');

//3 попап увеличение фото Preview
const popupPreview = document.querySelector('.overlay_type_preview');
const popupImage = popupPreview.querySelector('.overlay__image');
const popupCaption = popupPreview.querySelector('.overlay__caption');
const EscCode = 27;
const openButtonAvatar = document.querySelector('.profile__avatar-edit-button')