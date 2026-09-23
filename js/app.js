/* Shared navigation, reveal, services and static appointment flow. */
(() => {
  const intro = document.querySelector('.intro');
  if (intro) {
    document.body.classList.add('lock');
    window.addEventListener('load', () => setTimeout(() => {
      intro.classList.add('hide');
      document.body.classList.remove('lock');
    }, 700), {once:true});
  }

  const menu = document.querySelector('.mobile');
  const nav = document.querySelector('.nav');
  const dropdowns = [...document.querySelectorAll('.dd')];
  const closeDropdowns = () => dropdowns.forEach(box => {
    box.classList.remove('open');
    box.querySelector(':scope > button')?.setAttribute('aria-expanded', 'false');
  });
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    if (!open) closeDropdowns();
  });
  dropdowns.forEach(box => box.querySelector(':scope > button')?.addEventListener('click', () => {
    const open = !box.classList.contains('open');
    closeDropdowns();
    box.classList.toggle('open', open);
    box.querySelector(':scope > button').setAttribute('aria-expanded', String(open));
  }));
  document.addEventListener('click', event => {
    if (!event.target.closest('.dd')) closeDropdowns();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (nav?.classList.contains('open')) {
      nav.classList.remove('open');
      menu?.setAttribute('aria-expanded','false');
      closeDropdowns();
      menu?.focus();
    } else if (dropdowns.some(box => box.classList.contains('open'))) closeDropdowns();
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
    }), {threshold:.1});
    reveals.forEach(element => observer.observe(element));
  } else reveals.forEach(element => element.classList.add('in'));

  const pages = [...document.querySelectorAll('.formpage')];
  const bars = [...document.querySelectorAll('.steps i')];
  let step = 0;
  function show(index) {
    if (!pages.length) return;
    step = Math.max(0, Math.min(index, pages.length-1));
    pages.forEach((page, i) => page.classList.toggle('active', i === step));
    bars.forEach((bar, i) => {
      bar.classList.toggle('active', i <= step);
      if (i === step) bar.setAttribute('aria-current', 'step');
      else bar.removeAttribute('aria-current');
    });
    const current = document.querySelector('[data-step-current]');
    if (current) current.textContent = String(step+1).padStart(2,'0');
    pages[step].querySelector('h3')?.focus({preventScroll:true});
    window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => show(step+1)));
  document.querySelectorAll('[data-prev]').forEach(button => button.addEventListener('click', () => show(step-1)));
  function syncChoices(group) {
    group.querySelectorAll('.choice').forEach(choice => choice.setAttribute('aria-pressed',String(choice.classList.contains('active'))));
  }
  document.querySelectorAll('.choices').forEach(syncChoices);
  document.querySelectorAll('.choice').forEach(choice => choice.addEventListener('click', () => {
    choice.parentElement.querySelectorAll('.choice').forEach(button => button.classList.remove('active'));
    choice.classList.add('active');
    syncChoices(choice.parentElement);
  }));
  if (pages.length) {
    pages.forEach(page => page.querySelector('h3')?.setAttribute('tabindex','-1'));
    bars[0]?.setAttribute('aria-current','step');
  }

  const rows = [...document.querySelectorAll('.service-row')];
  function setService(row, open) {
    row.classList.toggle('open', open);
    row.querySelector('.service-trigger')?.setAttribute('aria-expanded', String(open));
    const detail = row.querySelector('.service-detail');
    if (detail) detail.inert = !open;
  }
  rows.forEach(row => {
    setService(row, false);
    row.querySelector('.service-trigger')?.addEventListener('click', () => {
      const open = !row.classList.contains('open');
      rows.forEach(other => setService(other, false));
      if (open) {
        setService(row, true);
        if (row.id) history.replaceState(null, '', `#${row.id}`);
      }
    });
  });
  if (location.hash) {
    const row = rows.find(item => `#${item.id}` === location.hash);
    if (row) setTimeout(() => setService(row, true), 50);
  }

  const params = new URLSearchParams(location.search);
  const requested = (params.get('service') || '').toLowerCase();
  const branch = (params.get('branch') || '').toLocaleLowerCase('tr-TR');
  if (requested) {
    document.querySelectorAll('.choice').forEach(choice => {
      const text = choice.dataset.value || choice.textContent.trim().toLowerCase();
      if (text === requested || (requested === 'coverup' && text.includes('cover'))) {
        choice.parentElement.querySelectorAll('.choice').forEach(other => other.classList.remove('active'));
        choice.classList.add('active');
        syncChoices(choice.parentElement);
      }
    });
    const note = document.querySelector('.appointment-service-note');
    if (note) {
      note.textContent = `${requested === 'coverup' ? 'Cover-Up' : requested.charAt(0).toUpperCase()+requested.slice(1)} seçili geldi. İstersen değiştirebilirsin.`;
      note.classList.add('show');
    }
  }
  if (branch) {
    const select = document.querySelector('select[name="branch"]');
    if (select) {
      const match = [...select.options].find(option => option.value.toLocaleLowerCase('tr-TR') === branch);
      if (match) select.value = match.value;
    }
  }
  const preview = document.querySelector('[data-appointment-preview]');
  if (preview) {
    const link = preview.querySelector('[data-preview-link]');
    const service = preview.querySelector('[name="preview-service"]');
    const selectedBranch = preview.querySelector('[name="preview-branch"]');
    if (link && service && selectedBranch) {
      const sync = () => { link.href = `appointment.html?service=${encodeURIComponent(service.value)}&branch=${encodeURIComponent(selectedBranch.value)}`; };
      service.addEventListener('change',sync);
      selectedBranch.addEventListener('change',sync);
      sync();
    }
  }
})();
