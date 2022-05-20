import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    // console.log('this.popup', this.popup);
    this._popupImageViewWindow = this._popup.querySelector('.popup__image-view-window');
    this._popupImageViewDescription = this._popup.querySelector('.popup__description');
  };
  open(item) {
    this._popupImageViewWindow.src = item.link;
    this._popupImageViewWindow.alt = item.name;
    this._popupImageViewDescription.textContent = this.name;
    super.open();
  };
};