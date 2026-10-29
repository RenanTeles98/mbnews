(() => {
  "use strict";

  const monthSlugs = [
    "janeiro",
    "fevereiro",
    "marco",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const status = document.getElementById("edition-status");
  const fallback = document.getElementById("edition-fallback");

  function currentYearAndMonth() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "numeric",
    }).formatToParts(new Date());
    return {
      year: Number(parts.find((part) => part.type === "year")?.value),
      month: Number(parts.find((part) => part.type === "month")?.value) - 1,
    };
  }

  async function editionExists(path) {
    let response;
    try {
      response = await fetch(path, { method: "HEAD", cache: "no-store" });
      if (response.status === 405 || response.status === 501) {
        response = await fetch(path, { method: "GET", cache: "no-store" });
        await response.body?.cancel();
      }
    } catch {
      return null;
    }

    if (response.status === 404) return false;
    return response.ok ? true : null;
  }

  async function openLatestPublishedEdition() {
    let current;
    try {
      current = currentYearAndMonth();
    } catch {
      status.textContent = "Não foi possível identificar a edição atual.";
      return;
    }

    for (let offset = 0; offset < 36; offset++) {
      const date = new Date(
        Date.UTC(current.year, current.month - offset, 1),
      );
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const path = `/pages/mb-news-${monthSlugs[month]}-${year}.html`;
      const available = await editionExists(path);

      if (available === true) {
        fallback.href = path;
        fallback.textContent = `Abrir a edição de ${monthNames[month]} de ${year}`;
        window.location.replace(path);
        return;
      }

      if (available === null) break;
    }

    status.textContent =
      "Não conseguimos abrir uma edição automaticamente. Use o link abaixo.";
  }

  void openLatestPublishedEdition();
})();
