const buttons = document.querySelectorAll('.gallery__button');
const slides = document.querySelectorAll('.gallery__item');
console.log(slides);
slides[0].classList.add('slide-visible');
for (let i = 0; i < buttons.length; i++) {
  console.log(slides[i]);
  buttons[i].addEventListener(
    'click',
    () => {
      let oldVisible = document.querySelector('.slide-visible');
      oldVisible.classList.remove('slide-visible');
      slides[i].classList.add('slide-visible');
    }

    // () => (slides.style.transform = `translateX(${(-i * 100) / 3}%)`)
  );
}
