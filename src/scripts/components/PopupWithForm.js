import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit; 
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._form =  this._element.querySelector('form');
        //this.api = api;
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