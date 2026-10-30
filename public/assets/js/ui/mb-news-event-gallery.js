(function () {
  'use strict';

  const emptyMessage = 'As fotos aprovadas e selecionadas para a MB News aparecerão aqui.';
  const errorMessage = 'Não foi possível carregar os registros agora. Recarregue a página para tentar novamente.';

  document.querySelectorAll('[data-event-gallery]').forEach(async function (section) {
    const grid = section.querySelector('[data-event-photos]');
    const status = section.querySelector('[data-event-gallery-status]');
    const setStatus = function (message) {
      if (!status) return;
      status.textContent = message;
      status.hidden = !message;
    };

    if (!grid) return;

    const controller = new AbortController();
    const timeout = setTimeout(function () { controller.abort(); }, 10000);

    try {
      const source = new URL(section.dataset.eventSource);
      const slug = section.dataset.eventGallery;
      if (source.protocol !== 'https:' || !slug) {
        setStatus(errorMessage);
        return;
      }

      const endpoint = new URL('/api/news/' + encodeURIComponent(slug), source);
      const response = await fetch(endpoint, {
        signal: controller.signal,
        credentials: 'omit'
      });

      if (!response.ok) {
        setStatus(errorMessage);
        return;
      }

      const data = await response.json();
      if (!Array.isArray(data.photos)) {
        setStatus(errorMessage);
        return;
      }

      const fragment = document.createDocumentFragment();
      data.photos.slice(0, 60).forEach(function (photo) {
        if (!photo || typeof photo.url !== 'string') return;

        let url;
        try {
          url = new URL(photo.url);
        } catch (_) {
          return;
        }

        if (url.origin !== source.origin || !url.pathname.startsWith('/api/news/')) return;

        const figure = document.createElement('figure');
        const link = document.createElement('a');
        const image = document.createElement('img');
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', 'Abrir foto em tamanho original');
        image.src = url.href;
        image.alt = typeof photo.caption === 'string' && photo.caption
          ? photo.caption
          : 'Registro do Outubro Rosa da equipe MB Finance';
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

      if (!fragment.childNodes.length) {
        setStatus(emptyMessage);
        return;
      }

      grid.replaceChildren(fragment);
      setStatus('');
    } catch (_) {
      setStatus(errorMessage);
    } finally {
      clearTimeout(timeout);
    }
  });
})();
