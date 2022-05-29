// Находим нужный popup
const popupAvatar = document.querySelector('.popup_avatar-edit');
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
// Находим поле Профиля
const profileSection = document.querySelector('.profile');
// Находим формы
const formAvatar = popupAvatar.querySelector('.popup__form_avatar-edit');
const formProfile = popupProfile.querySelector('.popup__form_profile');
const formCard = popupCard.querySelector('.popup__form_card');
// Находим кнопки
const buttonAvatarEdit = profileSection.querySelector('.profile__avatar-edit-button')
const buttonEdit = profileSection.querySelector('.profile__edit-button'); // "Edit"
const buttonAdd = profileSection.querySelector('.profile__add-button'); // "Add"
// в формах popup
// Profile
const inputFormProfileName = formProfile.querySelector('.popup__input_type_name');
const inputFormProfileJob = formProfile.querySelector('.popup__input_type_job');
// Avatar
const inputFormAvatar = formAvatar.querySelector('.popup__input_type_url-avatar');
// Аватар в профиле
const imageAvatar = profileSection.querySelector('.profile__avatar-img');

const validationConfig = {
  inputSelector: '.popup__input',
  errorSelector: '.popup__error',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Карточки по умолчанию
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {
    validationConfig,
    popupProfile,
    popupCard,
    profileSection,
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
    initialCards
};