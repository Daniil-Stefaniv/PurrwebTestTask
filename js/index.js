const popUpCookies = document.querySelector(".cookies-popup")
const popUpBtn = document.querySelector(".popup__btn")

popUpBtn.addEventListener("click", () => {
  popUpCookies.classList.add("popup__disable")
})