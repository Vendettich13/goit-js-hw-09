import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let date = new Date();
let selectedTime = '';
let ms = 0;

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button'),
  values: document.querySelectorAll('.value'),
};
refs.btn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] <= date) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else if (selectedDates[0] > date) {
      refs.btn.removeAttribute('disabled');
      selectedTime = dataTime.selectedDates[0].getTime();
    }
  },
};
let dataTime = flatpickr(refs.input, options);

refs.btn.addEventListener('click', makeTimer);

function makeTimer() {
  setInterval(() => {
    date = new Date();
    ms = selectedTime - date.getTime();
    if (ms < 0) return;
    convertMs(ms);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  refs.values[0].textContent = `${addLeadingZero(days)}`;
  refs.values[1].textContent = `${addLeadingZero(hours)}`;
  refs.values[2].textContent = `${addLeadingZero(minutes)}`;
  refs.values[3].textContent = `${addLeadingZero(seconds)}`;
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
