const buttons = document.querySelectorAll('.gallery__button');
const slides = document.querySelector('.gallery__slides');
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  console.log(slides[i]);
  buttons[i].addEventListener(
    'click',
    () => (slides.style.transform = `translateX(${(-i * 100) / 3}%)`)
  );
}
