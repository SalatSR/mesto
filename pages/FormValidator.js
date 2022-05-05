

export default class FormValidator {
  constructor(config, formSelector) {
      this._formSelector = formSelector;
      this._inputSelector = config.inputSelector;
      this._errorSelector = config.errorSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;
      this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
  }
  
  // // Функция очистки сообщений ошибок при повторном открытии попапа
  // _clearErrors() {
  //   const errors = Array.from(this._formSelector.querySelectorAll(this._errorSelector));
  //   const inputs = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
  //   errors.forEach((error) => {
  //     error.textContent = '';
  //   });

  //   inputs.forEach((input) => {
  //     input.classList.remove('popup__input_type_error');
  //   });
  // }

  // // Показываем сообщение об ошибке
  // _showError(inputElement) {
  //   const error = this._formSelector.querySelector(`#${inputElement.id}-error`);
  //   error.textContent = inputElement.validationMessage;
  //   inputElement.classList.add(this._inputErrorClass);
  // }

  // // Скрываем сообщение об ошибке
  // _hideError(inputElement){
  //   const error = this._formSelector.querySelector(`#${inputElement.id}-error`);
  //   error.textContent = '';
  //   inputElement.classList.remove(this._inputErrorClass);
  // }

  // _checkInputValidity(inputElement) {
  //   if (this._hasInvalidInput(inputElement)) {
  //     this._showError(inputElement);
  //   } else {
  //     this._hideError(inputElement);
  //   };
  // };

  // _hasInvalidInput(inputElement) {
  //   return !inputElement.validity.valid;
  // };

  // _toggleButtonState(submitButton, inputElement) {
  //   if (this._hasInvalidInput(inputElement)) {
  //     submitButton.classList.add(this._inactiveButtonClass);
  //     submitButton.disabled = true;
  //   } else {
  //     submitButton.classList.remove(this._inactiveButtonClass);
  //     submitButton.disabled = false;
  //   };
  // };

  _setEventListener = () => {
    console.log('inputElement')
    // // находим кнопку submit
    // const submitButton = this._formSelector.querySelector(this._submitButtonSelector);
    //   // Вешаем слушатель события input на каждый элемент формы
    //   // вызываем функцию проверки корректности ввода данных пользователем
    //   // вызываем функцию контроля стилей состояния кнопки submit
    //   // // inputElement.addEventListener('input', () => {
    //   // //   this._checkInputValidity(inputElement)
    //   // //   this._toggleButtonState(submitButton, inputElement);
    //   // // })
    //   this._inputList.forEach((inputElement) => {
    //     inputElement.addEventListener('input', () => {
    //       this._checkInputValidity(inputElement)
    //       this._toggleButtonState(submitButton, inputElement);
    //     });
    //   })
  };

  enableValidation = () => {
    this._formSelector.forEach((formElement) => {
      // сбрасываем стандартное действие формы на событие submit
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      console.log('enableValidation')
      // вызываем функцию чтобы поставить слушатели на поля ввода во всех формах
      // this._setEventListener(inputElement);
      this._setEventListener();
    });
  };
}