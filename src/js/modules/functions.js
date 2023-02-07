import { classNames } from "./classNames.js";
import Swiper, { Autoplay } from "swiper";
import Choices from "choices.js";

// Header
export function headerBlur() {
  const classBlock = classNames.header.block;
  const classBlur = classNames.header.blur;
  const classApp = classNames.page.app;
  const classHome = classNames.page.home;
  const classTariffs = classNames.page.tariffs;

  const header = document.querySelector(`.${classBlock}`);
  document.addEventListener("scroll", () => {
    if (header.classList.contains(classBlur) && window.scrollY > 0) return;
    if (window.scrollY > 0) header.classList.add(classBlur);
    else {
      if (
        header.closest(`.${classApp}.${classHome},.${classApp}.${classTariffs}`)
      ) {
        header.classList.remove(classBlur);
      }
    }
  });
}
export function headerHide() {
  const classBlock = classNames.header.block;
  const classHide = classNames.header.hide;

  const header = document.querySelector(`.${classBlock}`);
  let lastScrollY = window.scrollY;
  document.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY !== 0) {
      header.classList.add(classHide);
      lastScrollY = window.scrollY;
    } else {
      header.classList.remove(classHide);
      lastScrollY = window.scrollY;
    }
  });
}

// Popup
export function openPopup(overlayClasName, popupClasName) {
  const classOverlay = classNames.popups.overlay;
  const classOverlayActive = classNames.popups.overlayActive;
  const classPopup = classNames.popups.popup;
  const classPopupActive = classNames.popups.popupActive;

  document.querySelectorAll("[data-popup-open]").forEach((openBtn) => {
    openBtn.addEventListener("click", () => {
      const popupName = openBtn.dataset.popupOpen;
      const popup = document.querySelector(`[data-popup="${popupName}"]`);
      const overlay = popup.closest(`.${classOverlay}`);

      popup.classList.add(classPopupActive);
      overlay.classList.add(classOverlayActive);
      document.body.style.overflow = "hidden";
    });
  });
}
export function closePopup() {
  const classOverlay = classNames.popups.overlay;
  const classOverlayActive = classNames.popups.overlayActive;
  const classPopup = classNames.popups.popup;
  const classPopupActive = classNames.popups.popupActive;

  document.addEventListener("click", (e) => {
    const overlay = e.target.closest(`.${classOverlayActive}`);
    const popup = e.target.closest(`.${classPopupActive}`);
    const closeBtn = e.target.closest("[data-popup-close]");

    if (!(closeBtn || (overlay && !popup))) return;

    const activePopup = overlay.querySelector(`.${classPopupActive}`);

    overlay.classList.remove(classOverlayActive);
    activePopup.classList.remove(classPopupActive);
    document.body.style.overflow = "auto";

    overlay.addEventListener("transitionend", function handler() {
      resetPoups(activePopup);
      overlay.removeEventListener("transitionend", handler);
    });
  });
}
function resetPoups(popup) {
  const classQuiz = classNames.popupQuiz.quiz;
  const classStepActive = classNames.popupQuiz.stepActive;
  const classResult = classNames.popupQuiz.result;
  const classResultActive = classNames.popupQuiz.resultActive;

  popup.querySelectorAll("form").forEach((form) => {
    form.reset();
  });

  if (!popup.classList.contains(classQuiz)) return;

  const quizResult = popup.querySelector(`.${classResult}`);
  let currentStep = popup.querySelector(`.${classStepActive}`);

  if (quizResult.classList.contains(classResultActive)) {
    quizResult.classList.remove(classResultActive);
    currentStep = popup.querySelector('[data-quiz-step="1"]');
    currentStep.classList.add(classStepActive);
    return;
  }

  currentStep.classList.remove(classStepActive);
  currentStep = popup.querySelector('[data-quiz-step="1"]');
  currentStep.classList.add(classStepActive);
}

