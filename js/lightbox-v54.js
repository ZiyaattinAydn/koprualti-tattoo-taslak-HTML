/* One accessible viewer for portfolio cards and explicitly marked content images. */
(() => {
  const triggers = document.querySelectorAll('[data-lightbox], [data-lightbox-image]');
  if (!triggers.length) return;

  const dialog = document.createElement('div');
  dialog.className = 'image-viewer';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'image-viewer-title');
  dialog.hidden = true;
  dialog.innerHTML = `<div class="image-viewer-panel">
    <button class="image-viewer-close" type="button" aria-label="Görseli kapat">×</button>
    <div class="image-viewer-media"><img alt=""></div>
    <div class="image-viewer-info"><p class="image-viewer-kicker" id="image-viewer-meta"></p><h2 id="image-viewer-title"></h2><p class="image-viewer-description"></p></div>
  </div>`;
  document.body.append(dialog);
  const img = dialog.querySelector('img');
  const closeButton = dialog.querySelector('.image-viewer-close');
  const title = dialog.querySelector('#image-viewer-title');
  const meta = dialog.querySelector('#image-viewer-meta');
  const description = dialog.querySelector('.image-viewer-description');
  let previousFocus = null;
  let savedScroll = 0;

  function close() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove('image-viewer-open');
    document.body.style.top = '';
    const scrolling = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, savedScroll);
    requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = scrolling; });
    img.removeAttribute('src');
    if (previousFocus?.isConnected) previousFocus.focus({preventScroll: true});
  }

  function open(trigger) {
    const picture = trigger.matches('img') ? trigger : trigger.querySelector('img');
    const src = trigger.dataset.full || picture?.currentSrc || picture?.src;
    if (!src) return;
    previousFocus = document.activeElement;
    savedScroll = window.scrollY;
    img.src = src;
    img.alt = picture?.alt || trigger.dataset.title || 'Görsel';
    title.textContent = trigger.dataset.title || picture?.alt || 'Stüdyo arşivi';
    const details = [trigger.dataset.type, trigger.dataset.artistLabel || (trigger.dataset.artist && trigger.dataset.artist !== 'unknown' ? trigger.dataset.artist : '')].filter(Boolean);
    meta.textContent = details.join('  /  ');
    meta.hidden = !details.length;
    description.textContent = trigger.dataset.description || '';
    description.hidden = !description.textContent;
    document.body.style.top = `-${savedScroll}px`;
    document.body.classList.add('image-viewer-open');
    dialog.hidden = false;
    closeButton.focus({preventScroll: true});
  }

  document.addEventListener('click', event => {
    if (!dialog.hidden && event.target === dialog) { close(); return; }
    const trigger = event.target.closest('[data-lightbox], [data-lightbox-image]');
    if (!trigger) return;
    if (trigger.tagName === 'A') event.preventDefault();
    open(trigger);
  });
  document.addEventListener('keydown', event => {
    if (!dialog.hidden) {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab') {
        // The close control is the only focusable element in the dialog.
        event.preventDefault();
        closeButton.focus();
      }
      return;
    }
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-lightbox-image]')) {
      event.preventDefault();
      open(event.target);
    }
  });
  closeButton.addEventListener('click', close);
})();
