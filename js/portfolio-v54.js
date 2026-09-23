/* Portfolio filtering is independent of the rest of the site. Unverified
   archive images deliberately have no application type or artist assignment. */
(() => {
  const root = document.querySelector('[data-portfolio]');
  if (!root) return;

  const cards = [...root.querySelectorAll('[data-portfolio-card]')];
  const buttons = [...root.querySelectorAll('[data-type-filter]')];
  const artist = root.querySelector('[data-artist-filter]');
  const reset = root.querySelector('[data-filter-reset]');
  const empty = root.querySelector('[data-filter-empty]');
  const count = root.querySelector('[data-filter-count]');
  const selected = new Set();

  function render() {
    const name = artist.value;
    let visible = 0;
    cards.forEach(card => {
      const types = (card.dataset.types || '').split(/\s+/).filter(Boolean);
      const show = (!selected.size || types.some(type => selected.has(type))) &&
        (name === 'all' || card.dataset.artist === name);
      card.hidden = !show;
      if (show) visible++;
    });
    buttons.forEach(button => {
      const active = button.dataset.typeFilter === 'all' ? !selected.size : selected.has(button.dataset.typeFilter);
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    empty.hidden = visible !== 0;
    count.textContent = `${visible} görsel gösteriliyor`;
    reset.disabled = !selected.size && name === 'all';
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    const type = button.dataset.typeFilter;
    if (type === 'all') selected.clear();
    else if (selected.has(type)) selected.delete(type);
    else selected.add(type);
    render();
  }));
  artist.addEventListener('change', render);
  reset.addEventListener('click', () => {
    selected.clear();
    artist.value = 'all';
    render();
  });
  render();
})();
