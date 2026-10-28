(() => {
  const carousel = document.querySelector('[data-halloween-carousel]');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('[data-halloween-slide]'));
  const dots = Array.from(carousel.querySelectorAll('[data-halloween-dot]'));
  const controls = carousel.querySelector('[data-halloween-controls]');
  const status = carousel.querySelector('#halloween-carousel-status');
  if (!slides.length) return;

  let currentIndex = Math.max(0, slides.findIndex((slide) => !slide.hidden));

  function showSlide(index) {
    currentIndex = ((index % slides.length) + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentIndex;
      slide.hidden = !isActive;
      slide.classList.toggle('is-active', isActive);
    });

    dots.forEach((dot) => {
      dot.setAttribute('aria-current', Number(dot.dataset.halloweenDot) === currentIndex ? 'true' : 'false');
    });

    if (status) {
      status.textContent = `Filme ${currentIndex + 1} de ${slides.length}: ${slides[currentIndex].dataset.movieLabel}`;
    }
  }

  carousel.querySelector('[data-halloween-prev]')?.addEventListener('click', () => showSlide(currentIndex - 1));
  carousel.querySelector('[data-halloween-next]')?.addEventListener('click', () => showSlide(currentIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.halloweenDot)));
  });
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(currentIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }
  });

  showSlide(currentIndex);
  if (controls) controls.hidden = false;
})();
