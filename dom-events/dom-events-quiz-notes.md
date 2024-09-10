# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  - see results of the code.
- What is the purpose of events and event handling?
  - To become more dynamic.
- Are all possible parameters required to use a JavaScript method or function?
  - No, not all possible parameters are required to use a JavaScript method or function
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  - Add event method.
- What is a callback function?
  - A function passed into another function as an argument.
- What object is passed into an event listener callback when the event fires?
  - The event object.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  - A read only property of the event object passed as an argument. A trigger that cause an event to happen. You can check by console logging the event.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  - The first code is being passed as an argument. The second code is calling on handleClick to providing its return value and not waiting on the event to happen. This is provoking the event.

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
