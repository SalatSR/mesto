import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._handlerSubmit = handlerSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
  };
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // this._handlerSubmit(this.getInputValues());
      this.close();
    });
  };
}