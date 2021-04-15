
export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
    getData() {
        return Promise.all([this.getInfo(), this.getCards()]);
    }
    getCards() {
        return fetch(`${this._url}/cards`, {
             headers: this._headers })
            .then(this._checkResponse)
    }
    createCard({caption: name, url: link}) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(this._checkResponse)
    }
    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(this._checkResponse)
    }
    setInfo({name, about}) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(this._checkResponse)
    }
    setAvatar({avatar}) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
              })
            })
            .then(this._checkResponse)
    }

    setLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }
    deleteLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }
}