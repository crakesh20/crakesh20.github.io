import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup();

// function change() {
//     const elements = document.querySelectorAll("div.box");
//     for (const element of elements) {
//       element.classList.toggle("transformed-state");
//     }
// }

// const changeButton = document.querySelector("#change");
// changeButton.addEventListener("click", change);

window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0;
  setTimeout(function() {
      window.location.href = href;
  }, 500);
};

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1;
});