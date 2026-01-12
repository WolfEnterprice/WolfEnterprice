/**
 * Script ligero de parallax usando Intersection Observer
 * Optimizado para rendimiento - solo activa cuando es visible
 */
(function () {
  'use strict';

  // Verificar si el usuario prefiere movimiento reducido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return; // No ejecutar parallax si el usuario prefiere movimiento reducido
  }

  // Configuración
  const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
  
  if (parallaxElements.length === 0) return;

  // Intersection Observer para activar solo cuando es visible
  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('parallax-active');
      }
    });
  }, observerOptions);

  // Observar elementos
  parallaxElements.forEach((el) => {
    observer.observe(el);
  });

  // Parallax suave basado en scroll
  let ticking = false;

  function updateParallax() {
    const scrollY = window.pageYOffset;

    parallaxElements.forEach((el) => {
      if (!el.classList.contains('parallax-active')) return;

      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calcular si el elemento está en el viewport
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      // Calcular velocidad según la clase
      let speed = 0.3;
      if (el.classList.contains('parallax-slow')) speed = 0.15;
      if (el.classList.contains('parallax-fast')) speed = 0.5;

      // Aplicar transform solo si está en viewport
      const yPos = -(scrollY - elementTop + viewportHeight / 2) * speed;
      // Limitar el movimiento para evitar efectos excesivos
      const limitedYPos = Math.max(-50, Math.min(50, yPos));
      el.style.transform = `translate3d(0, ${limitedYPos}px, 0)`;
    });

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  // Throttle del scroll
  window.addEventListener('scroll', requestTick, { passive: true });
})();

