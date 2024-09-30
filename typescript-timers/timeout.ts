setTimeout(() => {
  const $heading = document.querySelector('.message');
  if ($heading) {
    $heading.textContent = 'hello there';
  }
}, 2000);
