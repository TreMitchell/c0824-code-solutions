'use strict';
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}
const $click = document.querySelector('.click-button');
if (!$click) throw new Error('click query was not found');
$click?.addEventListener('click', handleClick);
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event target:', event.target);
}
const $hover = document.querySelector('.hover-button');
if (!$hover) throw new Error('hover button query was not found');
$hover?.addEventListener('hover', handleMouseover);
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('double click button query was not found');
$doubleClick?.addEventListener('double-click', handleDoubleClick);
