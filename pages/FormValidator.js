export default class FormValidator {
  constructor(config, form) {
      this._form = form;
      this._inputSelector = config.inputSelector;
      this._errorSelector = config.errorSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;
      this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      this._errorList = Array.from(this._formSelector.querySelectorAll(this._errorSelector));
      this._submitButton = this._formSelector.querySelector(this._submitButtonSelector);
  };
  
  // Функция очистки сообщений ошибок при повторном открытии попапа
  clearErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  };

  // Показываем сообщение об ошибке
  _showError(inputElement) {
    const error = this._formSelector.querySelector(`#${inputElement.id}-error`);
    console.log(inputElement.id)
    error.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  };

  // Скрываем сообщение об ошибке
  _hideError(inputElement){
    const error = this._formSelector.querySelector(`#${inputElement.id}-error`);
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

  _toggleButtonState() {
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
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListener();
    this._toggleButtonState();
  };
}