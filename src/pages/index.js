import './index.css';
import {initialCards} from "../utils/default.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

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
const buttonEdit = profileSection.querySelector('.profile__edit-button'); // "Edit"
const buttonAdd = profileSection.querySelector('.profile__add-button'); // "Add"
// // кнопки закрытия
// const popupCloserProfile = popupProfile.querySelector('.popup__closer_profile'); // popup Profile
// const popupCloserCard = popupCard.querySelector('.popup__closer_card'); // popup Card
// const popupCloserImageView = popupImageView.querySelector('.popup__closer_image-view'); // popup Image
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
// // Находим поля ссылки и описания для попапа 
// export const popupImageViewWindow = popupImageView.querySelector('.popup__image-view-window');
// export const popupImageViewDescription = popupImageView.querySelector('.popup__description');

const validationConfig = {
  inputSelector: '.popup__input',
  errorSelector: '.popup__error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const popupWithImage = new PopupWithImage('.popup_image-view');
popupWithImage.setEventListeners();

function newCard(item) {
  const card = new Card ({
    name: item.name,
    link: item.link,
    handleCardClick: () => {
      popupWithImage.open(item);
    }
  },
  '#card-template'
  );
  const generatedCard = card.generateCard();
  return generatedCard;
};

const sectionDefault = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = newCard(item);
    sectionDefault.addItem(card);
  }
},
'.cards'
);
sectionDefault.renderItems();

const userData = new UserInfo({
  nameSelector: '.profile__info-name',
  jobSelector: '.profile__info-job'
});

const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handlerSubmit: (item) => {
    userData.setUserInfo(item);
  }
});  
popupWithProfile.setEventListeners();

const popupCreateCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handlerSubmit: (item) => {
    const card = newCard(item);
    sectionDefault.addItem(card);
  }
});
popupCreateCard.setEventListeners();


const profileValidation = new FormValidator(validationConfig, formProfile);
const newCardValidation = new FormValidator(validationConfig, formCard);
profileValidation.enableValidation();
newCardValidation.enableValidation();

// //Функция закрытия попапа по клавише
// function popupCloserByKeydown (evt) {
//   if (evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened);
//   };
// };

// // Функция проверки элемента на котором сработало событие click
// function popupCloseByClick(evt) {
//   if (evt.target.classList.contains('popup')) {
//     closePopup(evt.target);
//   };
// };

// // Открываем Popup
// export function openPopup(type) {
//   type.classList.add('popup_opened');
//   document.addEventListener('keydown', popupCloserByKeydown);
//   type.addEventListener('mousedown', popupCloseByClick);
// };
// // Закрываем Popup
// function closePopup(type) {
//   type.classList.remove('popup_opened');
//   document.removeEventListener('keydown', popupCloserByKeydown);
//   type.removeEventListener('mousedown', popupCloseByClick);
// };
// Открываем Popup (profile)
function openProfile() {
  const user = userData.getUserInfo();
  inputFormProfileName.value = user.name;
  inputFormProfileJob.value = user.job;
  profileValidation.clearErrors();
  // openPopup(popupProfile);
  popupWithProfile.open();
};

// // Открываем Popup (profile)
// function openProfile() {
//   inputFormProfileName.value = inputFormProfileNameProfileSection.textContent;
//   inputFormProfileJob.value = inputFormProfileJobProfileSection.textContent;
//   profileValidation.clearErrors();
//   // openPopup(popupProfile);
//   const popup = new Popup(popupProfile);
//   popup.open()
// };
// // Открываем Popup (card)
// function openCard() {
//   inputFormCardTitle.value = '';
//   inputFormCardUrl.value = '';
//   newCardValidation.clearErrors();
//   // openPopup(popupCard);
//   const popup = new Popup(popupCard);
//   popup.open()
// }
function openCard() {
  profileValidation.clearErrors();
  popupCreateCard.open();
};
// // Функция добавления новой карточки в разметку
// function addNewCard (cardItem) {
//   cardsContainer.prepend(cardItem);
// };
// //загружаем базовые карточки
// initialCards.forEach((item) => {
//   const card = new Card(item, '#card-template');
//   addNewCard(card.generateCard());
// });







// // Обработчик события submit на формах
// // Profile
// function formSubmitProfile(event) {
//   event.preventDefault();
//   inputFormProfileNameProfileSection.textContent = inputFormProfileName.value;
//   inputFormProfileJobProfileSection.textContent = inputFormProfileJob.value;
//   closePopup(popupProfile);
// }
// function formSubmitCard(event) {
//   event.preventDefault();
//   const cardNew = {};
//   cardNew.name = inputFormCardTitle.value;
//   cardNew.link = inputFormCardUrl.value;
//   const card = new Card(cardNew, '#card-template');
//   addNewCard(card.generateCard());
//   closePopup(popupCard);
// }
// Слушатели кнопок
buttonEdit.addEventListener('click', openProfile);
buttonAdd.addEventListener('click', openCard);
// // кнопки закрытия
// popupCloserProfile.addEventListener('click', () => closePopup(popupProfile)); // popup Profile
// popupCloserCard.addEventListener('click', () => closePopup(popupCard)); // popup Card
// popupCloserImageView.addEventListener('click', () => closePopup(popupImageView)); // popup Image
// События submit в формах
// formProfile.addEventListener('submit', formSubmitProfile);
// formCard.addEventListener('submit', formSubmitCard);