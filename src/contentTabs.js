function resetDiv() {
    var content = document.querySelector("article");
    content.innerHTML = "";
}

function displayAddNewProject() {

    resetDiv();

    console.log("In `displayAddNewProject()`");

    var content = document.querySelector("article");

    var form = document.createElement("form");

    var formLegend = document.createElement("legend");
    formLegend.textContent = "Add New Project";
    form.appendChild(formLegend);

    var taskNameDiv = document.createElement("div");
    var taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Name of Task\t";
    var taskNameInput = document.createElement("input");
    taskNameDiv.appendChild(taskNameLabel);
    taskNameDiv.appendChild(taskNameInput);
    form.appendChild(taskNameDiv);

    var taskDescriptionDiv = document.createElement("div");
    var taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.textContent = "Task Description\t";
    var taskDescriptionInput = document.createElement("input");
    taskDescriptionDiv.appendChild(taskDescriptionLabel);
    taskDescriptionDiv.appendChild(taskDescriptionInput);
    form.appendChild(taskDescriptionDiv);

    var taskDueDateDiv = document.createElement("div");
    var taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.textContent = "Task Due Date Month\t";
    var taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateDiv.appendChild(taskDueDateLabel);
    taskDueDateDiv.appendChild(taskDueDateInput);
    form.appendChild(taskDueDateDiv);

    var taskPriorityDiv = document.createElement("div");
    var taskPriorityLabel = document.createElement("label");
    taskPriorityLabel.textContent = "Priority (1 - 3)\t";
    var taskPriorityInput = document.createElement("input");
    taskPriorityInput.setAttribute("min", "1");
    taskPriorityInput.setAttribute("max", "3");
    taskPriorityDiv.appendChild(taskPriorityLabel);
    taskPriorityDiv.appendChild(taskPriorityInput);
    form.appendChild(taskPriorityDiv);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);

    content.appendChild(form);
}

function displayAllTasks() {

    resetDiv();

    console.log("In `displayAllTasks()`");

    var content = document.querySelector("article");
    var text = document.createElement("p");
    text.textContent = "All Tasks";

    content.appendChild(text);
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

export { displayAllTasks, displayMonthsTask, displayAddNewProject, displayTodaysTasks };