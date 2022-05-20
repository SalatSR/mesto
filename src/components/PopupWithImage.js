import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._popupImageViewWindow = this._popup.querySelector('.popup__image-view-window');
    this._popupImageViewDescription = this._popup.querySelector('.popup__description');
  };

  open = ({link, name}) => {
    this._popupImageViewWindow.alt = name;
    this._popupImageViewWindow.src = link;
    this._popupImageViewDescription.textContent = name;
    super.open();
  };
};