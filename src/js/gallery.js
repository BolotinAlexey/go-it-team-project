const buttons = document.querySelectorAll('.gallery__button');
const slides = document.querySelector('.gallery__slides');

// slides[0].classList.add('slide-visible');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(
    'click',
    () => (slides.style.transform = `translateX(${(-i * 100) / 3}%)`)
  );
}

// () => {
//   let oldVisible = document.querySelector('.slide-visible');
//   oldVisible.classList.remove('slide-visible');
//   slides[i].classList.add('slide-visible');
// };
