'use strict';
const books = [
  { isbn: '978-3-16-148410-0', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { isbn: '978-0-452-28423-4', title: '1984', author: 'George Orwell' },
  {
    isbn: '978-1-4028-9462-6',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
];
console.log('Array of books:', books);
console.log('Type of books:', typeof books);
const booksJSON = JSON.stringify(books);
console.log('JSON string of books:', booksJSON);
console.log('Type of booksJSON:', typeof booksJSON);
const studentJSON = '{"id": 12345, "name": "John Doe"}';
console.log('Student JSON string:', studentJSON);
console.log('Type of studentJSON:', typeof studentJSON);
const studentObject = JSON.parse(studentJSON);
console.log('Parsed student object:', studentObject);
console.log('Type of studentObject:', typeof studentObject);
