

export default class FormValidator {
  constructor(config, formSelector) {
      this._formSelector = formSelector;
      this._inputSelector = config.inputSelector;
      this._errorSelector = config.errorSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass
  }
  _setEventListener() {
    console.log('first');
    // // Находим поля ввода в каждой форме
    // const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    // // находим кнопку submit
    // const submitButton = formElement.querySelector(config.submitButtonSelector);
    // toggleButtonState(submitButton, inputList, config);
    // inputList.forEach((inputElement) => {
    //   // Вешаем слушатель события input на каждый элемент формы
    //   // вызываем функцию проверки корректности ввода данных пользователем
    //   // вызываем функцию контроля стилей состояния кнопки submit
    //   inputElement.addEventListener('input', () => {
    //     checkInputValidity(formElement, inputElement, config)
    //     toggleButtonState(submitButton, inputList, config);
    //   });
    // });
  };

  enableValidation() {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    inputList.forEach((formElement) => {
      // сбрасываем стандартное действие формы на событие submit
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      // вызываем функцию чтобы поставить слушатели на поля ввода во всех формах
      this._setEventListener();
    });
  };
}