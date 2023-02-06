import {
  headerBlur,
  headerHide,
  closePopup,
  openPopup,
  changeStepsQuizPopup,
  initMiniPartnersSwiper,
  initAccordeon,
  associateAccordeonWithImageSrc,
  initLangSelects,
  setBenefitСolumns,
} from "./modules/functions.js";

// Header Bluring
headerBlur('.home');
headerHide()

// Popup
closePopup();
openPopup()
changeStepsQuizPopup()

// Swiper
initMiniPartnersSwiper();

// Accordeon
initAccordeon();
associateAccordeonWithImageSrc();
initLangSelects();
setBenefitСolumns();

window.onload = () => {};
