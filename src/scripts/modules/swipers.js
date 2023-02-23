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
    slidesPerView: 2,
    spaceBetween: 27,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 500,
    },
    breakpoints: {
      [breakpointsMin.sm]: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      [breakpointsMin.md]: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      [breakpointsMin.lg]: {
        slidesPerView: 5,
        spaceBetween: 80,
      },
      [breakpointsMin.xl]: {
        spaceBetween: 110,
        slidesPerView: 5,
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
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
      disableOnInteraction: true,
      delay: 2000,
    },
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 2,
      },
      [breakpointsMin.xl]: {
        slidesPerView: 3,
      },
    },
  });
}
export function initGallerySwiper() {
  const classBlock = classNames.swiper.gallery;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
  });
}
export function initPartnersSwiper() {
  const classBlock = classNames.swiper.partners;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
  });
}
