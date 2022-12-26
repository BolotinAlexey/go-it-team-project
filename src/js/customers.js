const buttons = document.querySelectorAll('.customer__button');
const slides = document.querySelector('.customer__slides');

// slides[0].classList.add('slide-visible');
let currentButton = buttons[0];
currentButton.classList.add('current-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    slides.style.transform = `translateX(${(-i * 100) / 3}%)`;
    currentButton.classList.remove('current-button');
    currentButton = buttons[i];
    currentButton.classList.add('current-button');
  });
}

// () => {
//   let oldVisible = document.querySelector('.slide-visible');
//   oldVisible.classList.remove('slide-visible');
//   slides[i].classList.add('slide-visible');
// };
