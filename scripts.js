const addTaskButton = document.querySelector(".add-task-form__button");
const newTaskNameInput = document.querySelector(".add-task-form__input");
const undoneTaskList = document.querySelector(
  ".task-list-container__list--undone"
);

const addNewTask = (e) => {
  e.preventDefault();

  const taskName = newTaskNameInput.value;
  const newTask = document.createElement("li");

  newTask.textContent = taskName;
  newTask.classList.add("task-list-container__item");
  undoneTaskList.appendChild(newTask);

  newTaskNameInput.value = "";
};

addTaskButton.addEventListener("click", addNewTask);
