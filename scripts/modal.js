//ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
function openModal(modal) {
  modal.classList.add("popup_is-opened");

  document.addEventListener("keyup", clickEscape);
  document.addEventListener("mouseup", clickOverlay);
}
//ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", clickEscape);
  document.removeEventListener("mouseup", clickOverlay);
}
//ЗАКРЫТИЕ ОКНА ПО Escape
function clickEscape(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closeModal(activePopup);
  }
}
//ЗАКРЫТИЕ ОКНА ПО Overlay
function clickOverlay(event) {
  const activePopup = document.querySelector(".popup_is-opened");
  if (event.target === activePopup) {
    closeModal(activePopup);
  }
}

//раскомментировать в index.js карточки, добавить в скобки clickEscape,clickOverlay
