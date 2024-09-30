# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  - Logical AND is an operator for a set of boolean operands that return true if all are tre=ue and false if one or both aren't truthy. Logical OR would return true if one of them are true and false if neither are true. They can be used outside of if statements by combining the variable and the conditional together to get the boolean.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  - The behavior of logical operators that stop evaluating expressions as soon as the result is determined. For logical AND, the first operator is false which makes the overall expression false. For logical OR, the first operator is true which makes the overall expression true.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  - An operator that handles cases where variables might be null or undefined. It differs from Logical OR because this returns any falsy value and not just null or undefined.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  - An operator that returns one of two expressions based on a condition. This differs from if/else because the operator returns a value while if/else is a statement that includes code.
- What is the `?.` (optional chaining) operator? When would you use it?
  - An operator that safely accesses properties on objects that might not exist. You would use this when you aren't sure if a property may be null or undefined.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  - Spread syntax allows elements from arrays or properties from objects to be expanded and copied into new arrays or objects. You can use spread syntax with objects by spreading copies to one object to another. With arrays, the spread syntax can be used to copy or merge arrays.
- What data types can be spread into an array? Into an object?
  - All iterable objects can be spread into arrays. Only plain objects can be spread into an object.
- How does spread syntax differ from rest syntax?
  - Spread syntax expands or copies the contents of the arrays or objects while rest syntac collects the elements or properties into a single variable.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
