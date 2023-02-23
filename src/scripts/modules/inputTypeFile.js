import classNames from '../utils/classNames';

export default function onChangeInputTypeFile() {
  const classInputFile = classNames.input.file;
  const classInputFileActive = classNames.input.fileActive;

  document.querySelectorAll(`${classInputFile} input`).forEach((input) => {
    input.addEventListener('change', () => {
      const attach = input.closest(`.${classInputFile}`);
      attach.classList.add(classInputFileActive);
      if (input.files[0]) {
        attach.querySelector('span').innerHTML = input.files[0].name;
      }
    });
  });
}
