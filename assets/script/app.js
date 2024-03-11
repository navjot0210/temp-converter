'use strict';

const number = document.querySelector('.input');
const toFahrenheit = document.querySelector('#fahrenheit');
const toCelsius = document.querySelector('#celsius');
const calculate = document.querySelector('.convert');
const output = document.querySelector('.output p');

// functions for converting temperature
function isNumber(str) {
  if (str.length > 0 && !isNaN(str)) return true;
  return false;
}

function convertTemp(temp) {
  if (isNumber(temp)) {
    if (toFahrenheit.checked) {
      let result = parseFloat(temp) * 1.8 + 32;
      output.innerText = `${temp}°C = ${result.toFixed(2)}°F`;
      number.value = '';
    } else if (toCelsius.checked) {
      let result = parseFloat(temp - 32) * 5 / 9;
      output.innerText = `${temp}°F = ${result.toFixed(2)}°C`;
      number.value = '';
    }
  } else {
    output.innerText = `Please, enter a valid temperature`;
  }
};

calculate.addEventListener('click', function() {
  let output =number.value.trim();
  convertTemp(output);
});

// Changing the theme
document.addEventListener('DOMContentLoaded', function() {
  const modeChanger = document.getElementById('mode');
  const changeText = document.getElementById('change-text');
  const inputColor = document.getElementById('input');

  modeChanger.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
          changeText.style.color = '#fff';
          this.innerText = 'Light mode';
          this.style.color = '#181720';
          this.style.background = '#fff';
          inputColor.style.background = '#181720';
          inputColor.style.color = '#fff';
      } else {
          changeText.style.color = 'inherit';
          this.innerText = 'Dark mode';
          this.style.color = '#fff';
          this.style.background = '#181720';
          inputColor.style.background = '#fff';
          inputColor.style.color = '#181720';
      }
  });
});