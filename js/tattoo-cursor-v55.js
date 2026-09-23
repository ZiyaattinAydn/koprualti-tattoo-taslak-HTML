/* v55: light, bounded hero-only ink trail. Touch and reduced motion stay quiet. */
(() => {
  const hero = document.querySelector('[data-tattoo-zone]');
  if (!hero) return;
  const canvas = hero.querySelector('.tattoo-trail');
  const cursor = hero.querySelector('.tattoo-crosshair');
  const toggle = hero.querySelector('[data-tattoo-sound-toggle]');
  const audio = hero.querySelector('[data-tattoo-sound]');
  const media = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px) and (prefers-reduced-motion: no-preference)');
  if (!media.matches) return;
  const ctx = canvas?.getContext('2d', {alpha: true});
  if (!ctx) return;
  let active = false, pressed = false, soundEnabled = false, frame = 0, last = null;
  const marks = [];
  const MAX_MARKS = 180;
  const FADE_MS = 1150;

  function resize() {
    const rect = hero.getBoundingClientRect();
    const scale = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.round(rect.width * scale));
    canvas.height = Math.max(1, Math.round(rect.height * scale));
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    marks.length = 0;
    last = null;
  }
  function stopAudio() {
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }
  function release() {
    if (!pressed) return;
    pressed = false;
    const now = performance.now();
    marks.forEach(mark => { if (mark.held) { mark.held = false; mark.released = now; } });
    stopAudio();
    schedule();
  }
  function draw(now) {
    frame = 0;
    const rect = hero.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    for (let i = marks.length - 1; i >= 0; i--) {
      const mark = marks[i];
      const age = now - (mark.released ?? mark.born);
      if (!mark.held && age >= FADE_MS) { marks.splice(i, 1); continue; }
      const strength = mark.held ? 1 : Math.max(0, 1 - age / FADE_MS);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(mark.x1, mark.y1);
      ctx.lineTo(mark.x2, mark.y2);
      ctx.strokeStyle = `rgba(7,7,9,${strength * .62})`;
      ctx.lineWidth = mark.heavy ? 3.8 : 2.8;
      ctx.stroke();
      ctx.strokeStyle = `rgba(207,205,210,${strength * (mark.heavy ? .76 : .47)})`;
      ctx.lineWidth = mark.heavy ? 1.7 : 1.05;
      ctx.stroke();
    }
    if (active && document.visibilityState === 'visible' && marks.some(mark => !mark.held)) schedule();
  }
  function schedule() { if (active && !frame && document.visibilityState === 'visible') frame = requestAnimationFrame(draw); }
  function stop() {
    release();
    active = false;
    hero.classList.remove('tattoo-cursor-ready');
    cursor.classList.remove('is-visible');
    marks.length = 0;
    last = null;
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stopAudio();
  }
  function sync() {
    if (!media.matches) { stop(); return; }
    active = true;
    hero.classList.add('tattoo-cursor-ready');
    resize();
  }
  function point(event) {
    const rect = hero.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
  }
  function interactive(event) { return Boolean(event.target.closest('a,button,input,select,textarea,[data-lightbox]')); }
  function move(event) {
    if (!active || event.pointerType !== 'mouse') return;
    if (interactive(event)) { cursor.classList.remove('is-visible'); last = null; return; }
    const p = point(event);
    if (p.x < 0 || p.y < 0 || p.x > hero.clientWidth || p.y > hero.clientHeight) return;
    cursor.style.left = `${p.x}px`;
    cursor.style.top = `${p.y}px`;
    cursor.classList.add('is-visible');
    if (last) {
      const distance = Math.hypot(p.x - last.x, p.y - last.y);
      if (distance >= 2 && distance < 95) {
        marks.push({x1:last.x,y1:last.y,x2:p.x,y2:p.y,born:performance.now(),released:null,held:pressed,heavy:pressed});
        if (marks.length > MAX_MARKS) marks.splice(0, marks.length - MAX_MARKS);
        schedule();
      }
    }
    last = p;
  }
  function down(event) {
    if (!active || event.pointerType !== 'mouse' || event.button !== 0 || interactive(event)) return;
    pressed = true;
    last = point(event);
    if (soundEnabled && audio?.src) audio.play().catch(() => {});
  }
  hero.addEventListener('pointermove', move, {passive:true});
  hero.addEventListener('pointerdown', down);
  hero.addEventListener('pointerleave', () => { cursor.classList.remove('is-visible'); last = null; release(); });
  window.addEventListener('pointerup', release);
  window.addEventListener('blur', release);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else sync(); });
  window.addEventListener('pagehide', stop);
  media.addEventListener?.('change', sync);
  if ('ResizeObserver' in window) new ResizeObserver(() => { if (active) resize(); }).observe(hero);
  else window.addEventListener('resize', () => { if (active) resize(); }, {passive:true});

  // No audio asset is shipped. Add a licensed local file as the audio src to enable.
  if (toggle && audio?.getAttribute('src')) {
    audio.volume = 0.12;
    toggle.disabled = false;
    toggle.textContent = '♪ Ses kapalı';
    toggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      toggle.setAttribute('aria-pressed', String(soundEnabled));
      toggle.textContent = soundEnabled ? '♪ Ses açık' : '♪ Ses kapalı';
      if (!soundEnabled) stopAudio();
      else if (pressed) audio.play().catch(() => {});
    });
  }
  sync();
})();
