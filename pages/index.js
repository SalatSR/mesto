// Находим окно popup
let popupWindow = document.querySelector('.popup');
// Находим нужный popup
let popupProfile = document.querySelector('.popup_profile');
let popupCard = document.querySelector('.popup_card');
let popupImageView = document.querySelector('.popup_image-view');
// Находим поле Профиля
let profileSection = document.querySelector('.profile');
// Находим формы
let formProfile = popupProfile.querySelector('.popup__form_profile');
let formCard = popupCard.querySelector('.popup__form_card');
// Находим кнопки
let editBtn = profileSection.querySelector('.profile__edit-button'); // "Edit"
let addBtn = profileSection.querySelector('.profile__add-button'); // "Add"
// кнопки закрытия
let popupCloserProfile = popupProfile.querySelector('.popup__closer_profile'); // popup Profile
let popupCloserCard = popupCard.querySelector('.popup__closer_card'); // popup Card
let popupCloserImageView = popupImageView.querySelector('.popup__closer_image-view'); // popup Image
// кнопки отправки форм
let popupSubmitProfile = popupProfile.querySelector('.popup__submit-button_profile'); 
let popupSubmitCard = popupProfile.querySelector('.popup__submit-button_card');
// Находим поля ввода
// Находим поле ввода в поле Profile
let inputFormProfileNameProfileSection = profileSection.querySelector('.profile__info-name');
let inputFormProfileJobProfileSection = profileSection.querySelector('.profile__info-job');
// в формах popup
// Profile
let inputFormProfileName = formProfile.querySelector('.popup__input_type_name');
let inputFormProfileJob = formProfile.querySelector('.popup__input_type_job');
// Card
let inputFormCardTitle = formCard.querySelector('.popup__input_type_title');
let inputFormCardUrl = formCard.querySelector('.popup__input_type_url');
// Находим Поле карт
let cardsContainer = document.querySelector('.cards');
// Находим поля ссылки и описания для попапа 
let popupImageViewWindow = popupImageView.querySelector('.popup__image-view-window');
let popupImageViewDescription = popupImageView.querySelector('.popup__description');

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
  inputFormProfileName.value = inputFormProfileNameProfileSection.textContent;
  inputFormProfileJob.value = inputFormProfileJobProfileSection.textContent;
  openPopup(popupProfile)
}
// Открываем Popup (card)
function openCard() {
  openPopup(popupCard); 
}
// Открываем Popup (Image-view)
function openImageView(name, link) {
  popupImageViewWindow.src = link;
  popupImageViewWindow.alt = name;
  popupImageViewDescription.textContent = name;
  openPopup(popupImageView)
}
// Кнопки на карточках
// Кнопка like
function addLike(event) {
  event.target.classList.toggle('card__like_active'); 
}
// Кнопка удалить
function deleteCard(event) {
  event.target.closest('.card').remove();
}

// Функция наполнения новой карточки
function fillNewCard(cardHeader, cardLink) {
  let cardTemplate = document.querySelector('#card-template').content;
  let cardItem = cardTemplate.cloneNode(true);
  let cardImg = cardItem.querySelector('.card__img');
  let cardName = cardItem.querySelector('.card__name');
  let cardDelete= cardItem.querySelector('.card__delete-button');
  let cardLike = cardItem.querySelector('.card__like');
  // Сохраняем ссылку и описание
  cardImg.alt = cardHeader;
  cardImg.src = cardLink;
  // Подключаем слушатели кнопок карточки
  cardDelete.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', addLike);

  cardImg.addEventListener('click', () => openImageView(cardHeader, cardLink));
  cardName.textContent = cardHeader;

  return cardItem;
}

// Функция добавления новой карточки в разметку
function addNewCard (cardItem) {
  cardsContainer.prepend(cardItem);
}
//загружаем базовые карточки
initialCards.forEach((item) => addNewCard(fillNewCard(item.name, item.link)));

// Обработчик события submit на формах
// Profile
function formSubmitProfile(event) {
  event.preventDefault();
  inputFormProfileNameProfileSection.textContent = inputFormProfileName.value;
  inputFormProfileJobProfileSection.textContent = inputFormProfileJob.value;
  closePopup(popupProfile);
}
// Card
function formSubmitCard(event) {
  event.preventDefault();
  let cardHeader = inputFormCardTitle.value;
  let cardLink = inputFormCardUrl.value;
  addNewCard(fillNewCard(cardHeader, cardLink));
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