import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: "Y-m-d H:i",
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure("Please choose a date in the future");}
      else {
        startBtn.removeAttribute('disabled');
        startBtn.style.background = 'green';
        startBtn.style.color = 'white';
        }
  },
};

startBtn.addEventListener('click', start);
startBtn.setAttribute('disabled', true);
startBtn.style.background = 'lightblue';
timer.style.display = 'flex';
timer.style.gap = '15px';
input.style.background = 'yellow';

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};


function start() {
  startBtn.setAttribute('disabled', true);
  startBtn.style.color = 'black';
  startBtn.style.background = 'lightblue';
  timer.style.color = 'blue';
  setInterval(() => {
    let currentDate = new Date();
    const inputDate = new Date(input.value);
    let countdown = inputDate - currentDate;
    let { days, hours, minutes, seconds } = convertMs(countdown);
    if (countdown >= 0) {
      daysEl.textContent = addLeadingZero(days);
      hoursEl.textContent = addLeadingZero(hours);
      minutesEl.textContent = addLeadingZero(minutes);
      secondsEl.textContent = addLeadingZero(seconds);
    }
  }, 1000);
};