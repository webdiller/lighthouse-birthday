document.addEventListener("DOMContentLoaded", function () {
  const d = document;

  (function () {
    const questions = d.querySelectorAll("#questions .faq__question-title");
    if (questions) {
      questions.forEach(item => {
        item.addEventListener("click", function (e) {
          item.parentElement.classList.toggle("active");
        });
      });
    }
  })();

  (function () {
    const swiper = new Swiper("#subscribeSwiper", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 7,

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".subscribe__navs .swiper-button-next",
        prevEl: ".subscribe__navs .swiper-button-prev"
      },

      scrollbar: {
        el: ".swiper-scrollbar"
      },
      breakpoints: {
        576: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 8
        }
      }
    });
  })();
});
