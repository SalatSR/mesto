const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const setEventListener = (formElement, config) => {
  // Находим поля ввода в каждой форме
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  // находим кнопку submit
  const submitButton = formElement.querySelector(config.submitButtonSelector)
  inputList.forEach((inputElement) => {
    // Вешаем слушатель события input на каждый элемент формы
    // вызываем функцию проверки корректности ввода данных пользователем
    // вызываем функцию контроля состояния кнопки submit
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      setButtonSubmitState(submitButton, formElement.isValid(), config);
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