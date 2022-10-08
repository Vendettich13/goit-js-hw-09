import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  input: document.querySelectorAll('input'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    let result = { position, delay };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', startCreate);

function startCreate(e) {
  e.preventDefault();
  let delayValue = Number(refs.input[0].value);
  let stepValue = Number(refs.input[1].value);
  let amountValue = Number(refs.input[2].value);

  for (let i = 1; i <= amountValue; i += 1) {
    let position = i;
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
}
