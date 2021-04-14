import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._element.querySelector('form');
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            this._handleFormSubmit()
        });
      }
      setSubmit(handleFormSubmit){
           this._handleFormSubmit =  handleFormSubmit;
      }
}