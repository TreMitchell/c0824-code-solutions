/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const names: string[] = [];
  for (const student of students) {
    names.push(student.name);
  }
  return names;
}
