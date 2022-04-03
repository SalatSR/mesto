// Находим окно popup
let popupWindow = document.querySelector('.popup');
// Находим нужный popup
let popupProfile = document.querySelector('.popup__type_profile');
let popupCard = document.querySelector('.popup__type_card');
let popupImageView = document.querySelector('.popup__type_image-view');
// Находим поле Профиля
let profileElement = document.querySelector('.profile');
// Находим формы
let formElement = document.querySelector('.popup__container');
let formProfile = popupProfile.querySelector('.popup__form_profile');
let formCard = popupCard.querySelector('.popup__form_card');
console.log(formElement);
console.log(formProfile);
console.log(formCard);
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
// Находим поля форм
// Profile
let inputFormProfileName = formElement.querySelector('.popup__input_type_name');
let inputFormProfileJob = formElement.querySelector('.popup__input_type_job');
// Card
let inputFormCardTitle = formCard.querySelector('.popup__input_type_title');
let inputFormCardUrl = formCard.querySelector('.popup__input_type_url');
// Находим поле ввода в поле Profile
let inputFormProfileNameProfile = profileElement.querySelector('.profile__info-name');
let inputFormProfileJobProfile = profileElement.querySelector('.profile__info-job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей inputFormProfileJob и inputFormProfileName из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    
    
    // Вставьте новые значения с помощью textContent
    inputFormProfileNameProfile.textContent = inputFormProfileName.value;
    inputFormProfileJobProfile.textContent = inputFormProfileJob.value;
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
  inputFormProfileName.value = inputFormProfileNameProfile.textContent;
  inputFormProfileJob.value = inputFormProfileJobProfile.textContent;
}

// Открываем Popup (card)
function openCard() {
  openPopup(popupCard)
  inputFormProfileName.value = inputFormProfileNameProfile.textContent;
  inputFormProfileJob.value = inputFormProfileJobProfile.textContent;
}

// Открываем Popup (card)
function openImageView() {
  openPopup(popupImageView)
  inputFormProfileName.value = inputFormProfileNameProfile.textContent;
  inputFormProfileJob.value = inputFormProfileJobProfile.textContent;
}

// Слушатели кнопок
editBtn.addEventListener('click', openProfile);
addBtn.addEventListener('click', openCard);
// кнопки закрытия
popupCloserProfile.addEventListener('click', () => closePopup(popupProfile)); // popup Profile
popupCloserCard.addEventListener('click', () => closePopup(popupCard)); // popup Card
popupCloserImageView.addEventListener('click', () => closePopup(popupImageView)); // popup Image