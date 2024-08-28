/* exported getFullNameOfPerson */
interface PersonsInfo {
  firstName: string;
  lastName: string;
}
function getFullNameOfPerson(person: PersonsInfo): string {
  return `${person.firstName} ${person.lastName}`;
}
