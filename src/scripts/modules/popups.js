import classNames from "../utils/classNames";

function resetPoups(popup) {
  const classQuiz = classNames.popupQuiz.quiz;
  const classStepActive = classNames.popupQuiz.stepActive;
  const classResult = classNames.popupQuiz.result;
  const classResultActive = classNames.popupQuiz.resultActive;

  popup.querySelectorAll('form').forEach((form) => {
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

export function openPopup() {
  const classOverlay = classNames.popups.overlay;
  const classOverlayActive = classNames.popups.overlayActive;
  const classPopupActive = classNames.popups.popupActive;

  document.querySelectorAll('[data-popup-open]').forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      const popupName = openBtn.dataset.popupOpen;
      const popup = document.querySelector(`[data-popup="${popupName}"]`);
      const overlay = popup.closest(`.${classOverlay}`);

      popup.classList.add(classPopupActive);
      overlay.classList.add(classOverlayActive);
      document.body.style.overflow = 'hidden';
    });
  });
}

export function closePopup() {
  const classOverlayActive = classNames.popups.overlayActive;
  const classPopupActive = classNames.popups.popupActive;

  document.addEventListener('click', (e) => {
    const overlay = e.target.closest(`.${classOverlayActive}`);
    const popup = e.target.closest(`.${classPopupActive}`);
    const closeBtn = e.target.closest('[data-popup-close]');

    if (!(closeBtn || (overlay && !popup))) return;

    const activePopup = overlay.querySelector(`.${classPopupActive}`);

    overlay.classList.remove(classOverlayActive);
    activePopup.classList.remove(classPopupActive);
    document.body.style.overflow = 'auto';

    overlay.addEventListener('transitionend', function handler() {
      resetPoups(activePopup);
      overlay.removeEventListener('transitionend', handler);
    });
  });
}

export function changeStepsQuizPopup() {
  const classQuiz = classNames.popupQuiz.quiz;
  const classStepActive = classNames.popupQuiz.stepActive;
  const classResultActive = classNames.popupQuiz.resultActive;

  const quizPopup = document.querySelector(`.${classQuiz}`);

  const quizBtnBackCol = quizPopup.querySelectorAll('[data-quiz-step-back]');
  const quizBtnNextCol = quizPopup.querySelectorAll('[data-quiz-step-next]');
  const quizBtnSubmit = quizPopup.querySelector('[data-quiz-btn-submit]');

  const quizBtnReset = quizPopup.querySelector('[data-quiz-btn-reset]');

  const goTo = (e, increment) => {
    e.preventDefault();

    let currentStep = quizPopup.querySelector(`.${classStepActive}`);
    let currentStepNum = +currentStep.dataset.quizStep;
    
    currentStep.classList.remove(classStepActive);
    if (increment) currentStepNum += 1;
    else currentStepNum -= 1;
    currentStep = quizPopup.querySelector(
      `[data-quiz-step="${currentStepNum}"`
      );
    currentStep.classList.add(classStepActive);
  };

  quizBtnBackCol.forEach((quizBtnBack) => {
    quizBtnBack.addEventListener('click', (e) => goTo(e, false));
  });
  quizBtnNextCol.forEach((quizBtnNext) => {
    quizBtnNext.addEventListener('click', (e) => goTo(e, true));
  });

  quizBtnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const currentStep = quizPopup.querySelector(`.${classStepActive}`);
    currentStep.classList.remove(classStepActive);

    const result = quizPopup.querySelector('[data-quiz-result]');
    result.classList.add(classResultActive);
  });

  // Previous Close
  quizBtnReset.addEventListener('click', () => {
    resetPoups(quizPopup);
  });
}
