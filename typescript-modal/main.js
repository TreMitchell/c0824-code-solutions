'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal) throw new Error('.open-modal Query failed!');
if (!$dismissModal) throw new Error('.dismiss-modal Query failed!');
if (!$dialog) throw new Error('dialog Query failed!');
$openModal.addEventListener('click', () => {
  $dialog.showModal();
});
$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
