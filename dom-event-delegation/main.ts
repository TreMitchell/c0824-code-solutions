const taskList = document.querySelector('.task-list');

if (!taskList) {
  throw new Error('.task-list element not found');
}

taskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget:', eventTarget);
  console.log('tagName:', eventTarget.tagName);
  
  if (eventTarget.tagName === 'BUTTON') {
    const listItem = eventTarget.closest('.task-list-item') as HTMLElement;

    if (listItem) {
      console.log('.task-list-item:', listItem);

      listItem.remove();
    }
  }
});
