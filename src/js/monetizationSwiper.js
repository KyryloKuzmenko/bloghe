import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let monetizationSwiper = null;

function initMonetizationSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !monetizationSwiper) {
    monetizationSwiper = new Swiper('.monetization-swiper', {
      spaceBetween: 20,
      slidesPerView: 'auto',
      mousewheel: true,
      pagination: {
        el: '.gallery-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && monetizationSwiper) {
    monetizationSwiper.destroy(true, true);
    monetizationSwiper = null;
  }
}

window.addEventListener('load', initMonetizationSwiper);
window.addEventListener('resize', initMonetizationSwiper);
