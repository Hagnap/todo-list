import { Project } from "./project";
import * as task from "./task";

function saveFormData() {


    var newTask = task.Task(
        document.getElementById("task-name").value,
        document.getElementById("task-description").value,
        document.getElementById("task-duedate").value,
        document.getElementById("task-priority").value
    );

    task.addTask(newTask);
}

function resetDiv() {
    var content = document.querySelector("article");
    content.innerHTML = "";
    content.setAttribute("id", "");
    content = null;
}

function displayAddNewTask() {

    resetDiv();

    console.log("In `displayAddNewTask()`");

    var content = document.querySelector("article");

    var form = document.createElement("form");
    form.setAttribute("id", "task-form");

    var formLegend = document.createElement("legend");
    formLegend.textContent = "Add New Task";
    form.appendChild(formLegend);

    var taskNameDiv = document.createElement("div");
    var taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Name of Task\t";
    var taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "task-name");
    taskNameInput.required = true;
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameInput);
    form.appendChild(taskNameDiv);

    var taskDescriptionDiv = document.createElement("div");
    var taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.textContent = "Task Description\t";
    var taskDescriptionInput = document.createElement("input");
    taskDescriptionInput.setAttribute("id", "task-description");
    taskDescriptionInput.required = true;
    taskDescriptionDiv.appendChild(taskDescriptionLabel);
    taskDescriptionDiv.appendChild(taskDescriptionInput);
    form.appendChild(taskDescriptionDiv);

    var taskDueDateDiv = document.createElement("div");
    var taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.textContent = "Task Due Date Month\t";
    var taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "task-duedate");
    taskDueDateInput.required = true;
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateDiv.appendChild(taskDueDateLabel);
    taskDueDateDiv.appendChild(taskDueDateInput);
    form.appendChild(taskDueDateDiv);

    var taskPriorityDiv = document.createElement("div");
    var taskPriorityLabel = document.createElement("label");
    taskPriorityLabel.textContent = "Priority (1 - 3)\t";
    var taskPriorityInput = document.createElement("input");
    taskPriorityInput.setAttribute("id", "task-priority");
    taskPriorityInput.required = true;
    taskPriorityInput.setAttribute("type", "number");
    taskPriorityInput.setAttribute("min", "1");
    taskPriorityInput.setAttribute("max", "3");
    taskPriorityDiv.appendChild(taskPriorityLabel);
    taskPriorityDiv.appendChild(taskPriorityInput);
    form.appendChild(taskPriorityDiv);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    //submitBtn.addEventListener("submit", saveFormData);
    //submitBtn.onclick = saveFormData;
    form.appendChild(submitBtn);
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var newTask = task.Task(
            document.getElementById("task-name").value,
            document.getElementById("task-description").value,
            document.getElementById("task-duedate").value,
            document.getElementById("task-priority").value
        );

        task.addTask(newTask);
        form.reset();
    
    });

    content.appendChild(form);
}

function displayAddNewProject() {

    resetDiv();

    console.log("In `displayAddNewProject()`");

    var content = document.querySelector("article");

    var form = document.createElement("form");
    form.setAttribute("id", "project-form");

    var formLegend = document.createElement("legend");
    formLegend.textContent = "Add New Project";
    form.appendChild(formLegend);

    var projectNameDiv = document.createElement("div");
    var projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Name of Project\t";
    var projectNameInput = document.createElement("input");
    projectNameInput.required = true;
    projectNameDiv.appendChild(projectNameLabel);
    projectNameDiv.appendChild(projectNameInput);
    form.appendChild(projectNameDiv);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);

    content.appendChild(form);
}

function displayAllTasks() {

    resetDiv();

    console.log("In `displayAllTasks()`");

    var article = document.querySelector("article");
    article.setAttribute("id", "all-tasks");

    var contentGrid = document.createElement("div");
    contentGrid.setAttribute("id", "content-grid");

    var contentGridTopSection = document.createElement("div");
    contentGridTopSection.setAttribute("id", "contentGridTopSection");

    var allTasksHeader = document.createElement("h1");
    allTasksHeader.textContent = "All Tasks";

    var addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.setAttribute("id", "add-task-btn");
    addTaskBtn.addEventListener("click", () => {
        displayAddNewTask();
    });

    contentGridTopSection.appendChild(allTasksHeader);
    contentGridTopSection.appendChild(addTaskBtn);

    contentGrid.appendChild(contentGridTopSection);

    article.appendChild(contentGrid);
}

function displayTodaysTasks() {

    resetDiv();

    console.log("In `displayTodaysTasks()`");

    var content = document.querySelector("article");
    var text = document.createElement("p");
    text.textContent = "Tasks For Today";

    content.appendChild(text);
}

function displayMonthsTask() {

    resetDiv();

    console.log("In `displayMonthsTask()`");

    var content = document.querySelector("article");
    var text = document.createElement("p");
    text.textContent = "Tasks For This Month";

    content.appendChild(text);
}

export { displayAllTasks, displayMonthsTask, displayAddNewTask, displayAddNewProject, displayTodaysTasks };