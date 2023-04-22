import tippy from 'tippy.js';
import classNames from '../utils/classNames';

import 'tippy.js/dist/tippy.css';

export function initTooltip() {
  const tooltipClass = classNames.tooltip.block;
  const tooltipBtnClass = classNames.tooltip.btn;
  const tooltipContentClass = classNames.tooltip.content;

  document.querySelectorAll(`.${tooltipClass}`).forEach((tooltip) => {
    const tooltipBtn = tooltip.querySelector(`.${tooltipBtnClass}`);
    const tooltipContent = tooltip.querySelector(`.${tooltipContentClass}`);
    tooltipContent.remove();

    tippy(tooltipBtn, {
      content: tooltipContent.innerHTML,
      allowHTML: true,
      theme: 'custom',
    });
  });
}
