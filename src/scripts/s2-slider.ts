import Swiper, { Pagination } from "swiper"
declare let motors: string
type fromMotorsType = {
  color: string
}[]
let fromMotors: fromMotorsType = JSON.parse(motors.replace(/&quot;/gi, `"`))
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-motors", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      enabled: true,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}" style="background-color:${fromMotors[index].color}"></span>`
      },
    },
  })
})
