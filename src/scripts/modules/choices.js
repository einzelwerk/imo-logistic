import Choices from 'choices.js';
import classNames from '../utils/classNames';

import 'choices.js/public/assets/styles/choices.min.css';

export function initLangChoices() {
  const classBlock = classNames.choices.block;

  document.querySelectorAll(`.${classBlock}`).forEach((choicesEl) => {
    const select = new Choices(choicesEl, {
      searchEnabled: false,
      position: 'bottom',
      itemSelectText: '',
      shouldSort: false,
      placeholder: true,
      classNames: {
        containerOuter: `choices ${choicesEl.className}`,
      },
    });

    const dropdown = select.dropdown.element;
    const containerOuter = select.containerOuter.element;
    dropdown.classList.add('dropdown--up');

    containerOuter.addEventListener('click', () => {
      const rect = containerOuter.getBoundingClientRect();

      if (rect.bottom + dropdown.scrollHeight > window.innerHeight) {
        dropdown.classList.remove('dropdown--down');
        dropdown.classList.add('dropdown--up');
      } else {
        dropdown.classList.remove('dropdown--up');
        dropdown.classList.add('dropdown--down');
      }
    });

    return select;
  });
}
