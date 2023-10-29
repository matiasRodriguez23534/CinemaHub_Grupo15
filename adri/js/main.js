document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-button");
  const playButton = document.querySelector(".play-button");

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      alert("Descarga iniciada...");
      // Puedes agregar lógica real de descarga aquí si es necesario.
    });
  }

  if (playButton) {
    playButton.addEventListener("click", () => {
      playButton.style.display = "none";
      const video = document.querySelector(".video-player");
      if (video) {
        video.style.display = "block";
        video.play();
      }
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(carousel.children);
  const itemWidth = items[0].offsetWidth;
  const itemCount = items.length;
  const viewportWidth = carousel.offsetWidth;
  let currentIndex = 0;

  function animateCarousel() {
    const offset = -currentIndex * (itemWidth + 20); // Incluye el espacio entre cartas
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${offset}px`;
    
    currentIndex++;

    if (currentIndex * (itemWidth + 20) >= itemCount * (itemWidth + 20) - viewportWidth) {
      currentIndex = 0;
      carousel.style.transition = "none"; // Evita una transición abrupta al regresar al inicio
      carousel.style.transform = "translateX(0)";
    }
  }

  setInterval(animateCarousel, 3000); // Cambia cada 3 segundos
});












document.addEventListener("DOMContentLoaded", function () {
const stars = document.querySelectorAll('.star');
const ratingElement = document.getElementById('rating');
let currentRating = 0;
let totalRating = 0;
let numberOfRatings = 0;

stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-value'));

    if (rating === currentRating) {
      // Si el usuario hace clic en la estrella actual, establece la calificación en 0.
      totalRating -= currentRating;
      numberOfRatings -= 1;
      currentRating = 0;
      ratingElement.textContent = (numberOfRatings > 0) ? (totalRating / numberOfRatings).toFixed(1) : "0.0";
      stars.forEach((s) => s.classList.remove('active'));
    } else {
      // Actualiza la calificación y las estadísticas.
      totalRating -= currentRating;
      totalRating += rating;
      numberOfRatings += 1;
      currentRating = rating;
      ratingElement.textContent = (totalRating / numberOfRatings).toFixed(1);
      stars.forEach((s, index) => {
        if (index < rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    }
  });
})});





