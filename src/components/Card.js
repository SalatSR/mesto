// import {openPopup, popupImageView, popupImageViewWindow, popupImageViewDescription} from '../pages/index.js';


export default class Card {
  constructor({title, link, handleCardClick}, cardSelector) {
    // console.log('title', title);
    // console.log('link', link);
    // console.log('handleCardClick', handleCardClick);
    this._title = title;
    this._url = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    // Находим шаблон для клонирования
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };

  // _openImageView() {
  //   popupImageViewWindow.src = this._url;
  //   popupImageViewWindow.alt = this._title;
  //   popupImageViewDescription.textContent = this._title;
  //   openPopup(popupImageView);
  // };
  
  _addLike() {
    this._like.classList.toggle('card__like_active');
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _setEventListener() {
    this._like = this._element.querySelector('.card__like');
    this._like.addEventListener('click', () => {
      this._addLike();
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });
    // this._cardImage.addEventListener('click', () => {
    //   this._openImageView();
    // });
    this._cardImage.addEventListener('click', this._handleCardClick);
  };
  
  generateCard() {
    // Помещаем данные в объект шаблона
    this._element = this._getTemplate();
    this._element.querySelector('.card__name').textContent = this._title;
    this._cardImage = this._element.querySelector('.card__img');
    this._cardImage.alt = this._title;
    this._cardImage.src = this._url;
    
    this._setEventListener();

    return this._element;
  };
}
