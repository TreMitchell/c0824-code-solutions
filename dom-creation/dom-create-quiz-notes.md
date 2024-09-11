# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  - No, it creates a DOM element into the memory.
- How do you add an element as a child to another element?
  - You add an element as a child to another element by using the append.child() method.
- What do you pass as the arguments to the `element.setAttribute()` method?
  - You would pass a string of the attribute and a string of the value as the arguments to the `element.setAttribute()` method.
- What steps do you need to take in order to insert a new element into the page?
  - (1) Creating the new element itself using the document.createElement() method; (2) Setting the element's attributes or content using the setAttribute() / textContent method; (3) Selecting a parent element by using either document.getElementById() or document.querySelector() methods; (4) Inserting the element into the DOM using the append.child() method.
- What is the `textContent` property of an element object for?
  - The `textContent` property of an element object is for setting the content of text from an element.
- Name two ways to set the `class` attribute of a DOM element.
  - Two ways to set the `class` attribute of a DOM element className or classList. Another way a class attribute could be set up is using setAttribute().
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  - Two advantages of defining a function to do create something is that uts easy to maintain & its reusable.

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
