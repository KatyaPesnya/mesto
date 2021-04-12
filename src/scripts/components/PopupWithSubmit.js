import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector)
  //  { handleFormSubmit }, api)
    {
        super(popupSelector);
        this._form = document.querySelector('form');
       // this._handleFormSubmit =  handleFormSubmit;
        //this._submitEvtHandler = this._submitEvtHandler.bind(this);
       // this._api = api
    }
    //_submitEvtHandler(evt) {
    //     evt.preventDefault();
    //     this.setSubmit();
    //     this._form.removeEventListener('submit', this._submitEvtHandler);
    //   }
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