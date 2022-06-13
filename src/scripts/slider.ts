import Swiper, { Navigation } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-motors", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 16,
    loop: false,
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 3,
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
      300: {
        spaceBetween: 8,
      },
      640: {
        spaceBetween: 30,
      },
      1048: {
        spaceBetween: 96,
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
      300: {
        spaceBetween: 8,
      },
      640: {
        spaceBetween: 30,
      },
      1048: {
        spaceBetween: 96,
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
      300: {
        spaceBetween: 8,
      },
      640: {
        spaceBetween: 30,
      },
      1048: {
        spaceBetween: 96,
      },
    },
  })
  console.log(swiper)
})
