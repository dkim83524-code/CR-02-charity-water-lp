document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        event.preventDefault();
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 10
        ? '0 2px 20px rgba(27,42,74,0.12)'
        : 'none';
    });
  }
});
