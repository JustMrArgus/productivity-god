const addTaskButton = document.querySelector(".add-task-form__button");
const newTaskNameInput = document.querySelector(".add-task-form__input");
const taskList = document.querySelector(".task-list-container__list");

const addNewTask = (e) => {
  e.preventDefault();

  const taskName = newTaskNameInput.value;
  const newTask = document.createElement("li");

  newTask.textContent = taskName;
  taskList.appendChild(newTask);

  newTaskNameInput.value = "";
};

addTaskButton.addEventListener("click", addNewTask);
