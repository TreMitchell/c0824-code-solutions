const $spans = document.querySelectorAll('span');
const $feedback = document.getElementById('feedback') as HTMLElement;
let currentCharIndex = 0;

$spans[currentCharIndex].classList.add('active');

document.addEventListener('keydown', (event) => {
  const currentChar = $spans[currentCharIndex].textContent;

  if (event.key === currentChar) {
    $spans[currentCharIndex].classList.remove('active');
    $spans[currentCharIndex].classList.add('correct');
    $feedback.textContent = '';
    currentCharIndex++;

    if (currentCharIndex < $spans.length) {
      $spans[currentCharIndex].classList.add('active');
    } else {
      $feedback.textContent = 'You finished the phrase!';
    }
  } else if (event.key.length === 1) {
    // Ignore special keys like Shift, Control
    $feedback.textContent = `Oops! Try again.`;
    $spans[currentCharIndex].classList.add('incorrect');
    setTimeout(() => {
      $spans[currentCharIndex].classList.remove('incorrect');
    }, 500);
  }
});
