import Swiper, { Navigation } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-motors", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 16,
    loop: false,
    modules: [Navigation],
    navigation: {
      nextEl: ".motor-btn.next",
      prevEl: ".motor-btn.prev",
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1048: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  })
  new Swiper(".swiper-describe-one", {
    // Optional parameters
    direction: "horizontal",
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-describe-one>.slide-control-btn.next",
      prevEl: ".swiper-describe-one>.slide-control-btn.prev",
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    breakpoints: {
      100: {
        centeredSlides: false,
        spaceBetween: 32,
      },
      768: {
        centeredSlides: false,
        spaceBetween: 48,
      },
      1180: {
        centeredSlides: true,
        spaceBetween: 56,
      },
    },
  })
  new Swiper(".swiper-describe-two", {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-describe-two>.slide-control-btn.next",
      prevEl: ".swiper-describe-two>.slide-control-btn.prev",
    },
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    breakpoints: {
      100: {
        centeredSlides: false,
        spaceBetween: 32,
      },
      768: {
        centeredSlides: false,
        spaceBetween: 48,
      },
      1180: {
        centeredSlides: true,
        spaceBetween: 56,
      },
    },
  })
  new Swiper(".swiper-describe-three", {
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-describe-three>.slide-control-btn.next",
      prevEl: ".swiper-describe-three>.slide-control-btn.prev",
    },
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    breakpoints: {
      100: {
        centeredSlides: false,
        spaceBetween: 32,
      },
      768: {
        centeredSlides: false,
        spaceBetween: 48,
      },
      1180: {
        centeredSlides: true,
        spaceBetween: 56,
      },
    },
  })
  console.log(swiper)
})
