import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, handlerSubmit}) {
    super(popupSelector);
    this._handlerSubmit = handlerSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._popupButtonSubmit = this._popup.querySelector('.popup__submit-button');
  };

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  };
  // Ставим текст на время загрузки
  setLoadingText(txt) {
    this._popupButtonSubmit.textContent = txt;
  }
  // Получаем текст кнопки подтверждения
  getSubmitBottonText() {
    return this._popupButtonSubmit.textContent;
  }

  close() {
    this._popupForm.reset();
    super.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmit(this._getInputValues());
    });
  };
};