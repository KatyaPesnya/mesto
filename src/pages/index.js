import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import {
  formElementEdit, openButtonEdit, formElementAdd, cardsList,
  openButtonAdd, initialCards, selectors
} from '../scripts/utils/constants.js';
import './index.css';
import '../index.html';

// fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
//   headers: {
//     autorization: '8bc2b522-b2e5-4475-a3df-8cf1760d3928'
//   }
// })
// .then(res => res.json())
// .then((result) => {
//   console.log(result)
// })

// fetch('https://mesto.nomoreparties.co/v1/cohor-21/users/me', {
//   headers: {
//     autorization: '8bc2b522-b2e5-4475-a3df-8cf1760d3928'
//   }
// })
// .then(res => res.json())
// .then((result) => {
//   console.log(result)
// })

const popupWithImage = new PopupWithImage('.overlay_type_preview');

const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()

const formEditValudator = new FormValidator(selectors, formElementEdit)
formEditValudator.enableValidation()

const userInfo = new UserInfo('.profile__title', '.profile__description')

popupWithImage.setEventListeners();

const popupEditForm = new PopupWithForm('.overlay_type_edit',
  {
    handleFormSubmit: ({ title, description }) => {
      userInfo.setUserInfo({ title, description });
    }
  });

popupEditForm.setEventListeners();

// const popupAvatarForm = new PopupWithForm ('.overlay_avatar',
// {
//   handleFormSubmit: ({avatar}) => {

//   }
// })
const popupAddForm = new PopupWithForm('.overlay_type_add',
  {
    handleFormSubmit: ({caption, url}) => { 
      const card = createCard({
        title: caption,
        image: url
     });//изображения грузятся только с локального компьютера/
     cardList.prependItem(card)
      formAddValidator.disableSubmitButton()
    }
  })

popupAddForm.setEventListeners()

openButtonAdd.addEventListener('click', () => {
  popupAddForm.open();
  formAddValidator.disableSubmitButton()
})
openButtonEdit.addEventListener('click', () => {
  popupEditForm.open(userInfo.getUserInfo());

})

function createCard(item) {
  const card = new Card(item, '.card-template', {
    handleCardClick: () => {
      popupWithImage.open(item);
    }
  });
  return card.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item))
  }
}, cardsList)
  
cardList.renderItems()