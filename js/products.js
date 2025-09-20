
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".product-img");
  
  // Create lightbox container
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <span class="close">&times;</span>
    <img src="" alt="Preview">
    <div class="controls">
      <span class="prev">&#10094;</span>
      <span class="next">&#10095;</span>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".close");
  const prevBtn = lightbox.querySelector(".prev");
  const nextBtn = lightbox.querySelector(".next");

  let currentIndex = 0;

  // Open lightbox
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });

  // Close lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Previous
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  // Next
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  // Close on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
});