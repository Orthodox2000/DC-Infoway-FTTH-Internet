document.addEventListener("DOMContentLoaded", () => {

  /* ===== SCROLL ANIMATIONS ===== */
  const animatedItems = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedItems.forEach(item => {
    // Skip hero elements (already visible)
    if (!item.closest('.ms-hero')) {
      observer.observe(item);
    }
  });

  /* ===== NAV SMOOTH SCROLL ===== */
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const offset = 110; // navbar height
      const y =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  });

});
