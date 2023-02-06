import Swiper, { Autoplay } from "swiper";
import Choices from "choices.js";

export function headerBlur(selector) {
  const header = document.querySelector(`${selector}.app .header`);
  document.addEventListener("scroll", () => {
    if (header.classList.contains("header_blur") && window.scrollY > 0) return;
    if (window.scrollY > 0) header.classList.add("header_blur");
    else header.classList.remove("header_blur");
  });
}

export function headerHide() {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;
  document.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY !== 0) {
      header.classList.add("header_hide");
      lastScrollY = window.scrollY;
    } else {
      header.classList.remove("header_hide");
      lastScrollY = window.scrollY;
    }
  });
}

export function openPopup(popupName) {
  document.querySelectorAll(`[data-popup-btn`).forEach((openBtn) => {
    openBtn.addEventListener("click", () => {
      const popupName = openBtn.dataset.popupBtn;
      const popup = document.querySelector(`[data-popup="${popupName}"]`);
      const overlay = popup.closest(".overlay");

      popup.classList.add("popup_active");
      overlay.classList.add("overlay_active");
      document.body.style.overflow = "hidden";
    });
  });
}

export function closePopup() {
  document.addEventListener("click", (e) => {
    const overlay = e.target.closest(".overlay_active");
    const popup = e.target.closest(".popup_active");
    const closeBtn = e.target.closest("[data-popup-close]");

    if (!(closeBtn || (overlay && !popup))) return;

    const activePopup = overlay.querySelector(".popup_active");

    overlay.classList.remove("overlay_active");
    activePopup.classList.remove("popup_active");
    document.body.style.overflow = "auto";

    overlay.addEventListener('transitionend', function handler() {
      resetPoups(activePopup)
      overlay.removeEventListener('transitionend', handler);
    });
  });
}

export function changeStepsQuizPopup() {
  const quizPopup = document.querySelector(".popup-quiz");


  const quizBtnBackCol = quizPopup.querySelectorAll("[data-quiz-step-back]");
  const quizBtnNextCol = quizPopup.querySelectorAll("[data-quiz-step-next]");
  const quizBtnSubmit = quizPopup.querySelector("[data-quiz-btn-submit]");

  const quizBtnReset = quizPopup.querySelector("[data-quiz-btn-reset]");

  const goTo = (e, increment) => {
    e.preventDefault();

    let currentStep = quizPopup.querySelector(".step_active");
    let currentStepNum = currentStep.dataset.quizStep;

    currentStep.classList.remove("step_active");
    if (increment) currentStepNum++;
    else currentStepNum--;
    currentStep = quizPopup.querySelector(
      `[data-quiz-step="${currentStepNum}"`
      );
    currentStep.classList.add("step_active");
  };

  quizBtnBackCol.forEach((quizBtnBack) => {
    quizBtnBack.addEventListener("click", (e) => goTo(e, false));
  });
  quizBtnNextCol.forEach((quizBtnNext) => {
    quizBtnNext.addEventListener("click", (e) => goTo(e, true));
  });

  quizBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const currentStep = quizPopup.querySelector(".step_active");
    currentStep.classList.remove("step_active");

    const result = quizPopup.querySelector("[data-quiz-result]");
    result.classList.add("popup-quiz__result_active");
  });

  // Previous Close
  quizBtnReset.addEventListener("click", () => {
    resetPoups(quizPopup);
  });
}

function resetPoups(popup) {
  popup.querySelectorAll("form").forEach((form) => {
    form.reset();
  });

  if (!popup.classList.contains("popup-quiz")) return;

  const quizResult = popup.querySelector(".popup-quiz__result");
  let currentStep = popup.querySelector(".step_active");

  if(quizResult.classList.contains("popup-quiz__result_active")) {
    quizResult.classList.remove("popup-quiz__result_active");
    currentStep = popup.querySelector('[data-quiz-step="1"]');
    currentStep.classList.add("step_active");
    return
  }

  currentStep.classList.remove("step_active");
  currentStep = popup.querySelector('[data-quiz-step="1"]');
  currentStep.classList.add("step_active");
}

export function initMiniPartnersSwiper() {
  return new Swiper(".mini-partners__slider", {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 110,
    speed: 5000,
    simulateTouch: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
  });
}

export function initAccordeon() {
  const accCol = document.querySelectorAll(".acc");
  accCol.forEach((acc) => {
    const accItemCol = acc.querySelectorAll(".acc__item");

    {
      const firstAccItem = accItemCol[0];
      firstAccItem.classList.add("acc__item_active");
      const firstAccPanel = firstAccItem.querySelector(".acc__panel");
      firstAccPanel.style.maxHeight = firstAccPanel.scrollHeight + 32 + "px";
    }

    accItemCol.forEach((accItem) => {
      const accBtn = accItem.querySelector(".acc__btn");
      const accPanel = accItem.querySelector(".acc__panel");

      accBtn.addEventListener("click", () => {
        accItemCol.forEach((otherAccItem) => {
          const otherActiveAccItem =
            otherAccItem.classList.contains("acc__item_active");
          if (accItem === otherAccItem || !otherActiveAccItem) return;

          const otherAccPanel = otherAccItem.querySelector(".acc__panel");
          otherAccItem.classList.remove("acc__item_active");
          otherAccPanel.style.maxHeight = 0;
        });

        if (!accItem.classList.contains("acc__item_active")) {
          accItem.classList.add("acc__item_active");
          accPanel.style.maxHeight = accPanel.scrollHeight + 32 + "px";
        } else {
          accItem.classList.remove("acc__item_active");
          accPanel.style.maxHeight = 0;
        }
      });
    });
  });
}

export function associateAccordeonWithImageSrc() {
  const acc = document.querySelector(".about-accordeon__acc");
  const image = document.querySelector(".about-accordeon__img");
  const picture = image.closest("picture");
  const accItemCol = acc.querySelectorAll(".acc__item");
  {
    const firstAccItem = accItemCol[0];
    const imagePath = firstAccItem.dataset.image;
    image.setAttribute("src", imagePath);
    if (picture) {
      picture.querySelectorAll("source").forEach((source) => {
        source.setAttribute("srcset", imagePath);
      });
    }
  }
  accItemCol.forEach((accItem) => {
    accItem.addEventListener("click", () => {
      image.src = accItem.dataset.image;
      if (picture) {
        picture.querySelectorAll("source").forEach((source) => {
          source.setAttribute("srcset", accItem.dataset.image);
        });
      }
    });
  });
}

export function initLangSelects() {
  document.querySelectorAll(".select-lang").forEach((choicesEl) => {
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
  });
}

export function setBenefitСolumns() {
  document.querySelectorAll(".benefits__list").forEach((list) => {
    const childrenCount = list.children.length;
    if (childrenCount <= 5) list.classList.add("benefits__list_few");
    else if (childrenCount >= 8) list.classList.add("benefits__list_many");
  });
}