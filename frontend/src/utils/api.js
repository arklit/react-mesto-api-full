class Api {
    constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
    }
    _getRes(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: isLiked ? "PUT" : "DELETE",
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._getRes)
    }
    getInitialCards() {
      return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: this._headers,
        credentials: 'include',
        })
        .then(this._getRes);
   }
    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._getRes);
    }
    editProfile(data) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      .then(this._getRes)
    }
  
    addCard(name, link) {
      return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(this._getRes)
    }
  
    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._getRes)
    }
  
    // likeCard(cardId) {
    //   return fetch(`${this._url}/cards/likes/${cardId}`, {
    //     method: "PUT",
    //     headers: this._headers
    //   })
    //   .then(this._getRes)
    // }
    // removeLike(cardId) {
    //   return fetch(`${this._url}/cards/likes/${cardId}`, {
    //     method: "DELETE",
    //     headers: this._headers
    //   })
    //   .then(this._getRes)
    // }

    updateAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          avatar: data.avatar
        })
      })
      .then(this._getRes)
    }
}

const api = new Api({
    url: `http://localhost:3001`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  export default api