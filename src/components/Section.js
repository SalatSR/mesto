export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };
// Передаём данные для генерации карточки
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  };
// Вставляем карточки в контейнер
  addItem(element) {
    this._container.prepend(element);
  };
}