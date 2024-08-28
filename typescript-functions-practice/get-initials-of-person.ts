/* exported getInitialsOfPerson */
interface PersonInitials {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: PersonInitials): string {
  return `${person.firstName[0]}${person.lastName[0]}`;
}
