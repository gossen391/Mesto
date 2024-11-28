//ПЕРЕМЕННЫЕ НАЧАЛО
let placesList = document.querySelector(".places__list");

let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__description");

let addButton = document.querySelector(".profile__add-button");
let modalAdd = document.querySelector(".popup_type_new-card");
let closeAddButton = modalAdd.querySelector(".popup__close"); //изменить

let saveAddButton = modalAdd.querySelector(".popup__button");
let inputAddName = modalAdd.querySelector(".popup__input_type_card-name");
let inputAddLink = modalAdd.querySelector(".popup__input_type_url");

let editButton = document.querySelector(".profile__edit-button"); //изменить
let modalEdit = document.querySelector(".popup_type_edit"); //изменить
let closeEditButton = modalEdit.querySelector(".popup__close"); //изменить
let saveEditButton = modalEdit.querySelector(".popup__button");

let inputEditName = modalEdit.querySelector(".popup__input_type_name");
let inputEditJob = modalEdit.querySelector(".popup__input_type_description");
//ПЕРЕМЕННЫЕ КОНЕЦ

//СТАРТОВОЕ ОТБРОЖЕНИЕ КАРТОЧЕК

for (let i = 0; i < initialCards.length; i++) {
  createCard(initialCards[i].name, initialCards[i].link);
}
//СТАРТОВОЕ ОТБРОЖЕНИЕ КАРТОЧЕК

//СБОРКА КАРТОЧКИ
function createCard(name, link) {
  let cardTemplate = document.querySelector("#card-template").content;
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true); //клон карточки
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;
  let deleteButton = cardElement.querySelector(".card__delete-button");
  let likeButton = cardElement.querySelector(".card__like-button");

  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_is-active");
  });
  placesList.append(cardElement);
}
//ДОБАВЛЕНИЕ КАРТОЧКИ ОТКРЫТИЯ
addButton.addEventListener("click", function () {
  openModal(modalAdd);
});
//РЕДАКТИРОВАНИЕ ПРОФИЛЯ ОТКРЫТИЕ
editButton.addEventListener("click", function () {
  openModal(modalEdit);
});
//ЗАКРЫТИЕ ДОБАВЛЕНИЕ КАРТОЧКИ
closeAddButton.addEventListener("click", function () {
  closeModal(modalAdd);
});
//ЗАКРЫТИЕ РЕДАКТИРОВАНИЕ ПРОФИЛЯ
closeEditButton.addEventListener("click", function () {
  closeModal(modalEdit);
});
//сохранение данных новой карточки
saveAddButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  createCard(inputAddName.value, inputAddLink.value);
  inputAddName.value = "";
  inputAddLink.value = "";
  closeModal(modalAdd);
});
//редактирование данных профиля
saveEditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputEditName.value;
  profileJob.textContent = inputEditJob.value;
  inputEditName.value = "";
  inputEditJob.value = "";
  closeModal(modalEdit);
});
