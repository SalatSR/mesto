export default class Api {
  constructor(config) {
    this._url = config.url;
    this._token = config.token;
  }
// Проверка статуса запроса
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status} ${res.statusText}`);
  }
// Получаем карточки с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => {
      return this._checkResponse(res);
    })
    .then((data) => {
      return data;
    })
  }
// Получаем данные пользователя
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
// Отправляем данные пользователя
  setUserData(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
// Заменяем аватар пользователя
  editProfileAvatar(item) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: item.link
      })
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
// Отправляем данные новой карточки
  addNewCard(item) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
// Удаляем карточку
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
// Ставим лайк
  likeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
// Убираем лайк
  unlikeCard(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._checkResponse(res);
    })
  }
}