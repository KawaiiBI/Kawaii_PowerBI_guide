/**
 * cursor.js — Efecto kawaii en el cursor
 * Genera pequeñas flores 🌸 y estrellas ✨ que siguen al ratón
 */

(function() {
  // Solo en dispositivos con ratón (no táctiles)
  if (window.matchMedia('(hover: none)').matches) return;

  const EMOJIS = ['🌸', '✨', '💫', '🌷', '⭐', '🌺', '💕'];
  const PARTICLE_COUNT = 1;  // partículas por movimiento
  const LIFETIME = 800;      // ms que dura cada partícula

  // Crear contenedor para las partículas
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 99999;
    overflow: hidden;
  `;
  document.body.appendChild(container);

  let lastX = 0;
  let lastY = 0;
  let frameRequested = false;

  function createParticle(x, y) {
    const particle = document.createElement('span');
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    // Posición y offset aleatorio
    const offsetX = (Math.random() - 0.5) * 24;
    const offsetY = (Math.random() - 0.5) * 24;
    const size = 12 + Math.random() * 10; // entre 12px y 22px
    const rotation = (Math.random() - 0.5) * 40; // rotación inicial
    const drift = (Math.random() - 0.5) * 60;    // deriva horizontal

    particle.textContent = emoji;
    particle.style.cssText = `
      position: fixed;
      left: ${x + offsetX}px;
      top: ${y + offsetY}px;
      font-size: ${size}px;
      line-height: 1;
      pointer-events: none;
      user-select: none;
      transform-origin: center;
      transition: none;
      animation: kawaii-float ${LIFETIME}ms ease-out forwards;
      --drift: ${drift}px;
      --rotation: ${rotation}deg;
    `;

    container.appendChild(particle);

    // Eliminar la partícula cuando termina la animación
    setTimeout(() => {
      if (particle.parentNode) particle.parentNode.removeChild(particle);
    }, LIFETIME);
  }

  // Inyectar los keyframes de la animación
  const style = document.createElement('style');
  style.textContent = `
    @keyframes kawaii-float {
      0% {
        opacity: 1;
        transform: translate(0, 0) rotate(var(--rotation)) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(var(--drift), -50px) rotate(calc(var(--rotation) + 180deg)) scale(0.3);
      }
    }
  `;
  document.head.appendChild(style);

  // Escuchar el movimiento del ratón con throttling
  document.addEventListener('mousemove', function(e) {
    lastX = e.clientX;
    lastY = e.clientY;

    if (!frameRequested) {
      frameRequested = true;
      requestAnimationFrame(function() {
        // Solo crear partícula si el ratón se movió suficiente
        const dx = lastX - (parseFloat(container.dataset.lastX) || 0);
        const dy = lastY - (parseFloat(container.dataset.lastY) || 0);

        if (Math.sqrt(dx * dx + dy * dy) > 8) {
          createParticle(lastX, lastY);
          container.dataset.lastX = lastX;
          container.dataset.lastY = lastY;
        }

        frameRequested = false;
      });
    }
  });

  // Efecto extra al hacer clic: explosión de flores
  document.addEventListener('click', function(e) {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => createParticle(e.clientX, e.clientY), i * 40);
    }
  });

})();
