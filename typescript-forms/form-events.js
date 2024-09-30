'use strict';
function formControlEvents() {
  function handleFocus(event) {
    console.log('Focus event was fired!');
    const eventTarget = event.target;
    console.log(eventTarget.name);
  }
  function handleBlur(event) {
    console.log('blur event was fired!');
    const eventTarget = event.target;
    console.log(eventTarget.name);
  }
  function handleInput(event) {
    const eventTarget = event.target;
    console.log(eventTarget.name, eventTarget.value);
  }
  const $input1 = document.querySelector('input');
  const $input2 = document.querySelector('input');
  const $textarea = document.querySelector('textarea');
  if (!$input1) throw new Error('$input1 query failed!');
  if (!$input2) throw new Error('$input2 query failed!');
  if (!$textarea) throw new Error('$textarea query failed!');
  $input1.addEventListener('focus', handleFocus);
  $input1.addEventListener('blur', handleBlur);
  $input1.addEventListener('input', handleInput);
  $input2.addEventListener('focus', handleFocus);
  $input2.addEventListener('blur', handleBlur);
  $input2.addEventListener('input', handleInput);
  $textarea.addEventListener('focus', handleFocus);
  $textarea.addEventListener('blur', handleBlur);
  $textarea.addEventListener('input', handleInput);
}
document.addEventListener('DOMContentLoaded', formControlEvents);
