document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("heroImage");

  if (!img) return;

  const images = [
    "assets/hero/router2.png",
    "assets/hero/qr.png",
    "assets/hero/cctv.png" , 
    "assets/hero/laptop.png",
     "assets/hero/ott.png"
     
  ];

  let index = 1;

  setInterval(() => {
    // Shrink current image
    img.classList.remove("scale-in");
    img.classList.add("scale-out");

    // Change image when fully shrunk
    setTimeout(() => {
      
      img.src = images[index];
      index++;
      if(index>4)index=0;

      img.classList.remove("scale-out");
      img.classList.add("scale-in");
    }, 600);

  }, 4000);
});
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let scrollPos = window.scrollY + 120; // navbar height offset

  let currentId = "";

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      currentId = section.getAttribute("id");
    }
  });

  // 🔥 Special case — bottom of page = contact/footer
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
    currentId = "contact";
  }

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// FAQ Accordion

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    // close others (optional — remove if you want multiple open)
    document.querySelectorAll(".faq-item").forEach(f => {
      if (f !== item) f.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  const bar = document.getElementById("scrollProgressBar");
  if (bar) {
    bar.style.width = progress + "%";
  }
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);
