# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  - `event.target` is the dom element that triggers an event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  - Event delegation that an event buubbles up from ts ancestor elements.
- What DOM element property tells you what type of element it is?
  - tagName property.
- What does the `element.closest()` method take as its argument and what does it return?
  - it takes a selector as an argument. it returns the first closest ancestor element. If it doesn't, then it returns null.
- How can you remove an element from the DOM?
  - the .remove() method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  - If you wanted to insert new clickable DOM elements into the page using JavaScript, you could avoid adding an event listener to every new element individually by event delegation. You would instead insert the clickable DOM inside of the parent.

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
