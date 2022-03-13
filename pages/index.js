// Находим окно popup в DOM
let popupFormContaner = document.querySelector('.popup');
// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');
// Находим кнопку "Close"(popup-profile)
let popupCloser = formElement.querySelector('.popup__closer');



// Находим поле Профиля в DOM
let profileElement = document.querySelector('.profile');
// Находим кнопку "Edit"(profile) в DOM
let editBtn = profileElement.querySelector('.profile__edit-button');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.value;
    jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let nameInputProfile = profileElement.querySelector('.profile__info-name');
    let jobInputProfile = profileElement.querySelector('.profile__info-job');
    // Вставьте новые значения с помощью textContent
    nameInputProfile.textContent = nameInput.value;
    jobInputProfile.textContent = jobInput.value;
    closeProfile();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// Открываем Popup (profile)
function openProfile() {
  popupFormContaner.classList.add('popup_opened');
}
// Закрываем Popup (profile)
function closeProfile() {
  popupFormContaner.classList.remove('popup_opened');
}
// Слушатели на кнопки "Edit"(profile), "Close"(popup-profile) 
editBtn.addEventListener('click', openProfile);
popupCloser.addEventListener('click', closeProfile);