'use strict';
const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};
const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
const { title, author, libraryId } = book1;
console.log(
  `The title of this book is ${title}, the author is ${author}, and the libraryId is ${libraryId}`
);
const { title: subject, author: creator, libraryId: id } = book2;
console.log(
  `The title of this book is ${subject}, the author is ${creator}, and the libraryId is ${id}`
);
const [book3, book4, book5] = library;
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);
const [, , , book6] = library;
console.log('book6:', book6);