export default class Card {
  constructor({name, link, handleCardClick, handleCardDelet}, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelet = handleCardDelet;
  };

  _getTemplate() {
    // Находим шаблон для клонирования
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };
  
  _addLike() {
    this._like.classList.toggle('card__like_active');
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _setEventListener() {
    this._like.addEventListener('click', () => {
      this._addLike();
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      // this._deleteCard();
      this._handleCardDelet();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  };
  
  generateCard() {
    // Помещаем данные в объект шаблона
    this._element = this._getTemplate();
    this._element.querySelector('.card__name').textContent = this._name;
    this._like = this._element.querySelector('.card__like');
    this._cardImage = this._element.querySelector('.card__img');
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    
    this._setEventListener();

    return this._element;
  };
}
