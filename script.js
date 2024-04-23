const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

const isMobileDevice = window.matchMedia("(max-width: 1199px)").matches;
if (isMobileDevice) {
  prevButton.style.display = "none";
  nextButton.style.display = "none";
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  effect: isMobileDevice ? "slide" : "cards",
  // effect: "cards",
  centeredSlides: true,
  // slideShadows: false,
  slidesPerView: 1,
  spaceBetween: 32,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];

      const allNames = document.querySelectorAll(".reviewer-name");
      allNames.forEach((name) => {
        name.classList.remove("hide-name");
      });

      const allTexts = document.querySelectorAll(".review-text");
      allTexts.forEach((text) => {
        text.classList.remove("hide-text");
      });

      const otherNames = document.querySelectorAll(
        ".reviewer-name:not(.swiper-slide-active .reviewer-name)"
      );
      otherNames.forEach((name) => {
        name.classList.add("hide-name");
      });

      const otherTexts = document.querySelectorAll(
        ".review-text:not(.swiper-slide-active .review-text)"
      );
      otherTexts.forEach((text) => {
        text.classList.add("hide-text");
      });
    },
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
