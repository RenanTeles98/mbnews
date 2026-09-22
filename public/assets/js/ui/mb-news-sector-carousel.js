(() => {
  const sectorCarousel = document.getElementById('sectorCarousel');
  if (!sectorCarousel) return;

  const sectorSlides = Array.from(sectorCarousel.querySelectorAll('.sector-slide'));
  const sectorDots = Array.from(sectorCarousel.querySelectorAll('[data-sector-dot]'));
  const sectorStatus = document.getElementById('sectorCarouselStatus');
  const sectorLabels = [
    'Matheus Oliveira',
    'Thays Florencio',
    'Igor Lira',
    'Leticia Perpetua',
    'Gabriel Figueiredo',
    'Kerlen Oliveira',
  ];
  let currentSectorSlide = 0;

  function showSectorSlide(nextIndex) {
    currentSectorSlide = (nextIndex + sectorSlides.length) % sectorSlides.length;
    sectorSlides.forEach((slide, index) => {
      const isActive = index === currentSectorSlide;
      slide.hidden = !isActive;
      slide.classList.toggle('is-active', isActive);
    });
    sectorDots.forEach((dot) => {
      dot.setAttribute(
        'aria-current',
        Number(dot.dataset.sectorDot) === currentSectorSlide ? 'true' : 'false',
      );
    });
    if (sectorStatus) {
      sectorStatus.textContent = `Destaque ${currentSectorSlide + 1} de ${sectorSlides.length}: ${sectorLabels[currentSectorSlide]}`;
    }
  }

  sectorCarousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => {
    showSectorSlide(currentSectorSlide - 1);
  });
  sectorCarousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => {
    showSectorSlide(currentSectorSlide + 1);
  });
  sectorDots.forEach((dot) => {
    dot.addEventListener('click', () => showSectorSlide(Number(dot.dataset.sectorDot)));
  });
  sectorCarousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSectorSlide(currentSectorSlide - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSectorSlide(currentSectorSlide + 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      showSectorSlide(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      showSectorSlide(sectorSlides.length - 1);
    }
  });
})();
