import {
  deleteDataUser,
  renderLinks,
  saveDataUser,
} from './forms/utils-form.js';

const URL = 'https://academy.directlinedev.com';

const SELECTOR_AGREEMENT_CHECKBOX = 'input[name=agreement]';
const SELECTOR_BUTTON_SUBMIT = 'button[type=submit]';

function activeButtonSubmit(e) {
  const target = e.target;
  const form = target.form;
  const buttonSubmit = form.querySelector(SELECTOR_BUTTON_SUBMIT);
  buttonSubmit.disabled = !target.checked;
}

function accessToSubmitButton(form) {
  const agreementCheckbox = form.querySelector(SELECTOR_AGREEMENT_CHECKBOX);
  if (agreementCheckbox) {
    const buttonSubmit = form.querySelector(SELECTOR_BUTTON_SUBMIT);
    buttonSubmit.disabled = true;
    agreementCheckbox.addEventListener('click', activeButtonSubmit);

    return {
      agreementCheckbox: {
        element: agreementCheckbox,
        event: 'click',
        callback: activeButtonSubmit
      }
    };
  }
}

function resolveFormSignIn(data) {
  saveDataUser(data);
  renderLinks();
}

function getNumbersFromString(str) {
  return str.match(/(\d+(\.\d+)?)/g)
            .map(v => +v);
}

export {
  accessToSubmitButton,
  resolveFormSignIn,
  getNumbersFromString,
  URL
};
