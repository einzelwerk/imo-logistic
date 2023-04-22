import { burgerMenu } from './modules/burger-menu';
import { isVideo } from './modules/video';
import { initLangChoices, initTariffChoices } from './modules/choices';
import { onChangeInputTypeFile } from './modules/inputTypeFile';
import { headerBlur, headerHide } from './modules/header';
import { openPopup, closePopup, changeStepsQuizPopup } from './modules/popups';
import {
  initAccordeon,
  associateAccordeonWithImageSrc,
} from './modules/accordeon';
import {
  initMiniPartnersSwiper,
  initReviewsSwiper,
  initGallerySwiper,
  initPartnersSwiper,
  initTariffSwiper,
} from './modules/swipers';
import { initTooltip } from './modules/tooltip';

import 'normalize.css';
import '../styles/main.scss';

// Burger Menu
burgerMenu();

// Header
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
initTariffSwiper();

// Choices
initLangChoices();
initTariffChoices()

// Tippy
initTooltip()

// Accordeon
initAccordeon();
associateAccordeonWithImageSrc();

// Video
isVideo();

// Input Type File
onChangeInputTypeFile();
