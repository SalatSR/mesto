export default class FormValidator {
  constructor(config, form) {
      this._form = form;
      this._inputSelector = config.inputSelector;
      this._errorSelector = config.errorSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;
      this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
      this._submitButton = this._form.querySelector(this._submitButtonSelector);
  };
  
  // Функция очистки сообщений ошибок при повторном открытии попапа
  clearErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this.toggleButtonState();
  };

  // Показываем сообщение об ошибке
  _showError(inputElement) {
    const error = this._form.querySelector(`#${inputElement.id}-error`);
    error.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  };

  // Скрываем сообщение об ошибке
  _hideError(inputElement){
    const error = this._form.querySelector(`#${inputElement.id}-error`);
    error.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
  };

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    };
  };

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    };
  };

  _setEventListener = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListener();
    this.toggleButtonState();
  };
}