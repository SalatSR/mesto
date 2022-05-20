export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._closerBtn = this._popup.querySelector('.popup__closer');
    // this._handlerEscClose = this._handlerEscClose.bind(this);
  };

  open = () => {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  };

  close = () => {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleEscClose);
    this._closerBtn.removeEventListener('mousedown', this.close);
  };

  _handleEscClose = (evt) => {
    if ((evt.key === 'Escape') || (evt.target === this._popup)) {
      this.close();
    };
  };

  setEventListeners = () => {
    this._popup.addEventListener('mousedown', this._handleEscClose);
    this._closerBtn.addEventListener('mousedown', this.close);
  };
}