// QuizPopup
export function changeStepsQuizPopup() {
  const classQuiz = classNames.popupQuiz.quiz;
  const classStepActive = classNames.popupQuiz.stepActive;
  const classResultActive = classNames.popupQuiz.resultActive;

  const quizPopup = document.querySelector(`.${classQuiz}`);

  const quizBtnBackCol = quizPopup.querySelectorAll("[data-quiz-step-back]");
  const quizBtnNextCol = quizPopup.querySelectorAll("[data-quiz-step-next]");
  const quizBtnSubmit = quizPopup.querySelector("[data-quiz-btn-submit]");

  const quizBtnReset = quizPopup.querySelector("[data-quiz-btn-reset]");

  const goTo = (e, increment) => {
    e.preventDefault();

    let currentStep = quizPopup.querySelector(`.${classStepActive}`);
    let currentStepNum = currentStep.dataset.quizStep;

    currentStep.classList.remove(classStepActive);
    if (increment) currentStepNum++;
    else currentStepNum--;
    currentStep = quizPopup.querySelector(
      `[data-quiz-step="${currentStepNum}"`
    );
    currentStep.classList.add(classStepActive);
  };

  quizBtnBackCol.forEach((quizBtnBack) => {
    quizBtnBack.addEventListener("click", (e) => goTo(e, false));
  });
  quizBtnNextCol.forEach((quizBtnNext) => {
    quizBtnNext.addEventListener("click", (e) => goTo(e, true));
  });

  quizBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const currentStep = quizPopup.querySelector(`.${classStepActive}`);
    currentStep.classList.remove(classStepActive);

    const result = quizPopup.querySelector("[data-quiz-result]");
    result.classList.add(classResultActive);
  });

  // Previous Close
  quizBtnReset.addEventListener("click", () => {
    resetPoups(quizPopup);
  });
}

// Swiper
export function initMiniPartnersSwiper(className) {
  const classBlock = classNames.swiper.miniPartners;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 110,
    speed: 5000,
    slidesPerView: 5,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
    },
  });
}
export function initReviewsSwiper() {
  const classBlock = classNames.swiper.review;

  return new Swiper(`.${classBlock}`, {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 20,
    speed: 15000,
    slidesPerView: 3,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });
}

// Choices.js
export function initLangChoices() {
  const classBlock = classNames.choices.block;

  document.querySelectorAll(`.${classBlock}`).forEach((choicesEl) => {
    const select = new Choices(choicesEl, {
      searchEnabled: false,
      position: "bottom",
      itemSelectText: "",
      shouldSort: false,
      placeholder: true,
      classNames: {
        containerOuter: `choices ${choicesEl.className}`,
      },
    });

    const dropdown = select.dropdown.element;
    const containerOuter = select.containerOuter.element;
    dropdown.classList.add("dropdown--up");

    containerOuter.addEventListener("click", function () {
      const rect = containerOuter.getBoundingClientRect();

      if (rect.bottom + dropdown.scrollHeight > window.innerHeight) {
        dropdown.classList.remove("dropdown--down");
        dropdown.classList.add("dropdown--up");
      } else {
        dropdown.classList.remove("dropdown--up");
        dropdown.classList.add("dropdown--down");
      }
    });

    return select;
  });
}

