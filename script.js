function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value;

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn'; // Assign the class for styling
    deleteButton.onclick = function() {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}
