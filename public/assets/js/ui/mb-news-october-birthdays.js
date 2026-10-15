(() => {
  const carousel = document.getElementById('birthdayCarousel');
  if (!carousel) return;
  const toggle = carousel.querySelector('.birthday-carousel-toggle');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyPaused = false;
  let hovered = false;
  let focused = false;
  carousel.querySelectorAll('.birthday-carousel-track').forEach((track) => {
    const group = track.querySelector('.birthday-carousel-group');
    if (!group) return;
    const duplicate = group.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    duplicate.querySelectorAll('img').forEach((image) => { image.alt = ''; });
    track.appendChild(duplicate);
  });
  carousel.classList.add('is-ready');
  function updatePlayback() {
    carousel.classList.toggle('is-paused', manuallyPaused || hovered || focused || motionPreference.matches);
    toggle.hidden = motionPreference.matches;
    toggle.setAttribute('aria-pressed', String(manuallyPaused));
    toggle.textContent = manuallyPaused ? 'Retomar movimento' : 'Pausar movimento';
  }
  toggle.addEventListener('click', () => { manuallyPaused = !manuallyPaused; updatePlayback(); });
  carousel.addEventListener('mouseenter', () => { hovered = true; updatePlayback(); });
  carousel.addEventListener('mouseleave', () => { hovered = false; updatePlayback(); });
  carousel.addEventListener('focusin', () => { focused = true; updatePlayback(); });
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) { focused = false; updatePlayback(); }
  });
  motionPreference.addEventListener('change', updatePlayback);
  updatePlayback();
})();
