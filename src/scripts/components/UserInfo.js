export default class UserInfo {
    constructor(titleSelector, descriptionSelector, avatarSelector, api) {
        this._title = document.querySelector(titleSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._api = api
    }

    getUserInfo() { 
        const user = {}; 
        user.title = this._title.textContent; 
        user.description = this._description.textContent; 
        return user; 
    }
    setUserAvatar({avatar}) {
        this._avatar.src = avatar;
     }
    setUserInfo({name: title, about: description, avatar: avatar,_id: userId}) {
        this._title.textContent = title; 
        this._description.textContent = description;
        this.userId = userId;
        this.setUserAvatar({avatar})
     } 
      }

