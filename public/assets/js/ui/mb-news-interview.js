(() => {
  const accordion = document.querySelector('[data-interview-accordion]');
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll('.interview-question'));

  function setItem(item, isOpen) {
    const trigger = item.querySelector('.interview-question__trigger');
    const answer = item.querySelector('.interview-question__answer');
    const indicator = item.querySelector('.interview-question__indicator');
    if (!trigger || !answer || !indicator) return;

    item.classList.toggle('is-open', isOpen);
    trigger.setAttribute('aria-expanded', String(isOpen));
    answer.hidden = !isOpen;
    indicator.textContent = isOpen ? '−' : '+';
  }

  items.forEach((item) => {
    const trigger = item.querySelector('.interview-question__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      items.forEach((currentItem) => setItem(currentItem, false));
      setItem(item, !isOpen);
    });
  });
})();
