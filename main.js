'use strict'

document.addEventListener('DOMContentLoaded', () => {
  function getValidNumber() {
    while (true) {
      let input = prompt('Please enter a number:', '');
      input = +input;

      if (!isNaN(input) && Number.isInteger(input)) {
        return input;
      }

      alert('Please enter a valid integer');
    }
  }

  const number = getValidNumber();
  const result = [];

  for (let i = 0; i <= number; i++) {
    if (i % 5 === 0 && i !== 0) {
      result.push(i);
    }
  }

  if (result.length > 0) {
    console.log(`Numbers divisible by 5 from 0 to ${number}`, result);
  } else {
    console.log('Sorry, no numbers');
  }
});