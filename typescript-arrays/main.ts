/* An array of strings is being assigned to the variable colors, of type string array.
The log method of the console object is being called with two arguments, a string and
the variable colors at 0, 1, & 2. */
const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

/* A template literal interpolating the numbers 0, 1, & 2 at the variable colors is
being assigned to the variable americaColors.
The log method of the console object is being called with one argument, the variable
americaColors. */
const americaColors: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(americaColors);

/* The string green is being assigned to colors at 2.
A template literal interpolating the numbers 0, 1, & 2 at the variable colors is
being assigned to the variable mexicoColors of type string. */
colors[2] = 'green';
const mexicoColors: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(mexicoColors);

/* The log method of the console object is being called with two arguments, a string
& the variable colors.
The log method of the console object is being called with two arguments, a string &
the variable typeof colors. */
console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

/* An array of strings is being assigned to the variable colors, of type string array.
The length property of the students object is being assigned to the variable
numberOfStudents of type number.
The log method of the console object is being called with one argument, a template
literal interpolating the variable numberOfStudents. */
const students: string[] = ['Jon', 'Sara', 'George', 'Derek'];
const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);

/*
The variable lastIndex is being assigned to the variable lastStudent of type string.
The variable lastStudent is being assigned to the variable lastIndex of type string.
*/
const lastIndex: string = students[numberOfStudents - 1];
const lastStudent: string = lastIndex;

/* The log method of the console object is being called with one argument, a template
literal interpolating the variable lastStudent.
The log method of the console object is being called with two arguments, a string &
the variable students.
The log method of the console object is being called with two arguments, a string &
the typeof students. */
console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students:', students);
console.log('typeof students:', typeof students);
