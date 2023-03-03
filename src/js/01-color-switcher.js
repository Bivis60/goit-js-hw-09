const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let isActive = false;
stop.setAttribute('disabled', true);
//коментар
start.addEventListener('click', bodyStyle);
stop.addEventListener('click', btnStop);

function bodyStyle() { 
    if (isActive) {
        return;
    }
    start.setAttribute('disabled', true);
    stop.removeAttribute('disabled');
    isActive = true;
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
};

function btnStop() {
    clearInterval(timerId);
    isActive = false;
    stop.setAttribute('disabled', true);
    start.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}