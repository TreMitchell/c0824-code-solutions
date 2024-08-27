/* A new interface Book is being declared.
The isbn, author & title properties will have the value of string. */
interface Book {
  isbn: string;
  author: string;
  title: string;
}
/* An object literal is being assigned to the variable bookshelf of type Book.
The strings listed below are being assigned to the properties isbn, author & title. */
const bookshelf: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
/* The log method of the console object is being called with two arguments, a string
& the variable bookshelf at 1 which is targeting the property author.
The log method of the console object is being called with two arguments, a string
& the variable bookshelf at 0 which is targeting the property isbn.
The log method of the console object is being called with two arguments, a string
& the variable bookshelf at 2 which is targeting the property title. */
console.log('Author of book 2:', bookshelf[1].author);
console.log('ISBN of book 1:', bookshelf[0].isbn);
console.log('Title of book 3:', bookshelf[2].title);
