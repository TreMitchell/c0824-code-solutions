const $tabContainer = document.querySelector(
  '.tab-container'
) as HTMLDivElement;
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('.tabContainer query failed!');
if (!$tab) throw new Error('.tab query failed!');
if (!$view) throw new Error('.view query failed!');

$tabContainer.addEventListener('click', (event: MouseEvent) => {
  const $eventTarget = event.target as HTMLDivElement;
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
