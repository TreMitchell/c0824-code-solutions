/* exported getDescriptionOfPerson */
interface PersonDescription {
  name: string;
  occupation: string;
  birthPlace: string;
}
function getDescriptionOfPerson(person: PersonDescription): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
