(() => {
  const videos = Array.from(document.querySelectorAll('[data-childrens-day-video]'));
  const visibleVideos = new Set();

  const playMuted = (video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});
  };

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          visibleVideos.add(target);
          if (!document.hidden) playMuted(target);
        } else {
          visibleVideos.delete(target);
          target.pause();
        }
      });
    }, { rootMargin: '120px 0px', threshold: 0.15 });

    videos.forEach((video) => videoObserver.observe(video));
  } else {
    videos.forEach(playMuted);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      videos.forEach((video) => video.pause());
      return;
    }

    visibleVideos.forEach(playMuted);
  });

  const lightbox = document.querySelector('[data-childrens-day-lightbox]');
  const lightboxImage = lightbox?.querySelector('[data-lightbox-image]');
  const lightboxCaption = lightbox?.querySelector('[data-lightbox-caption]');
  const closeButton = lightbox?.querySelector('[data-lightbox-close]');

  if (!(lightbox instanceof HTMLDialogElement) || !lightboxImage || !lightboxCaption || !closeButton) return;

  document.querySelectorAll('[data-childrens-day-image]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const image = trigger.querySelector('img');
      if (!image) return;

      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = trigger.closest('figure')?.querySelector('figcaption')?.textContent.trim() || image.alt;
      lightbox.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
    lightboxCaption.textContent = '';
  });
})();
