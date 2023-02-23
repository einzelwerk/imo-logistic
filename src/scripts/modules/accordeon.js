import { breakpointsMax } from "../utils/breakpoints";
import classNames from "../utils/classNames";

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
      firstAccPanel.style.maxHeight = `${firstAccPanel.scrollHeight + 32}px`;
    }

    accItemCol.forEach((accItem) => {
      const accBtn = accItem.querySelector(`.${classBtn}`);
      const accPanel = accItem.querySelector(`.${classPanel}`);

      accBtn.addEventListener('click', () => {
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
          accPanel.style.maxHeight = `${accPanel.scrollHeight + 32}px`;
        } else {
          accItem.classList.remove(classItemActive);
          accPanel.style.maxHeight = 0;
        }
      });
    });
  });
}
export function associateAccordeonWithImageSrc() {
  if (document.documentElement.clientWidth <= breakpointsMax.lg) return;

  const classSection = classNames.accImg.section;
  const classAcc = classNames.accImg.acc;
  const classImg = classNames.accImg.img;
  const classAccBtn = classNames.acc.btn;

  const accImgSection = document.querySelector(`.${classSection}`);
  if (!accImgSection) return;

  const acc = accImgSection.querySelector(`.${classAcc}`);
  const image = accImgSection.querySelector(`.${classImg}`);
  const picture = image.closest('picture');
  const accBtnCol = acc.querySelectorAll(`.${classAccBtn}`);

  {
    const firstAccItem = accBtnCol[0];
    const imagePath = firstAccItem.dataset.image;
    image.setAttribute('src', imagePath);
    if (picture) {
      picture.querySelectorAll('source').forEach((source) => {
        source.setAttribute('srcset', imagePath);
      });
    }
  }

  accBtnCol.forEach((accBtn) => {
    accBtn.addEventListener('click', () => {
      image.src = accBtn.dataset.image;
      if (picture) {
        picture.querySelectorAll('source').forEach((source) => {
          source.setAttribute('srcset', accBtn.dataset.image);
        });
      }
    });
  });
}