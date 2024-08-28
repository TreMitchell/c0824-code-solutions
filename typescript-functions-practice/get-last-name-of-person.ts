/* exported getLastNameOfPerson */
interface PersonInfo {
  firstName?: string;
  lastName: string;
}
function getLastNameOfPerson(person: PersonInfo): string {
  return person.lastName;
}
