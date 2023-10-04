import Task from "./lib/Task.js";

const tasks = [];

const form = document.querySelector("form");
const taskListElement = document.querySelector("#task-list");

const renderTasks = (taskListElement) => {
  taskListElement.innerHTML = "";
  tasks
    .map((task) => task.render())
    .forEach((e) => taskListElement.appendChild(e));
};
export const renderDragon = () => renderTasks(taskListElement);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInput = form.querySelector("textarea");

  tasks.push(new Task({ label: taskInput.value }));
  taskInput.value = "";
  renderTasks(taskListElement);
});
