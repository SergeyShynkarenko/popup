// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const btn = document.querySelector(".button");
  const close = document.querySelector(".modal__close");

  btn.addEventListener("click", () => {
    modal.classList.add("show-modal");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("show-modal");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show-modal");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show-modal")) {
      modal.classList.remove("show-modal");
    }
  });
});
