'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
$tabContainer?.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.tab')) {
    $tab.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    });
    const $selectedView = $eventTarget.getAttribute('data-view');
    $view.forEach(($view) => {
      if ($view.getAttribute('data-view') === $selectedView) {
        $view.classList.remove('hidden');
      } else {
        $view.classList.add('hidden');
      }
    });
  }
});
