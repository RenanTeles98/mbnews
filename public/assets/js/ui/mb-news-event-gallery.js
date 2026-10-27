(function () {
  'use strict';
  document.querySelectorAll('[data-event-gallery]').forEach(async function (section) {
    const controller = new AbortController();
    const timeout = setTimeout(function () { controller.abort(); }, 10000);
    try {
      const source = new URL(section.dataset.eventSource);
      if (source.protocol !== 'https:') return;
      const response = await fetch(new URL('/api/news/' + encodeURIComponent(section.dataset.eventGallery), source), { signal: controller.signal, credentials: 'omit' });
      if (!response.ok) return;
      const data = await response.json();
      if (!Array.isArray(data.photos)) return;
      const grid = section.querySelector('[data-event-photos]');
      const fragment = document.createDocumentFragment();
      data.photos.slice(0, 60).forEach(function (photo) {
        const url = new URL(photo.url);
        if (url.origin !== source.origin || !url.pathname.startsWith('/api/news/')) return;
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        const image = document.createElement('img');
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', 'Abrir foto do encontro');
        image.src = url.href;
        image.alt = typeof photo.caption === 'string' && photo.caption ? photo.caption : 'Registro do Outubro Rosa da equipe MB Finance';
        image.loading = 'lazy';
        image.decoding = 'async';
        image.referrerPolicy = 'no-referrer';
        link.appendChild(image);
        figure.appendChild(link);
        if (typeof photo.caption === 'string' && photo.caption) {
          const caption = document.createElement('figcaption');
          caption.textContent = photo.caption;
          figure.appendChild(caption);
        }
        fragment.appendChild(figure);
      });
      if (!fragment.childNodes.length) return;
      grid.replaceChildren(fragment);
      section.hidden = false;
    } catch (_) {
      // A revista permanece legível quando o álbum ainda não está disponível.
    } finally {
      clearTimeout(timeout);
    }
  });
})();
