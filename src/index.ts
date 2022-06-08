import Swiper from 'swiper'
import '../style.scss'
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  })
  console.log('ts loaded', swiper)
})
