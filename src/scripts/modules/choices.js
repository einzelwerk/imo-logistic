import Choices from 'choices.js';
import classNames from '../utils/classNames';

import 'choices.js/public/assets/styles/choices.min.css';

export function initLangChoices() {
  const classBlock = classNames.choices.lang;

  return Array.from(document.querySelectorAll(`.${classBlock}`)).map(
    (choicesEl) => {
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
    }
  );
}

export function initTariffChoices() {
  const classBlock = classNames.choices.tariff;
  const classTab = classNames.tariff.tableTab;
  const classTabActive = classNames.tariff.tableTabActive;

  return Array.from(document.querySelectorAll(`.${classBlock}`)).map(
    (selectEl) => {
      const choices = new Choices(selectEl, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: '',
        shouldSort: false,
        placeholder: true,
        classNames: {
          containerOuter: `choices ${selectEl.className}`,
        },
      });
      
      // Функция переключения табов
      function switchTab(tabId) {
        const tabs = document.querySelectorAll(`.${classTab}`);
        tabs.forEach((tab) => {
          if (`column-${tabId}` === tab.dataset.tariffTableContent) {
            tab.classList.add(classTabActive);
            return;
          }
          tab.classList.remove(classTabActive);
        });
      }

      // Обработка события выбора элемента
      selectEl.addEventListener('choice', (event) => {
        switchTab(event.detail.choice.id);
      });

      // Установка активного таба по умолчанию
      switchTab(choices._currentState.items[0].id); // eslint-disable-line

      return choices;
    }
  );
}
