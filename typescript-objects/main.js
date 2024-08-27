'use strict';
/* An object literal is being assigned to the variable student of type StudentProps.
The strings Tré & Mitchell are being assigned to the properties firstName &
lastName.
The number 21 is being assigned to the property age. */
const student = {
  firstName: 'Tré',
  lastName: 'Mitchell',
  age: 21,
};
/* The result of the expression student.firstName concatenated with a string, being
concatenated with student.lastName is assigned to the variable fullName.
The log method of the console object is being called with two arguments, a string
& the variable fullName. */
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
/* The boolean false is being assigned to the property livesInIrvine which is
being called from the variable student.
The log method of the console object is being called with two arguments, a string
& the property livesInIrvine which is being called from the variable student. */
student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
/* The string student is being assigned to the property previousOccupation which is
being called from the variable student.
The log method of the console object is being called with two arguments, a string
& the property previousOccupation which is being called from the student object. */
student.previousOccupation = 'student';
console.log('value of student.previousOccupation:', student.previousOccupation);
/* The log method of the console object is being called with two arguments, a string
& the variable student.
The log method of the console object is being called with two arguments, a string
& the typeof student. */
console.log('value of student:', student);
console.log('typeof student:', typeof student);
/* An object literal is being assigned to the variable favCar of type Vehicle.
The strings Aston Martin & DB9 are being assigned to the properties make &
model.
The number 2014 is being assigned to the property year. */
const favCar = {
  make: 'Aston Martin',
  model: 'DB9',
  year: 2014,
};
/*  */
favCar['color'] = 'gray';
favCar['isConvertible'] = false;
/* The log method of the console object is being called with two arguments, a string
& the property color which is being called from the variable favColor.
The log method of the console object is being called with two arguments, a string
& the property isConvertible which is being called from the variable favColor.
The log method of the console object is being called with two arguments, a string
& the variable favCar.
The log method of the console object is being called with two arguments, a string
& the typeof favCar. */
console.log('value of favCar[color]:', favCar['color']);
console.log('value of favCar[isConvertible]:', favCar['isConvertible']);
console.log('value of favCar:', favCar);
console.log('type of favCar:', typeof favCar);
/* An object literal is being assigned to the variable pet of type Pet.
The strings Blue & PitBull are being assigned to the properties name &
kind. */
const pet = {
  name: 'Blue',
  kind: 'Pitbull',
};
/* The name & kind properties of the pet object is being deleted. */
delete pet.name;
delete pet.kind;
/* The log method of the console object is being called with two arguments, a string
& the variable pet.
The log method of the console object is being called with two arguments, a string
& the typeof pet. */
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
