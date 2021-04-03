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
    setUserInfo({ title, description }) { 
        this._title.textContent = title; 
        this._description.textContent = description; 
     } 
     setUserAvatar({avatar}) {
        this._api.setAvatar({avatar})
         .then(({avatar}) => {
            this._avatar.src = avatar;
            this._avatar.alt = name;
         })
         .catch((err)=> {
             console.log(err)
         })
       
      }
}
