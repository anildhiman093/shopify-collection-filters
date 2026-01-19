document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#CollectionFiltersForm");
  if (!form) return;

  form.addEventListener("change", () => {
    const params = new URLSearchParams(new FormData(form)).toString();

    fetch(`${window.location.pathname}?${params}`)
      .then(response => response.text())
      .then(html => {
        const doc = new DOMParser().parseFromString(html, "text/html");

        const newGrid = doc.querySelector("#ProductGridContainer");
        const currentGrid = document.querySelector("#ProductGridContainer");

        if (newGrid && currentGrid) {
          currentGrid.innerHTML = newGrid.innerHTML;
        }
      })
      .catch(err => console.error("Filter error:", err));
  });
});
