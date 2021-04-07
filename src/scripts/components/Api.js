import { descriptionName } from "../utils/constants";

export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
             headers: this._headers })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
    }
    deleteCard({owner: {_id}}){
        return fetch(`${this._url}/cards/${_id}`,{
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
        })
        .catch(err => Promise.reject(err))
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
    }
    setAvatar({avatar}) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
              })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
    }


}