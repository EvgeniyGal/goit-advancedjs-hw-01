import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

(function restoreDataFromLS() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    [...feedbackForm.elements].forEach(el => {
      el.value = savedFormData[el.name] ?? '';
    });
  }
})();

feedbackForm.addEventListener('submit', handlerFormSubmit);

feedbackForm.addEventListener('input', throttle(handlerInputFormData, 500));

function handlerInputFormData({ target }) {
  const currentFormData =
    JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
  currentFormData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(currentFormData));
}

function handlerFormSubmit(ev) {
  ev.preventDefault();
  const curFormData = {};
  [...ev.currentTarget.elements].forEach(el => {
    if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
      curFormData[el.name] = el.value;
    }
  });
  ev.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(curFormData);
}
