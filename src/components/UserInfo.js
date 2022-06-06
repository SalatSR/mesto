export default class UserInfo {
  constructor({nameSelector, jobSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._userId;
  };
  
  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._name.textContent;
    this._userInfo.about= this._job.textContent;
    return this._userInfo;
  };

  getUserId() {
    return this._userId;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._job.textContent = item.about;
    this._avatar.src = item.avatar;
    this._userId = item._id;
  };
};