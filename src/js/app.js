import {
  headerBlur,
  headerHide,
  closePopup,
  openPopup,
  changeStepsQuizPopup,
  initMiniPartnersSwiper,
  initReviewsSwiper,
  initGallerySwiper,
  initPartnersSwiper,
  initAccordeon,
  associateAccordeonWithImageSrc,
  initLangChoices,
  isVideo,
  inputFileChange,
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
initGallerySwiper();
initPartnersSwiper();

// Choices.js
initLangChoices();

// Accordeon
initAccordeon();
associateAccordeonWithImageSrc();

// Video
isVideo();

// Input File Change
inputFileChange()
