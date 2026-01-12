/**
 * Script de animaciones en scroll
 * Optimizado para móviles y rendimiento
 */
(function () {
  'use strict';

  // Verificar si el usuario prefiere movimiento reducido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  // Configuración
  const animationElements = document.querySelectorAll('.animate-on-scroll, .card, .service-card, .plan-card, .technology-card, .process-step, .team-card, .project-card, .about-card');
  
  if (animationElements.length === 0) return;

  // Intersection Observer para animaciones
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay escalonado para efecto cascada
        setTimeout(() => {
          entry.target.classList.add('animated');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos
  animationElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });

  // Animación para números y contadores
  const animateNumbers = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 30);
  };

  // Smooth scroll mejorado para móviles
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // Altura del navbar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})();

