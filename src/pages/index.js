import './index.css';
import '../index.html';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';
import Api from '../scripts/components/Api.js'
import {
    formElementEdit, formElementAdd, openButtonEdit,
    openButtonAdd, selectors, cardsList, openButtonAvatar
} from '../scripts/utils/constants.js';

const options = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-21',
    headers: {
        Authorization: '8bc2b522-b2e5-4475-a3df-8cf1760d3928',
        'Content-Type': 'application/json',

    }
}

const api = new Api(options)
const userInfo = new UserInfo('.profile__title', '.profile__description', '.profile__avatar', api)

//список карточек
const cardList = new Section({
    renderer: (item) => {
        cardList.addItem(createCard(item))
    }
}, cardsList, api)

// создание карточки
function createCard(item) {

    const card = new Card(item, '.card-template',{
        handleCardClick: () => {
            popupWithImage.open(item);
        },
        handleDeleteCard: (param) => {
            popupWithSubmit.setSubmit(() => {
                api.deleteCard(item.id)
                    .then(({_id})=>{
                       param.deleteElementCard()
                        popupWithSubmit.close();
                    })
                    .catch((err) =>{
                        console.log(err)
                        })
            })
            popupWithSubmit.open();
        },
        handleLikeClick: () => {
            api.setLike(item.id)
                .then(({likes}) => {
                    card.setLikeCount(item.likes.length = likes.length );

                })
                .catch((err) => {
                    console.log(err);
                })
        },
        handleDeleteLikeClick: () => {
        api.deleteLike(item.id)
            .then(({likes}) => {
                card.setLikeCount(item.likes.length = likes.length );

            })
            .catch((err) => {
                console.log(err);
            })
        },api
    });
    return card.generateCard();
}

//попап подтверждения удаления карточки 
const popupWithSubmit = new PopupWithSubmit('.overlay_delete-card')
popupWithSubmit.setEventListeners()
// добавление карточки
const popupAddForm = new PopupWithForm('.overlay_type_add',
    {
        handleFormSubmit: ({caption, url}) => {
            popupAddForm.renderLoading(true)
            api.createCard({caption, url})
                .then(({name, link, owner, _id, likes}) => {
                    const card = createCard({
                        title: name,
                        image: link,
                        owner: owner,
                        id:_id,
                        likes: likes
                    });
                    cardList.prependItem(card)
                    formAddValidator.disableSubmitButton()
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    popupAddForm.renderLoading(false);
                    popupAddForm.close()
                })
        }, api
    })

popupAddForm.setEventListeners()

// user info update
api.getInfo()
    .then(({name, about, avatar}) => {
        userInfo.setUserInfo({title: name, description: about, avatar: avatar})
    })

//edit form
const popupEditForm = new PopupWithForm('.overlay_type_edit',
    {
        handleFormSubmit: ({
                               title: name,
                               description: about
                           }) => {
            popupEditForm.renderLoading(true)
            api.setInfo({
                name: name,
                about: about
            })
                .then(({
                           name: name,
                           about: about,
                           avatar: avatar
                       }) => {
                    userInfo.setUserInfo({title: name, description: about, avatar:avatar})
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    popupEditForm.renderLoading(false);
                    popupEditForm.close();
                })
        }, api
    });

popupEditForm.setEventListeners();

//попап аватарки
const popupAvatar = new PopupWithForm('.overlay_avatar',
    {
        handleFormSubmit: ({avatar}) => {
            popupAvatar.renderLoading(true);
            api.setAvatar({avatar})
                .then(({avatar}) => {

                    userInfo.setUserAvatar({avatar: avatar})
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    popupAvatar.renderLoading(false);
                    popupAvatar.close();
                })
        }, api
    })
popupAvatar.setEventListeners();

//  попап превью картинки
const popupWithImage = new PopupWithImage('.overlay_type_preview');
popupWithImage.setEventListeners();

//валидация форм
const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()

const formEditValidator = new FormValidator(selectors, formElementEdit)
formEditValidator.enableValidation()

// обработчик кнопки добавления карточки
openButtonAdd.addEventListener('click', () => {
    popupAddForm.open();
    formAddValidator.disableSubmitButton()
})
// обработчик кнопки редактирования пользователя
openButtonEdit.addEventListener('click', () => {
    popupEditForm.open(userInfo.getUserInfo());
})
// обработчик кнопки редактирования аватара пользователя
openButtonAvatar.addEventListener('click', () => {
    popupAvatar.open()
})

