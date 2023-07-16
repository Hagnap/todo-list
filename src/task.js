import * as Content from "./contentTabs";
import * as Project from "./project";

const Task = (name, description, dueDate, priority) => {
  dueDate = dueDate.toLocaleString().split(",")[0];
  dueDate = `Due: ${dueDate}`;
  priority = `Priority: ${priority}`;

  return { name, description, dueDate, priority };
};

const taskCollection = (() => {
  let tasks = [];
  let storedTasks = JSON.parse(window.localStorage.getItem("allTasks"));

  if (storedTasks) {
    console.log("Tasks are present");
    for (let index in storedTasks.tasks) {
      tasks.push(storedTasks.tasks[index]);
    }
  } else {
    console.log("No tasks are present");
  }

  return { tasks };
})();

function displayTask(task, project = null) {
  var contentGrid = document.querySelector("#content-grid");
  //console.log(contentGrid);
  var taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "task-div");
  var taskDivRight = document.createElement("div");
  taskDivRight.setAttribute("class", "task-div-right");
  var taskDivLeft = document.createElement("div");
  taskDivLeft.setAttribute("class", "task-div-left");

  for (var property in task) {
    var propertyElement = document.createElement("p");
    propertyElement.textContent = `${task[property]}`;
    propertyElement.setAttribute("class", `task-div-${property}`);

    if (property == "description") {
      taskDivRight.appendChild(propertyElement);
    } else {
      taskDivLeft.appendChild(propertyElement);
    }
  }

  var removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "remove-task-btn");
  removeBtn.setAttribute(
    "data-index",
    `${document.querySelectorAll(".remove-task-btn").length}`
  );
  removeBtn.textContent = "Remove Task";

  removeBtn.addEventListener("click", (e) => {
    if (!project) {
      taskCollection.tasks = taskCollection.tasks
        .slice(0, Number(removeBtn.getAttribute("data-index")))
        .concat(
          taskCollection.tasks.slice(
            Number(removeBtn.getAttribute("data-index")) + 1,
            taskCollection.tasks.length
          )
        );
      window.localStorage.setItem("allTasks", JSON.stringify(taskCollection));
      //window.localStorage.setItem("allProjects", JSON.stringify(Project.projectCollection));

      Content.displayAllTasks();
    } else {
      project.tasks = project.tasks
        .slice(0, Number(removeBtn.getAttribute("data-index")))
        .concat(
          project.tasks.slice(
            Number(removeBtn.getAttribute("data-index")) + 1,
            project.tasks.length
          )
        );
      window.localStorage.setItem(
        "allProjects",
        JSON.stringify(Project.projectCollection)
      );

      Content.displayCurrentProject(project);
    }
  });
  taskDivLeft.appendChild(removeBtn);

  var editBtn = document.createElement("button");
  editBtn.setAttribute("class", "edit-task-btn");
  editBtn.setAttribute(
    "data-index",
    `${document.querySelectorAll(".edit-task-btn").length}`
  );
  editBtn.textContent = "Edit Task";

  editBtn.addEventListener("click", (e) => {
    console.log("EDIT");

    if (!project) {
      Content.editTask(task);
    } else {
      Content.editTask(task, project);
    }
  });
  taskDivLeft.appendChild(editBtn);

  taskDiv.appendChild(taskDivLeft);
  taskDiv.appendChild(taskDivRight);

  contentGrid.appendChild(taskDiv);
}

function addTask(task) {
  taskCollection.tasks.push(task);
  console.table(taskCollection.tasks);

  window.localStorage.setItem("allTasks", JSON.stringify(taskCollection));

  //location.reload();
  Content.displayAllTasks();
}

export { Task, addTask, displayTask, taskCollection };
