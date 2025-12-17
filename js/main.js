document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("heroImage");

  if (!img) return;

  const images = [
    "assets/hero/qr.png",
    "assets/hero/cctv.png" ,
    "assets/hero/images.png",
    "assets/hero/qr.png",
    "assets/hero/laptop.png",
     "assets/hero/ott.png",
     
  ];

  let index = 0;

  setInterval(() => {
    // Shrink current image
    img.classList.remove("scale-in");
    img.classList.add("scale-out");

    // Change image when fully shrunk
    setTimeout(() => {
      index = (index + 1) % images.length; 
      img.src = images[index];

      img.classList.remove("scale-out");
      img.classList.add("scale-in");
    }, 600);

  }, 4000);
});
