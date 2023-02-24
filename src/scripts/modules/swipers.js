import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { breakpointsMin } from '../utils/breakpoints';
import classNames from '../utils/classNames';

import 'swiper/css'; // eslint-disable-line import/no-unresolved
import 'swiper/css/navigation'; // eslint-disable-line import/no-unresolved
import 'swiper/css/pagination'; // eslint-disable-line import/no-unresolved
import 'swiper/css/scrollbar'; // eslint-disable-line import/no-unresolved

export function initMiniPartnersSwiper() {
  const classBlock = classNames.swiper.miniPartners;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay],
    autoplay: {
      disableOnInteraction: true,
      delay: 2000,
    },
    slidesPerView: 3,
    spaceBetween: 27,
    speed: 1000,
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    breakpoints: {
      [breakpointsMin.md]: {
        spaceBetween: 50,
        slidesPerView: 5,
      },
      [breakpointsMin.xl]: {
        spaceBetween: 80,
        slidesPerView: 6,
      },
      [breakpointsMin.xxl]: {
        spaceBetween: 110,
        slidesPerView: 7,
      },
    },
  });
}
export function initRateSwiper() {
  const classBlock = classNames.swiper.rateSlider;

  return new Swiper(`.${classBlock}`, {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 700,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 2,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 3,
      },
      [breakpointsMin.xxl]: {
        slidesPerView: 4,
      },
    },
  });
}
export function initReviewsSwiper() {
  const classBlock = classNames.swiper.review;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay, Scrollbar],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      disableOnInteraction: true,
      delay: 2000,
    },
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      [breakpointsMin.lg]: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 3,
      },
      [breakpointsMin.xxl]: {
        slidesPerView: 4,
      },
    },
  });
}
export function initGallerySwiper() {
  const classBlock = classNames.swiper.gallery;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay, Scrollbar],
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      disableOnInteraction: true,
      delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 12,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      [breakpointsMin.md]: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      [breakpointsMin.lg]: {
        slidesPerView: 3,
      },
    },
  });
}
export function initPartnersSwiper() {
  const classBlock = classNames.swiper.partners;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay],
    autoplay: {
      disableOnInteraction: true,
      delay: 2000,
    },
    slidesPerView: 'auto',
    spaceBetween: 48,
    speed: 1000,
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    breakpoints: {
      [breakpointsMin.md]: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      [breakpointsMin.lg]: {
        slidesPerView: 4,
      },
      [breakpointsMin.xxl]: {
        slidesPerView: 5,
      },
    },
  });
}
