export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  };
  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._name.textContent;
    this._userInfo.job = this._job.textContent;
    return this._userInfo;
  };

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._job.textContent = item.job;
  };
};