// Добавляем слушатель на документ и ждум когда он будет готов к работе.
// Когда он будет готов, он вызовит вот эту callback функцию
document.addEventListener('DOMContentLoaded', function vizoviMeneaKogdaBudeshGotov () {
  console.log('Меня вызвали');

  // Ище на странице элемент с классом .header__burger__button и запоминаем его в переменную mobileMenuBurgerButton для дальнейшей работы с ним
  var mobileMenuBurgerButton = document.querySelector('.header__burger__button');
  // Тоже самое и для закрытия менюшки
  var mobileMenuCloseButton = document.querySelector('.mobile__menu__close__button');

  // Ищем мобильную менюшку и запоминаем
  var mobileMenu = document.querySelector('.mobile__menu');

  // Добавляем слушатель клика на бургер для открытия меню
  mobileMenuBurgerButton.addEventListener('click', function () {
    mobileMenu.classList.add('active');
  });

  // Добавляем слушатель клика на крестик для закрытия меню
  mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  $(".see__more__item").click(() => {
    $.fancybox.open($('[data-fancybox="gallery"]'));
  });
});
