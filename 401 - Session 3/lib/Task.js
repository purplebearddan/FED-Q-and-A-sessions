import { renderDragon } from "../app.js";

const objVersion = {
  name: "string",
  completed: false,
  timestamp: new Date(),
};

export default class Task {
  constructor({ label, completed = false, timestamp = new Date() }) {
    this.label = label;
    this.completed = completed;
    this.timestamp = timestamp;
  }

  // CRUD
  // Update
  updateTask(newLabel) {
    this.label = newLabel;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  render() {
    const taskWrapper = document.createElement("article");
    taskWrapper.classList.add("task");

    const taskInfoWrapper = document.createElement("div");
    taskInfoWrapper.classList.add("task-info");

    const taskLabel = document.createElement("header");
    taskLabel.classList.add("task-label");

    if (this.completed) {
      taskLabel.classList.add("complete");
    }

    taskLabel.textContent = this.label;

    const taskTimestamp = document.createElement("time");
    taskTimestamp.classList.add("task-timestamp");
    taskTimestamp.textContent = this.timestamp.toISOString();

    taskInfoWrapper.appendChild(taskLabel);
    taskInfoWrapper.appendChild(taskTimestamp);
    taskWrapper.appendChild(taskInfoWrapper);

    const taskOptionsWrapper = document.createElement("div");
    taskOptionsWrapper.classList.add("task-options");

    // edit button
    const taskOptionEdit = document.createElement("button");
    taskOptionEdit.classList.add("task-option-button", "update-option");
    taskOptionEdit.textContent = "edit";
    // complete button
    const taskOptionComplete = document.createElement("button");
    taskOptionComplete.classList.add("task-option-button", "complete-option");
    taskOptionComplete.textContent = "complete";
    taskOptionComplete.addEventListener("click", () => {
      this.toggleCompleted();
      console.log("toggled complete");
      console.log(this.completed);
      renderDragon();
    });

    // delete button
    const taskOptionDelete = document.createElement("button");
    taskOptionDelete.classList.add("task-option-button", "delete-option");
    taskOptionDelete.textContent = "delete";

    taskOptionsWrapper.appendChild(taskOptionEdit);
    taskOptionsWrapper.appendChild(taskOptionComplete);
    taskOptionsWrapper.appendChild(taskOptionDelete);
    taskWrapper.appendChild(taskOptionsWrapper);

    return taskWrapper;
  }
}
