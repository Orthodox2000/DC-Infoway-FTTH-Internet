const btn = document.getElementById("themeToggle");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
if (saved) root.classList.toggle("dark", saved === "dark");

btn.onclick = () => {
  const dark = root.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  btn.textContent = dark ? "🌙" : "☀️";
};
