// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   errorSelector: '.popup__error',
//   submitButtonSelector: '.popup__submit-button',
//   inactiveButtonClass: 'popup__submit-button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// // };
// // Функция очистки сообщений ошибок при повторном открытии попапа
// function clearErrors (type, config) {
//   const errors = Array.from(type.querySelectorAll(config.errorSelector));
//   const inputs = Array.from(type.querySelectorAll(config.inputSelector));
//   errors.forEach((error) => {
//     error.textContent = '';
//   });

//   inputs.forEach((input) => {
//     input.classList.remove('popup__input_type_error');
//   });
// }

// // Показываем сообщение об ошибке
// const showError = (formElement, inputElement, config) => {
//   const error = formElement.querySelector(`#${inputElement.id}-error`);
//   error.textContent = inputElement.validationMessage;
//   inputElement.classList.add(config.inputErrorClass);
// }

// // Скрываем сообщение об ошибке
// const hideError = (formElement, inputElement, config) => {
//   const error = formElement.querySelector(`#${inputElement.id}-error`);
//   error.textContent = '';
//   inputElement.classList.remove(config.inputErrorClass);
// }

// // Проверяем валидно ли введёное в поле ввода значение
// const checkInputValidity = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showError(formElement, inputElement, config);
//   } else {
//     hideError(formElement, inputElement, config);
//   };
// }

// // задаём функцию контроля стилей состояния кнопки submit
// const toggleButtonState = (formSubmitButton, inputList, config) => {
//   if (hasInvalidInput(inputList)) {
//     formSubmitButton.classList.add(config.inactiveButtonClass);
//     formSubmitButton.disabled = true;
//   } else {
//     formSubmitButton.classList.remove(config.inactiveButtonClass);
//     formSubmitButton.disabled = false;
//   };
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some(inputElement => {
//     return !inputElement.validity.valid;
//   });
// };

// const setEventListener = (formElement, config) => {
//   // Находим поля ввода в каждой форме
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   // находим кнопку submit
//   const submitButton = formElement.querySelector(config.submitButtonSelector);
//   toggleButtonState(submitButton, inputList, config);
//   inputList.forEach((inputElement) => {
//     // Вешаем слушатель события input на каждый элемент формы
//     // вызываем функцию проверки корректности ввода данных пользователем
//     // вызываем функцию контроля стилей состояния кнопки submit
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, config)
//       toggleButtonState(submitButton, inputList, config);
//     });
//   });
// };

// задаём функцию валидации
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     // сбрасываем стандартное действие формы на событие submit
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     // вызываем функцию чтобы поставить слушатели на поля ввода во всех формах
//     setEventListener(formElement, config);
//   });
// };

// включаем валидацию
// enableValidation(validationConfig);
