document.querySelectorAll(".pricing-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("ring-2");
    card.classList.toggle("ring-cyan-400");
  });
});
