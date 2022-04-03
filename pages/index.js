// Находим окно popup
let popupWindow = document.querySelector('.popup');
// Находим нужный popup
let popupProfile = document.querySelector('.popup__type_profile');
let popupCard = document.querySelector('.popup__type_card');
let popupImageView = document.querySelector('.popup__type_image-view');
// Находим поле Профиля
let profileElement = document.querySelector('.profile');
// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим кнопки
let editBtn = profileElement.querySelector('.profile__edit-button'); // "Edit"
let addBtn = profileElement.querySelector('.profile__add-button'); // "Add"
// кнопки закрытия
let popupCloserProfile = popupProfile.querySelector('.popup__closer_profile'); // popup Profile
let popupCloserCard = popupCard.querySelector('.popup__closer_card'); // popup Card
let popupCloserImageView = popupImageView.querySelector('.popup__closer_image-view'); // popup Image
// кнопки отправки форм
let popupSubmitProfile = popupProfile.querySelector('.popup__submit-button_profile'); 
let popupSubmitCard = popupProfile.querySelector('.popup__submit-button_card'); 
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
// Находим кнопку ПОля ввода в профиле
let nameInputProfile = profileElement.querySelector('.profile__info-name');
let jobInputProfile = profileElement.querySelector('.profile__info-job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    
    
    // Вставьте новые значения с помощью textContent
    nameInputProfile.textContent = nameInput.value;
    jobInputProfile.textContent = jobInput.value;
    closeProfile();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// Открываем Popup
function openPopup(type) {
  type.classList.add('popup_opened');
}

// Закрываем Popup
function closePopup(type) {
  type.classList.remove('popup_opened');
}

// Открываем Popup (profile)
function openProfile() {
  openPopup(popupProfile)
  nameInput.value = nameInputProfile.textContent;
  jobInput.value = jobInputProfile.textContent;
}

// Открываем Popup (card)
function openCard() {
  openPopup(popupCard)
  nameInput.value = nameInputProfile.textContent;
  jobInput.value = jobInputProfile.textContent;
}

// Открываем Popup (card)
function openImageView() {
  openPopup(popupImageView)
  nameInput.value = nameInputProfile.textContent;
  jobInput.value = jobInputProfile.textContent;
}

// Слушатели кнопок
editBtn.addEventListener('click', openProfile);
addBtn.addEventListener('click', openCard);
popupCloserProfile.addEventListener('click', () => closePopup(popupProfile)); // "Close" (popup Profile)
popupCloserCard.addEventListener('click', () => closePopup(popupCard)); // "Close" (popup Card)
popupCloserImageView.addEventListener('click', () => closePopup(popupImageView)); // "Close" (popup Image)