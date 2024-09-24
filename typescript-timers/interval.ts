let count = 4;
const countdownInterval = setInterval(() => {
  const $heading = document.querySelector('.countdown-display');
  if ($heading) {
    if (count > 0) {
      $heading.textContent = count.toString();
      count--;
    } else {
      $heading.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(countdownInterval);
    }
  }
}, 1000);
