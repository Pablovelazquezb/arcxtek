/**
 * ARCXTEK MINIMAL JAVASCRIPT
 * High Performance, Lightweight & Clean
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // 2. Mobile Menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      drawer.setAttribute('aria-hidden', String(!isOpen));
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 3. Carousel pause on user touch
  const wrapper = document.getElementById('carousel-wrapper');
  const track = document.getElementById('carousel-track');
  if (wrapper && track) {
    wrapper.addEventListener('touchstart', () => {
      track.style.animationPlayState = 'paused';
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });
  }

  // 4. Clean Contact Form
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-contact-btn');

  if (form && feedback && submitBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('lead-name')?.value.trim();
      const email = document.getElementById('lead-email')?.value.trim();
      const phone = document.getElementById('lead-phone')?.value.trim();
      const message = document.getElementById('lead-message')?.value.trim();

      if (!name || !email || !phone || !message) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Por favor completa todos los campos requeridos.';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Enviando...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Enviar Consulta</span>';
        feedback.className = 'form-feedback success';
        feedback.textContent = '¡Recibido! Nos pondremos en contacto contigo en breve para revisar tu proyecto.';
        form.reset();
      }, 700);
    });
  }

  // 5. Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
