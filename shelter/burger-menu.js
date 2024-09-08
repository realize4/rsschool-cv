// открытие бургер меню
document.getElementById("burger-menu-button").addEventListener("click", () => {
  document.getElementById("burger-conteiner").style.display = "";
  document.getElementById("html").style.overflow = "hidden";
});
// закрытие бургер меню
document.getElementById("burger-close").addEventListener("click", () => {
  document.getElementById("burger-conteiner").style.display = "none";
  document.getElementById("html").style.overflow = "";
});
// закрытие меню если нажал на ссылку
document.getElementById("burger-menu").addEventListener("click", (event) => {
  if (event.target.href) {
    document.getElementById("burger-conteiner").style.display = "none";
    document.getElementById("html").style.overflow = "";
  }
  event.stopPropagation();
});
// закрытие контейнера при клике на него
document
  .getElementById("burger-conteiner")
  .addEventListener("click", (event) => {
    document.getElementById("burger-conteiner").style.display = "none";
    document.getElementById("html").style.overflow = "";
  });
