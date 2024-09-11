'use strict';
let clickCount = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The .hot-button query failed');
if (!$clickCount) throw new Error('The .click-count query failed');
$hotButton.addEventListener('click', () => {
  let temperature;
  clickCount++;
  if (clickCount < 4) {
    temperature = 'cold';
  } else if (clickCount < 7) {
    temperature = 'cool';
  } else if (clickCount < 10) {
    temperature = 'tepid';
  } else if (clickCount < 13) {
    temperature = 'warm';
  } else if (clickCount < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  if (!$hotButton || !$clickCount) {
    throw new Error('$hotButton or $clickCount query failed.');
  }
  $hotButton.className = `hot-button ${temperature}`;
  $clickCount.textContent = `clicks ${clickCount}`;
});
