import isVideo from './modules/video';
import initLangChoices from './modules/choices';
import onChangeInputTypeFile from './modules/inputTypeFile';
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
  initRateSwiper,
} from './modules/swipers';

import 'normalize.css';
import '../styles/main.scss';

require.context('../assets/icons/', true, /\.(svg)$/);

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
initRateSwiper();

// Choices
initLangChoices();

// Accordeon
initAccordeon();
associateAccordeonWithImageSrc();

// Video
isVideo();

// Input Type File
onChangeInputTypeFile();


function clamp(min, max) {
  const breakpoints = [1600, 1400, 1200, 992, 768, 576];
  const minBp = 360;
  let widthNum;
  let bp;
  for (let i = 0; i < breakpoints.length; i+=1) {
    bp = breakpoints[i];

    widthNum = (max / bp) * 100;
    const isFits = (widthNum / 100) * minBp <= min;

    if (isFits) {
      break
    };

    widthNum = null;
  }
  return [bp, widthNum];
}
console.log(clamp(50, 100));
