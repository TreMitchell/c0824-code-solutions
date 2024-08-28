/* exported getFirstInitialOfPerson */
interface PersonInitial {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: PersonInitial): string {
  return `${person.firstName[0]}`;
}
