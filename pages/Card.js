import {openPopup, popupImageView, popupImageViewWindow, popupImageViewDescription} from './index.js';


export default class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._url = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    // Находим шаблон для клонирования
    const cardElement = document
      .querySelector('#card-template')
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }
  
  generateCard() {
    // Помещаем данные в объект шаблона
    this._element = this._getTemplate();
    this._element.querySelector('.card__name').textContent = this._title;
    this._element.querySelector('.card__img').alt = this._title;
    this._element.querySelector('.card__img').src = this._url;
    
    this._setEventListener()

    return this._element;
  }

  _openImageView() {
    popupImageViewWindow.src = this._url;
    popupImageViewWindow.alt = this._title;
    popupImageViewDescription.textContent = this._title;
    openPopup(popupImageView);
  }
  
  _addLike() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _deleteCard() {
    this._element.querySelector('.card__delete-button').closest('.card').remove();
  }

  _setEventListener() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._addLike();
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openImageView();
    });
  }
}