// Accordeon
export function initAccordeon() {
  const classBlock = classNames.acc.block;
  const classItem = classNames.acc.item;
  const classItemActive = classNames.acc.itemActive;
  const classBtn = classNames.acc.btn;
  const classPanel = classNames.acc.panel;

  const accCol = document.querySelectorAll(`.${classBlock}`);
  accCol.forEach((acc) => {
    const accItemCol = acc.querySelectorAll(`.${classItem}`);

    {
      const firstAccItem = accItemCol[0];
      const firstAccPanel = firstAccItem.querySelector(`.${classPanel}`);
      firstAccItem.classList.add(classItemActive);
      firstAccPanel.style.maxHeight = firstAccPanel.scrollHeight + 32 + "px";
    }

    accItemCol.forEach((accItem) => {
      const accBtn = accItem.querySelector(`.${classBtn}`);
      const accPanel = accItem.querySelector(`.${classPanel}`);

      accBtn.addEventListener("click", () => {
        accItemCol.forEach((otherAccItem) => {
          const otherActiveAccItem =
            otherAccItem.classList.contains(classItemActive);
          if (accItem === otherAccItem || !otherActiveAccItem) return;

          const otherAccPanel = otherAccItem.querySelector(`.${classPanel}`);
          otherAccItem.classList.remove(classItemActive);
          otherAccPanel.style.maxHeight = 0;
        });

        if (!accItem.classList.contains(classItemActive)) {
          accItem.classList.add(classItemActive);
          accPanel.style.maxHeight = accPanel.scrollHeight + 32 + "px";
        } else {
          accItem.classList.remove(classItemActive);
          accPanel.style.maxHeight = 0;
        }
      });
    });
  });
}
export function associateAccordeonWithImageSrc() {
  const classSection = classNames.accImg.section;
  const classAcc = classNames.accImg.acc;
  const classImg = classNames.accImg.img;
  const classAccBtn = classNames.acc.btn;

  const accImgSection = document.querySelector(`.${classSection}`);
  if (!accImgSection) return;

  const acc = accImgSection.querySelector(`.${classAcc}`);
  const image = accImgSection.querySelector(`.${classImg}`);
  const picture = image.closest("picture");
  const accBtnCol = acc.querySelectorAll(`.${classAccBtn}`);

  {
    const firstAccItem = accBtnCol[0];
    const imagePath = firstAccItem.dataset.image;
    image.setAttribute("src", imagePath);
    if (picture) {
      picture.querySelectorAll("source").forEach((source) => {
        source.setAttribute("srcset", imagePath);
      });
    }
  }

  accBtnCol.forEach((accBtn) => {
    accBtn.addEventListener("click", () => {
      image.src = accBtn.dataset.image;
      if (picture) {
        picture.querySelectorAll("source").forEach((source) => {
          source.setAttribute("srcset", accBtn.dataset.image);
        });
      }
    });
  });
}

// Video
export function isVideo() {
  const classBlock = classNames.videoBlock.block;
  const classBtn = classNames.videoBlock.btn;
  const classVideo = classNames.videoBlock.video;
  const classPlayed = classNames.videoBlock.played;

  const videoBlock = document.querySelector(`.${classBlock}`);
  if (!videoBlock) return;

  const videoBtn = videoBlock.querySelector(`.${classBtn}`);
  const video = videoBlock.querySelector(`.${classVideo}`);

  videoBtn.addEventListener("click", () => {
    console.log('clickBtn');
    videoBlock.classList.add(classPlayed);
    video.play();
    video.setAttribute("controls", "controls");
    videoBtn.classList.add("visually-hidden");
  });

  video.onplay = () => {
    console.log('onplay');
    videoBlock.classList.add(classPlayed);
    video.play();
    video.setAttribute("controls", "controls");
    videoBtn.classList.add("visually-hidden");
  };

  video.onpause = () => {
    console.log('onpause');
    setTimeout(() => {
      if (!video.paused) return;
      videoBlock.classList.remove(classPlayed);
      video.removeAttribute("controls");
      videoBtn.classList.remove("visually-hidden");
    }, 200);
  };
}

// Benefit List
export function setBenefitСolumns() {
  const classBlock = classNames.benefitList.block;
  const classFew = classNames.benefitList.few;
  const classMany = classNames.benefitList.many;

  document.querySelectorAll(`.${classBlock}`).forEach((list) => {
    const childrenCount = list.children.length;
    if (childrenCount <= 5) list.classList.add(classFew);
    else if (childrenCount >= 8) list.classList.add(classMany);
  });
}
