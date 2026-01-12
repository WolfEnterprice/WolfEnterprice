/**
 * Script de animaciones mejoradas para el Hero
 * Efectos dinámicos y dramáticos para enganchar al usuario
 */
(function () {
  'use strict';

  // Verificar si el usuario prefiere movimiento reducido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  // Esperar a que el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimations);
  } else {
    initHeroAnimations();
  }

  function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Animación de entrada del badge
    const badge = hero.querySelector('.hero-badge');
    if (badge) {
      setTimeout(() => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(-20px) scale(0.9)';
        badge.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        requestAnimationFrame(() => {
          badge.style.opacity = '1';
          badge.style.transform = 'translateY(0) scale(1)';
        });
      }, 200);
    }

    // Animación de entrada del título (efecto reveal)
    const titleLines = hero.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(30px)';
        line.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        requestAnimationFrame(() => {
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
        });
      }, 400 + (index * 200));
    });

    // Animación de entrada de los botones
    const buttons = hero.querySelectorAll('.btn-hero-primary, .btn-hero-whatsapp');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px) scale(0.95)';
        btn.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        requestAnimationFrame(() => {
          btn.style.opacity = '1';
          btn.style.transform = 'translateY(0) scale(1)';
        });
      }, 800 + (index * 150));
    });

    // Animación de entrada del subtítulo
    const subtitle = hero.querySelector('.hero-subtitle');
    if (subtitle) {
      setTimeout(() => {
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(20px)';
        subtitle.style.transition = 'all 0.8s ease-out';
        
        requestAnimationFrame(() => {
          subtitle.style.opacity = '1';
          subtitle.style.transform = 'translateY(0)';
        });
      }, 1100);
    }

    // Animación de entrada de las features (escalonada)
    const features = hero.querySelectorAll('.hero-feature');
    features.forEach((feature, index) => {
      setTimeout(() => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-30px)';
        feature.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        requestAnimationFrame(() => {
          feature.style.opacity = '1';
          feature.style.transform = 'translateX(0)';
        });
      }, 1400 + (index * 150));
    });

    // Animación de entrada del tagline
    const tagline = hero.querySelector('.hero-tagline');
    if (tagline) {
      setTimeout(() => {
        tagline.style.opacity = '0';
        tagline.style.transform = 'translateY(10px)';
        tagline.style.transition = 'all 0.8s ease-out';
        
        requestAnimationFrame(() => {
          tagline.style.opacity = '1';
          tagline.style.transform = 'translateY(0)';
        });
      }, 2000);
    }

    // Efecto de cursor tracking en los botones (opcional, solo desktop)
    if (window.innerWidth > 768) {
      buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          btn.style.setProperty('--mouse-x', `${x}px`);
          btn.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    }

    // Efecto parallax sutil en el scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroContent = hero.querySelector('.hero-content');
          
          if (heroContent && scrolled < window.innerHeight) {
            const parallax = scrolled * 0.3;
            heroContent.style.transform = `translateY(${parallax}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();

