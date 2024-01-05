document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider__input");
  const image = document.querySelector(".slider__image");

  function updateImageSize(value) {
    const newSize = value + "%";
    image.style.width = newSize;
  }

  const debouncedUpdate = _.debounce(function (event) {
    updateImageSize(event.target.value);
  }, 250);

  slider.addEventListener("input", debouncedUpdate);
});
