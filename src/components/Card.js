export default class Card {
  constructor({name, link, userId, ownerId, cardId, likes,  handleCardClick, handleCardDelet, handleCardLike}, cardSelector) {
    this._name = name;
    this._link = link;
    this._userId = userId;
    this._ownerId = ownerId;
    this._cardId = cardId;
    this._likes = likes;
    this._handleCardClick = handleCardClick;
    this._handleCardDelet = handleCardDelet;
    this._handleCardLike = handleCardLike;
    this._cardSelector = cardSelector;
  };

  _getTemplate() {
    // Находим шаблон для клонирования
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  };
// Получаем ID карточки
  getCardId() {
    return this._cardId;
  }
// Присваиваем своему лайку свой ID
  ownLike() {
    return this._likes.some(like => {
        return like._id === this._userId;
    });
  }
// Отображаем стоит или не стоит свой лайк
  toggleLikeState() {
    if(this.ownLike()) {
      this._cardButtonLike.classList.add('card__like_active');
    }
    else {
      this._cardButtonLike.classList.remove('card__like_active');
    }
  }
// Вычисляем количиство лайков
  renderLikes() {
    this._likesCounter.textContent = this._likes.length;
    this.toggleLikeState();
  }
// Ставим свой лайк
  setLikes(newLikes) {
    this._likes = newLikes;
  }
// Удаляем карточку
  deleteCard() {
    this._element.remove();
    this._element = null;
  };

// Отображение кнопки удаления карточки
  _checkStateDeleteButton() {
    if(this._userId !== this._ownerId) {
      this._deleteButton.classList.add('card__delete-button_inactive');
    }
    else {
      this._deleteButton.classList.remove('card__delete-button_inactive');
    }
  }
// Собираем данные новой карточки
  generateCard() {
    // Помещаем данные в объект шаблона
    this._element = this._getTemplate();
    this._element.querySelector('.card__name').textContent = this._name;
    this._like = this._element.querySelector('.card__like');
    this._cardImage = this._element.querySelector('.card__img');
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._cardButtonLike = this._element.querySelector('.card__like');
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._likesCounter = this._element.querySelector('.card__like-counter');
    
    this._setEventListener();
    this._checkStateDeleteButton()
    this.renderLikes()

    return this._element;
  };

  _setEventListener() {
    this._like.addEventListener('click', this._handleCardLike);
    this._deleteButton.addEventListener('click', this._handleCardDelet);
    this._cardImage.addEventListener('click', this._handleCardClick);
  };
}
