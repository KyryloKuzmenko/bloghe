import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let coverSwiper = null;


function initCoverSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;
  
  if (isMobile && !coverSwiper) {
    coverSwiper = new Swiper('.cover-swiper', {
      spaceBetween: 20,
      slidesPerView: 1.5,
      mousewheel: true,
      loop: true,
      breakpoints: {
        1200: {
          spaceBetween: 200,
        },
      },

      pagination: {
        el: '.gallery-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && coverSwiper) {
    coverSwiper.destroy(true, true);
    coverSwiper = null;
  }
}

window.addEventListener('load', initCoverSwiper);
window.addEventListener('resize', initCoverSwiper);
