(() => {
  const carousel = document.getElementById('promotionCarousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.promotion-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
  const status = document.getElementById('promotionCarouselStatus');
  if (!slides.length) return;

  let currentIndex = Math.max(0, slides.findIndex((slide) => !slide.hidden));

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentIndex;
      slide.hidden = !isActive;
      slide.classList.toggle('is-active', isActive);
    });

    dots.forEach((dot) => {
      dot.setAttribute('aria-current', Number(dot.dataset.carouselDot) === currentIndex ? 'true' : 'false');
    });

    if (status) {
      status.textContent = `Destaque ${currentIndex + 1} de ${slides.length}: ${slides[currentIndex].dataset.carouselLabel}`;
    }
  }

  carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => showSlide(currentIndex - 1));
  carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => showSlide(currentIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.carouselDot)));
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
})();
