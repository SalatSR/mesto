import './index.css';
import {validationConfig, initialCards} from "../utils/Constants.js";
import {
  formAvatar,
  formProfile,
  formCard,
  buttonAvatarEdit,
  buttonEdit,
  buttonAdd,
  inputFormProfileName,
  inputFormProfileJob,
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
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '646992da-1ad1-4569-97b4-38159e3734ad',
    'Content-Type': 'application/json'
  }
});

// создаём экземпляр popupWithImage класса UserInfo
const popupWithImage = new PopupWithImage('.popup_image-view');
popupWithImage.setEventListeners();

// Передаём данные для сборки шаблона карточки
function createCard(item) {
  const card = new Card ({
    name: item.name,
    link: item.link,
    userId: userData.getUserId(),
    ownerId: item.owner._id,
    cardId: item._id,
    likes: item.likes,
    handleCardClick: () => {
      popupWithImage.open(item);
    },
    handleCardDelet: () => {
      popupWithConfirm.open(card);
    },
    handleCardLike: () => {
      const cardIsLike = card.setOwnLike();
      const toggleCardLike = cardIsLike ?
        api.unlikeCard(card.getCardId()) :
        api.likeCard(card.getCardId());
      toggleCardLike
        .then((res) => {
          card.setLikes(res.likes);
          card.renderLikes();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  '#card-template'
  );
  const generatedCard = card.generateCard();
  return generatedCard;
};

// Инициализируем загрузку карточек по-умолчанию
const sectionDefault = new Section({
  renderer: (item) => {
    const card = createCard(item);
    sectionDefault.addItem(card);
  }
},
'.cards'
);

// создаём экземпляр userData класса UserInfo
const userData = new UserInfo({
  nameSelector: '.profile__info-name',
  jobSelector: '.profile__info-job',
  avatarSelector: '.profile__avatar-img'
});

// создаём экземпляр Profile класса Popup
const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handlerSubmit: (item) => {
    const submitBottonText = popupWithProfile.getSubmitBottonText();
    popupWithProfile.setLoadingText('Сохранение...');
    api.setUserData(item)
      .then((res) => {
        userData.setUserInfo(res);
        popupWithProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithProfile.setLoadingText(submitBottonText);
      })
  }
});  
popupWithProfile.setEventListeners();

// создаём экземпляр Avatar класса Popup
const popupWithAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar-edit',
  handlerSubmit: (item) => {
    const submitBottonText = popupWithAvatar.getSubmitBottonText();
    popupWithAvatar.setLoadingText('Сохранение...');
    api.editProfileAvatar(item)
      .then((res) => {
        userData.setUserInfo(res)
        popupWithAvatar.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupWithAvatar.setLoadingText(submitBottonText);
      })
  }
});  
popupWithAvatar.setEventListeners();

// создаём экземпляр Card класса Popup
const popupCreateCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handlerSubmit: (item) => {
    const submitBottonText = popupCreateCard.getSubmitBottonText();
    popupCreateCard.setLoadingText('Создание...')
    api.addNewCard(item)
      .then((res) => {
        const card = createCard(res);
        sectionDefault.addItem(card);
        popupCreateCard.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupCreateCard.setLoadingText(submitBottonText);
      })
  }
});
popupCreateCard.setEventListeners();

// Подтверждение (удаления карточек)
const popupWithConfirm = new PopupWithConfirmation({
  popupSelector: '.popup_submit-deleting',
  handleSubmit: (card) => {
  const submitBottonText = popupWithConfirm.getSubmitBottonText();
  popupWithConfirm.setLoadingText('Удаление...');
  api.deleteCard(card.getCardId())
    .then(res => {
      card.deleteCard();
      popupWithConfirm.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupWithConfirm.setLoadingText(submitBottonText);
    })
}})
popupWithConfirm.setEventListeners();

// Открываем Popup (profile)
function openProfile() {
  const user = userData.getUserInfo();
  inputFormProfileName.value = user.name;
  inputFormProfileJob.value = user.about;
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
  avatarValidation.clearErrors();
  popupWithAvatar.open();
};

// Результирующий Промис
Promise.all([api.getUserData(), api.getInitialCards()])
    .then(([UserProfileData, initialCards]) => {
      userData.setUserInfo(UserProfileData);
        sectionDefault.renderItems(initialCards);
      })
    .catch(err => {
      console.log(err);
    })

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