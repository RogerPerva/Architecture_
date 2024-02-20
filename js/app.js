const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-carousel] [data-slides]");
let currentIndex = 0;

function showSlide(index) {
  const activeSlide = slides.querySelector("[data-active]");
  activeSlide.removeAttribute("data-active");
  slides.children[index].setAttribute("data-active", "true");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  showSlide(currentIndex);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.carouselButton === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
  });
});

// Cambiar automáticamente las imágenes cada 10 segundos
setInterval(nextSlide, 5000); // 10000 milisegundos = 10 segundos

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]");

//       const activeSlide = slides.querySelector("[data-active]");
//       let newIndex = [...slides.children].indexOf(activeSlide) + offset
//       if(newIndex < 0 ) newIndex = slides.children.length -1
//       if(newIndex >= slides.children.length) newIndex = 0

//       slides.children[newIndex].dataset.active = true;
//       delete activeSlide.dataset.active;
//   });
// });

