document.addEventListener("DOMContentLoaded", () => {
  $(".see__more__item").click(() => {
    $.fancybox.open($('[data-fancybox="gallery"]'));
  });
});
