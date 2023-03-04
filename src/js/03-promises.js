import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnCreate = document.querySelector('button[type="submit"]');


function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve ({ position, delay });
      } else {
        reject ({ position, delay });
      }
    }, delay);
  });
  return promise;
  
}

btnCreate.addEventListener('click', event => {
  event.preventDefault();
  const delay = Number(firstDelay.value);
  const step = Number(delayStep.value);
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(1 + i, delay + i * step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
