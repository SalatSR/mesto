import './index.css';
import {
  initialCards,
  formAvatar,
  formProfile,
  formCard,
  buttonAvatarEdit,
  buttonEdit,
  buttonAdd,
  imageAvatar,
  inputFormAvatar,
  inputFormProfileName,
  inputFormProfileJob,
  validationConfig
} from "../utils/Constants.js";
import Api from '../components/Api.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  token: '62731dcc-205e-4eca-8046-563c23fbdff8'
})

// создаём экземпляр popupWithConfirmation класса Popup
const popupWithConfirmation = new PopupWithConfirmation('.popup_submit-deleting');
popupWithConfirmation.setEventListeners();

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
    },
    handleCardDelet: () => {
      popupWithConfirmation.open(item);
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

// создаём экземпляр Avatar класса Popup
const popupWithAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar-edit',
  handlerSubmit: (item) => {
    imageAvatar.src = item.link
    popupWithAvatar.close();
  }
});  
popupWithAvatar.setEventListeners();

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

// Открываем Popup (Avatar)
function openAvatar() {
  // const user = userData.getUserInfo();
  // inputFormAvatar.value = user.name;
  avatarValidation.clearErrors();
  popupWithAvatar.open();
};

// Вызываем валидатор для профиля и карточек
const avatarValidation = new FormValidator(validationConfig, formAvatar);
const profileValidation = new FormValidator(validationConfig, formProfile);
const createCardValidation = new FormValidator(validationConfig, formCard);
avatarValidation.enableValidation();
profileValidation.enableValidation();
createCardValidation.enableValidation();

// Слушатели кнопок
buttonAvatarEdit.addEventListener('click', openAvatar);
buttonEdit.addEventListener('click', openProfile);
buttonAdd.addEventListener('click', openCard);