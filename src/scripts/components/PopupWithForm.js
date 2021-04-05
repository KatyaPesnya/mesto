import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }, api) {
        super(popupSelector);
        this._submitButton = this._element.querySelector('.popup__button')
        this._handleFormSubmit = handleFormSubmit; 
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._form =  this._element.querySelector('form');
        this._valueSubmitButton = this._submitButton.textContent;
        this.api = api;
    }
   renderLoading(isLoading, message = 'Сохранение...') {
       if(isLoading) {
        this._submitButton.textContent = message;
       } else {
        this._submitButton.textContent = this._valueSubmitButton;
       }

       
   }
    open(formValues = {}){
        super.open()
        this._setInputValues(formValues)
    }
    _setInputValues(formValues) {
        for (let prop in formValues) {
            const input = Array.from(this._inputList).find(input => input.name === prop)
            if(input !== undefined) {
                input.value = formValues[prop]
            }
        }
    }
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        })
        return formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => { 
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close()
        })
    }
    close() {
        super.close()
        this._form.reset()
    }
}