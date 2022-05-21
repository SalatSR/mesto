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
// в формах popup
// Profile
const inputFormProfileName = formProfile.querySelector('.popup__input_type_name');
const inputFormProfileJob = formProfile.querySelector('.popup__input_type_job');

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

// Открываем Popup (profile)
function openProfile() {
  const user = userData.getUserInfo();
  inputFormProfileName.value = user.name;
  inputFormProfileJob.value = user.job;
  profileValidation.clearErrors();
  popupWithProfile.open();
};

function openCard() {
  newCardValidation.clearErrors();
  popupCreateCard.open();
};

const profileValidation = new FormValidator(validationConfig, formProfile);
const newCardValidation = new FormValidator(validationConfig, formCard);
profileValidation.enableValidation();
newCardValidation.enableValidation();

// Слушатели кнопок
buttonEdit.addEventListener('click', openProfile);
buttonAdd.addEventListener('click', openCard);