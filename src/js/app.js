import {
  headerBlur,
  headerHide,
  closePopup,
  openPopup,
  initMiniPartnersSwiper,
  initAccordion,
  associateAccordionWithImageSrc,
  initLangSelects,
  setBenefitСolumns,
} from "./modules/functions.js";

// Header Bluring
headerBlur('.home');
headerHide()

// Popup
closePopup();
openPopup('form')

initMiniPartnersSwiper();
initAccordion();
associateAccordionWithImageSrc();
initLangSelects();
setBenefitСolumns();

window.onload = () => {};
