import Swiper, { Navigation, Pagination } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-application", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 44,
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".application-five .slide-control-btn.next",
      prevEl: ".application-five .slide-control-btn.prev",
    },
    pagination: {
      el: ".swiper-pagination",
      enabled: true,
      clickable: true,
      // renderBullet: function (index, className) {
      //   return `<span class="${className}" style="background-color:${motors[index].color}"></span>`
      // },
    },
    breakpoints: {
      100: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 44,
      },
    },
  })
})
