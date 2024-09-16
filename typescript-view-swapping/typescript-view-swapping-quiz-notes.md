# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  - The `event.target` is a read only property of the event object passed as an argument.
- What is the effect of setting an element to `display: none`?
  - The effect of setting an element to `display: none` is that whatever class is defined won't be displayed.
- What does the `element.matches()` method take as an argument and what does it return?
  - The `element.matches()` methods takes any element as its argument and returns a boolean value.
- How can you retrieve the value of an element's attribute?
  - You can retrieve the value of an element's attribute with the getAttribute() method.
- At what steps of the solution would it be helpful to log things to the console?
  - After querying the dom to make sure they are being correctly used, in event listeners, before showing/hiding views and during conditional checks.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  - You would have to add event listeners to each individual tab and whenever a new one gets introduced.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  - You would manually show or hide each view using separate lines of code for each view. This would also require individual checks for each view, which is less efficient than just using a loop.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
