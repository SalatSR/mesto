const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
// Показываем сообщение об ошибке
const showError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#${inputElement.id}-error`);
  error.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

// Скрываем сообщение об ошибке
const hideError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`#${inputElement.id}-error`);
  error.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

// Проверяем валидно ли введёное в поле ввода значение
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, config);
    return false;
  } else {
    hideError(formElement, inputElement, config);
    return true;
  };
}

// задаём функцию контроля стилей состояния кнопки submit
const toggleButtonState = (formSubmitButton, isActive, config) => {
  if (!isActive) {
    formSubmitButton.classList.add(config.inactiveButtonClass);
    formSubmitButton.disabled = true;
  } else {
    formSubmitButton.classList.remove(config.inactiveButtonClass);
    formSubmitButton.disabled = false;
  };
}

const setEventListener = (formElement, config) => {
  // Находим поля ввода в каждой форме
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  // находим кнопку submit
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  // вызываем функцию проверки состояния стилей кнопки submit
  toggleButtonState(submitButton, formElement.checkInputValidity, config);
  inputList.forEach((inputElement) => {
    // Вешаем слушатель события input на каждый элемент формы
    // вызываем функцию проверки корректности ввода данных пользователем
    // вызываем функцию контроля стилей состояния кнопки submit
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      // toggleButtonState(submitButton,  formElement.checkInputValidity(), config);
      toggleButtonState(submitButton,  inputElement.validity.valid, config);
    });
  });
};

// задаём функцию валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    // вызываем функцию чтобы поставить слушатели на поля ввода во всех формах
    setEventListener(formElement, config);
    // сбрасываем стандартное действие формы на событие submit
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });
};

// включаем валидацию
enableValidation(validationConfig);