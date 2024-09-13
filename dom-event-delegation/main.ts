// const taskList = document.querySelector('.task-list');

// if (!taskList) {
//   throw new Error('.task-list element not found');
// }

// taskList.addEventListener('click', (event: Event) => {
//   const eventTarget = event.target as HTMLElement;
//   console.log('eventTarget:', eventTarget);
//   console.log('tagName:', eventTarget.tagName);

//   // You can add additional logic here to handle different elements like <span>, <li>, <button>.
// });

const taskList = document.querySelector('.task-list');

if (!taskList) {
  throw new Error('.task-list element not found');
}

taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget:', eventTarget);
  console.log('tagName:', eventTarget.tagName);

  // Check if the clicked element is a button
  if (eventTarget.tagName === 'BUTTON') {
    // Get the closest .task-list-item ancestor
    const listItem = eventTarget.closest('.task-list-item') as HTMLElement;

    if (listItem) {
      console.log('.task-list-item:', listItem);

      listItem.remove();
    }
  }
});
