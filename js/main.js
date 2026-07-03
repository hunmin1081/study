(function () {
  'use strict';

  // Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Stat Counter Animation
  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      current = target * progress;

      if (target >= 10) {
        element.textContent = Math.floor(current);
      } else {
        element.textContent = current.toFixed(1);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    }

    update();
  }

  // Intersection Observer for stat cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        if (!entry.target.classList.contains('animated')) {
          animateCounter(entry.target, target, 2000);
          entry.target.classList.add('animated');
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  // Observe all stat numbers
  document.querySelectorAll('[data-target]').forEach(element => {
    observer.observe(element);
  });

  // Smooth Scroll Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        const offsetTop = targetElement.offsetTop - 72; // Account for sticky header

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
        item.style.color = 'var(--color-accent)';
      } else {
        item.style.color = '';
      }
    });
  });

  // Page Load Animation Trigger
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });

  // Log for debugging
  console.log('AI-Safety interactive features loaded');
})();
