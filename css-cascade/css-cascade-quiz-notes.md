# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  - The four components of the Cascade are specificity, inheritance, importance, and the source order of styles.
- What does the term "source order" mean with respect to CSS?
  - Source order is the order in which your CSS styles appear in the stylesheet.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  - It is possible for the styles of an element to be applied to its children as well without an additional CSS rule by cascading, inheritance, and specificity.
- List the three selector types in order of increasing specificity.
  - In ascending order, we have class selectors having a higher priority over both universal and element selectors. Above class selectors however is ID selectors being above all three of those. The highest specificity w/o using !important is inline styles.
- Why is using `!important` considered bad practice?
  - Using `!important` considered bad practice because it disrupts the natural flow of CSS.

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
