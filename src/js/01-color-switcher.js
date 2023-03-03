const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

// let isActive = false;
let timerId = null;

stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', bodyStyle);
stopBtn.addEventListener('click', btnStop);

function bodyStyle() { 
    if (timerId) {
        return;
    }
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
    // isActive = true;
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
};

function btnStop() {
    clearInterval(timerId);
    // isActive = false;
    timerId = undefined;
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}