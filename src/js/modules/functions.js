import Swiper, { Autoplay } from "swiper";
import Choices from "choices.js";

export function iniMiniPartnersSwiper() {
  return new Swiper(".mini-partners__slider", {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 110,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
  });
}

export function initAccordion() {
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

export function associateAccordionWithImageSrc() {
  const acc = document.querySelector(".about-accordeon__acc");
  const image = document.querySelector(".about-accordeon__img");
  const accItemCol = acc.querySelectorAll(".acc__item");
  {
    const firstAccItem = accItemCol[0];
    const imagePath = firstAccItem.dataset.image;
    image.setAttribute("src", imagePath);
  }
  accItemCol.forEach((accItem) => {
    accItem.addEventListener("click", () => {
      image.src = accItem.dataset.image;
    });
  });
}

export function initLangSelects() {
  document.querySelectorAll(".select-lang").forEach((choicesEl) => {
    const choice = new Choices(choicesEl, {
      searchEnabled: false,
      position: "bottom",
      itemSelectText: "",
      shouldSort: false,
      placeholder: true,
    });
  });
}
