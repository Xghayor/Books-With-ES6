// eslint-disable-next-line
import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';

const currentTime = document.getElementById('date-display');

setInterval(() => {
  const now = DateTime.now();
  currentTime.innerHTML = now.toFormat('LLLL dd yyyy, hh:mm:ss a');
}, 500);
