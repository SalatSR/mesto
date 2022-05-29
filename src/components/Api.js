export default class Api {
  constructor(options) {
    this._url = options.url;
    this._token = options.token;
  }

  _getBaseResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status} ${res.statusText}`);    
  } 

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token
      }
    }
    )
    .then((res) => {
      return this._getBaseResponse(res);
    })
  }

  // другие методы работы с API
}

// const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
//   headers: {
//     authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//     'Content-Type': 'application/json'
//   }
// });