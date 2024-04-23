// window.addEventListener("resize", function () {
//   swiper.update(); // Обновление Swiper
// });

const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

const isMobileDevice = window.matchMedia("(max-width: 1199px)").matches;
if (isMobileDevice) {
  prevButton.style.display = "none";
  nextButton.style.display = "none";
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  effect: "cards",
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1200: {
      slidesPerView: 1,
      centerInsufficientSlides: true,
      pagination: {
        el: null,
      },
    },
  },
});
