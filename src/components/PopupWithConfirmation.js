import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({popupSelector, handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupButtonSubmit = this._popup.querySelector('.popup__submit-button');
  };

  open(element) {
    super.open();
    this._element = element;
  }
// Получаем текст кнопки подтверждения
  getSubmitBottonText() {
    return this._popupButtonSubmit.textContent;
  }
// Ставим текст на время загрузки
  setLoadingText(txt) {
    this._popupButtonSubmit.textContent = txt;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._element);
    });
  }
}