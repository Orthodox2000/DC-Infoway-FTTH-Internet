window.addEventListener("scroll", () => {
  const body = document.body;
  body.classList.toggle("scrolled", window.scrollY > 50);
});
const animatedItems = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(item => observer.observe(item));
