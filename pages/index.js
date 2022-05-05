import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

// Находим нужный popup
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
export const popupImageView = document.querySelector('.popup_image-view');
// Находим поле Профиля
const profileSection = document.querySelector('.profile');
// Находим формы
const formProfile = popupProfile.querySelector('.popup__form_profile');
const formCard = popupCard.querySelector('.popup__form_card');
// Находим кнопки
const editBtn = profileSection.querySelector('.profile__edit-button'); // "Edit"
const addBtn = profileSection.querySelector('.profile__add-button'); // "Add"
// кнопки закрытия
const popupCloserProfile = popupProfile.querySelector('.popup__closer_profile'); // popup Profile
const popupCloserCard = popupCard.querySelector('.popup__closer_card'); // popup Card
const popupCloserImageView = popupImageView.querySelector('.popup__closer_image-view'); // popup Image
// кнопки отправки форм
const popupSubmitProfile = popupProfile.querySelector('.popup__submit-button_profile'); 
const popupSubmitCard = popupCard.querySelector('.popup__submit-button_card');
// Находим поля ввода
// Находим поле ввода в поле Profile
const inputFormProfileNameProfileSection = profileSection.querySelector('.profile__info-name');
const inputFormProfileJobProfileSection = profileSection.querySelector('.profile__info-job');
// в формах popup
// Profile
const inputFormProfileName = formProfile.querySelector('.popup__input_type_name');
const inputFormProfileJob = formProfile.querySelector('.popup__input_type_job');
// Card
const inputFormCardTitle = formCard.querySelector('.popup__input_type_title');
const inputFormCardUrl = formCard.querySelector('.popup__input_type_url');
// Находим Поле карт
const cardsContainer = document.querySelector('.cards');
// Находим поля ссылки и описания для попапа 
export const popupImageViewWindow = popupImageView.querySelector('.popup__image-view-window');
export const popupImageViewDescription = popupImageView.querySelector('.popup__description');
// Находим шаблон карточки
// const cardTemplate = document.querySelector('#card-template').content;

const validationConfig = {
  // formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorSelector: '.popup__error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Функция закрытия попапа по клавише
function popupCloserByKeydown (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// Функция проверки элемента на котором сработало событие click
function popupCloseByClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

// Открываем Popup
export function openPopup(type) {
  type.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloserByKeydown);
  type.addEventListener('click', popupCloseByClick);
}
// Закрываем Popup
function closePopup(type) {
  type.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloserByKeydown);
  type.removeEventListener('click', popupCloseByClick);
}
// Открываем Popup (profile)
function openProfile() {
  // clearErrors(popupProfile, validationConfig);
  inputFormProfileName.value = inputFormProfileNameProfileSection.textContent;
  inputFormProfileJob.value = inputFormProfileJobProfileSection.textContent;
  const formProfileValidator = new FormValidator(validationConfig, formProfile);
  // formProfileValidator._clearErrors();
  // const inputList = Array.from(formCard.querySelectorAll(validationConfig.inputSelector));
  // const inputList = Array.from(formProfile.querySelectorAll(validationConfig.inputSelector));
  // toggleButtonState(popupSubmitProfile, inputList, validationConfig);
  // formCardValidator._toggleButtonState(popupSubmitProfile, validationConfig.inputSelector);
  openPopup(popupProfile)
  formProfileValidator.enableValidation();
}
// Открываем Popup (card)
function openCard() {
  inputFormCardTitle.value = '';
  inputFormCardUrl.value = '';
  const formCardValidator = new FormValidator(validationConfig, formCard);
  // const inputList = Array.from(formCard.querySelectorAll(validationConfig.inputSelector));
  // clearErrors(popupCard, validationConfig);
  // formCardValidator._clearErrors();
  // formCardValidator._toggleButtonState(popupSubmitCard, validationConfig.inputSelector);
  // toggleButtonState(popupSubmitCard, inputList, validationConfig);
  openPopup(popupCard);
  formCardValidator.enableValidation();
}
// Открываем Popup (Image-view)
// function openImageView(name, link) {
//   popupImageViewWindow.src = link;
//   popupImageViewWindow.alt = name;
//   popupImageViewDescription.textContent = name;
//   openPopup(popupImageView)
// }
// Кнопки на карточках
// Кнопка like
// function addLike(event) {
//   event.target.classList.toggle('card__like_active'); 
// }
// Кнопка удалить
// function deleteCard(event) {
//   event.target.closest('.card').remove();
// }

// Функция наполнения новой карточки
// function fillNewCard(cardHeader, cardLink) {
//   const cardItem = cardTemplate.cloneNode(true);
//   const cardImg = cardItem.querySelector('.card__img');
//   const cardName = cardItem.querySelector('.card__name');
//   const cardDelete= cardItem.querySelector('.card__delete-button');
//   const cardLike = cardItem.querySelector('.card__like');
//   // Сохраняем ссылку и описание
//   cardImg.alt = cardHeader;
//   cardImg.src = cardLink;
//   // Подключаем слушатели кнопок карточки
//   cardDelete.addEventListener('click', deleteCard);
//   cardLike.addEventListener('click', addLike);

//   cardImg.addEventListener('click', () => openImageView(cardHeader, cardLink));
//   cardName.textContent = cardHeader;

//   return cardItem;
// }

// Функция добавления новой карточки в разметку
function addNewCard (cardItem) {
  cardsContainer.prepend(cardItem);
}
//загружаем базовые карточки
initialCards.forEach((item) => {
  const card = new Card(item, '#card-template');
  addNewCard(card.generateCard());
});

// Обработчик события submit на формах
// Profile
function formSubmitProfile(event) {
  event.preventDefault();
  inputFormProfileNameProfileSection.textContent = inputFormProfileName.value;
  inputFormProfileJobProfileSection.textContent = inputFormProfileJob.value;
  closePopup(popupProfile);
}
// Card
// function formSubmitCard(event) {
//   event.preventDefault();
//   const cardHeader = inputFormCardTitle.value;
//   const cardLink = inputFormCardUrl.value;
//   addNewCard(fillNewCard(cardHeader, cardLink));
//   closePopup(popupCard);
//   return cardHeader, cardLink;
// }
function formSubmitCard(event) {
  event.preventDefault();
  const newCard = {};
  newCard.name = inputFormCardTitle.value;
  newCard.link = inputFormCardUrl.value;
  const card = new Card(newCard, '#card-template');
  addNewCard(card.generateCard());
  closePopup(popupCard);
}


// Слушатели кнопок
editBtn.addEventListener('click', openProfile);
addBtn.addEventListener('click', openCard);
// кнопки закрытия
popupCloserProfile.addEventListener('click', () => closePopup(popupProfile)); // popup Profile
popupCloserCard.addEventListener('click', () => closePopup(popupCard)); // popup Card
popupCloserImageView.addEventListener('click', () => closePopup(popupImageView)); // popup Image
// События submit в формах
formProfile.addEventListener('submit', formSubmitProfile);
formCard.addEventListener('submit', formSubmitCard);