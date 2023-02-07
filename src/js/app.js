import {
  headerBlur,
  headerHide,
  closePopup,
  openPopup,
  changeStepsQuizPopup,
  initMiniPartnersSwiper,
  initReviewsSwiper,
  initAccordeon,
  associateAccordeonWithImageSrc,
  initLangChoices,
  setBenefitСolumns,
  isVideo,
} from "./modules/functions.js";

// Header Bluring
headerBlur();
headerHide();

// Popup
closePopup();
openPopup();
changeStepsQuizPopup();

// Swiper
initMiniPartnersSwiper();
initReviewsSwiper();

// Choices.js
initLangChoices();

// Accordeon
initAccordeon();
associateAccordeonWithImageSrc();

// Video
isVideo()

// Benefit List
setBenefitСolumns();
