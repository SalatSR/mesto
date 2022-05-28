import './index.css';
import {
  initialCards,
  formProfile,
  formCard,
  buttonEdit,
  buttonAdd,
  inputFormProfileName,
  inputFormProfileJob,
  validationConfig
} from "../utils/Constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

// создаём экземпляр popupWithImage класса UserInfo
const popupWithImage = new PopupWithImage('.popup_image-view');
popupWithImage.setEventListeners();

// Передаём данные для сборки шаблона карточки
function createCard(item) {
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

// Инициализируем загрузку карточек по-умолчанию
const sectionDefault = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    sectionDefault.addItem(card);
  }
},
'.cards'
);
sectionDefault.renderItems();

// создаём экземпляр userData класса UserInfo
const userData = new UserInfo({
  nameSelector: '.profile__info-name',
  jobSelector: '.profile__info-job'
});

// создаём экземпляр Profile класса Popup
const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handlerSubmit: (item) => {
    userData.setUserInfo(item);
  }
});  
popupWithProfile.setEventListeners();

// создаём экземпляр Card класса Popup
const popupCreateCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handlerSubmit: (item) => {
    const card = createCard(item);
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

// Открываем Popup (card)
function openCard() {
  createCardValidation.clearErrors();
  popupCreateCard.open();
};

// Вызываем валидатор для профиля и карточек
const profileValidation = new FormValidator(validationConfig, formProfile);
const createCardValidation = new FormValidator(validationConfig, formCard);
profileValidation.enableValidation();
createCardValidation.enableValidation();

// Слушатели кнопок
buttonEdit.addEventListener('click', openProfile);
buttonAdd.addEventListener('click', openCard);