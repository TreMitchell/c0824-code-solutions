# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  - Event Queue Model is where callback functions associated with asynchronous operations are placed into a queue when the operation completes. It ensures that the code execution is non-blocking and that operations that take a longer time don't stall the execution of other scripts
- What are the three states a Promise can be in?
  - The three states a Promise can be in are pending, fulfilled, and rejected.
- How do you handle the fulfillment of a Promise?
  - The fulfillment of a Promise by attaching a .then() method to the Promise which would take a callback function that will be called when the Promise is resolved.
- How do you handle the rejection of a Promise?
  - The rejection of a Promise is managed by attaching a .catch() method which is used to define a callback that will execute if the Promise is rejected.

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
