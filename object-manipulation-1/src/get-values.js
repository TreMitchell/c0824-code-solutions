'use strict';
/* exported getValues */
function getValues(object) {
  const values = [];
  for (const key in object) {
    if (object[key]) {
      values.push(object[key]);
    }
  }
  return values;
}
/* function getValues(object: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      values.push(object[key]);
    }
  }
  return values;
} */
