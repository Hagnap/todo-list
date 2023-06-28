import * as Project from "./project";
import * as Task from "./task";
import * as Content from "./contentTabs";

let date = new Date();

function saveFormData() {


    var newTask = Task.Task(
        document.getElementById("task-name").value,
        document.getElementById("task-description").value,
        document.getElementById("task-duedate").value,
        document.getElementById("task-priority").value
    );

    Task.addTask(newTask);
}

function resetDiv() {
    var content = document.querySelector("article");
    content.innerHTML = "";
    content.setAttribute("id", "");
    content = null;
}

function editTask(task, project=false) {
    resetDiv();

    console.log("In `displayAddNewTask()`");

    var content = document.querySelector("article");

    var form = document.createElement("form");
    form.setAttribute("id", "task-form");

    var formLegend = document.createElement("legend");
    formLegend.textContent = "Edit Task";
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
    form.appendChild(submitBtn);

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        task.name = document.getElementById("task-name").value;
        task.description = document.getElementById("task-description").value;
        task.dueDate = document.getElementById("task-duedate").value;
        task.priority = document.getElementById("task-priority").value;
        
        if(project) {
            window.localStorage.setItem("allProjects", JSON.stringify(Project.projectCollection));
        
            displayCurrentProject(project);
        }
        else {
            window.localStorage.setItem("allTasks", JSON.stringify(Task.taskCollection));
            
            displayAllTasks();
        }
    });

    content.appendChild(form);
}

function displayAddNewTask(project) {
    // If project is passed in we are adding a task to a project
    // Otherwise we are adding a task to the general list of tasks

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
    form.appendChild(submitBtn);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var newTask = Task.Task(
            document.getElementById("task-name").value,
            document.getElementById("task-description").value,
            document.getElementById("task-duedate").value,
            document.getElementById("task-priority").value
    );

        // Add taskt to project
        if(project) {
            project.tasks.push(newTask);
            window.localStorage.setItem("allProjects", JSON.stringify(Project.projectCollection));
            displayCurrentProject(project);
        }
        // Add task to general list of tasks
        else {
            Task.addTask(newTask);
        }
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
    projectNameLabel.textContent = "Name of Project (24 char limit)\t";
    var projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("id", "project-name");
    projectNameInput.required = true;
    projectNameInput.maxLength = 24;
    projectNameDiv.appendChild(projectNameLabel);
    projectNameDiv.appendChild(projectNameInput);
    form.appendChild(projectNameDiv);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);
    form.addEventListener("submit",(e) => {
        e.preventDefault();

        if(Project.projectCollection.projects.length >= 10 ) {
            alert("ERROR: Reached project limit (10)");
        }
        else {

            console.log(Project.projectCollection.projects.length);
            var newProject = Project.Project(document.getElementById("project-name").value, );
            Project.addProject(newProject);
        }

        form.reset();
    });

    content.appendChild(form);
}

function displayAllTasks() {

    resetDiv();
    var contentGrid = document.querySelector("#content-grid");

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

    Task.taskCollection.tasks.forEach(element => {
        Task.displayTask(element);
    });
}

function displayTodaysTasks() {

    resetDiv();

    console.log("In `displayTodaysTasks()`");

    var article = document.querySelector("article");
    article.setAttribute("id", "todays-tasks");

    var contentGrid = document.createElement("div");
    contentGrid.setAttribute("id", "content-grid");

    var contentGridTopSection = document.createElement("div");
    contentGridTopSection.setAttribute("id", "contentGridTopSection");

    var allTasksHeader = document.createElement("h1");
    allTasksHeader.textContent = "Today's Tasks";

    contentGridTopSection.appendChild(allTasksHeader);

    contentGrid.appendChild(contentGridTopSection);

    article.appendChild(contentGrid);

    var todaysTask = Task.taskCollection.tasks.filter(t => t.dueDate.split(" ")[1] == date.toISOString().split("T")[0]);

    todaysTask.forEach((t) => {
        Task.displayTask(t);
    });
}

function displayMonthsTask() {

    resetDiv();

    console.log("In `displayTodaysTasks()`");

    var article = document.querySelector("article");
    article.setAttribute("id", "todays-tasks");

    var contentGrid = document.createElement("div");
    contentGrid.setAttribute("id", "content-grid");

    var contentGridTopSection = document.createElement("div");
    contentGridTopSection.setAttribute("id", "contentGridTopSection");

    var allTasksHeader = document.createElement("h1");
    allTasksHeader.textContent = "This Month's Tasks";

    contentGridTopSection.appendChild(allTasksHeader);

    contentGrid.appendChild(contentGridTopSection);

    article.appendChild(contentGrid);

    var monthsTask = Task.taskCollection.tasks.filter(t => new Date(t.dueDate.split(" ")[1]).getMonth() == date.getMonth());

    monthsTask.forEach((t) => {
        Task.displayTask(t);
    });
    
}

function displayCurrentProject(project) {

    console.log(`In displayProject for ${project.projectName}`);

    if(!project) {
        return;
    }

    resetDiv();

    var article = document.querySelector("article");
    article.setAttribute("id", "project-tasks");

    var contentGrid = document.createElement("div");
    contentGrid.setAttribute("id", "content-grid");

    var contentGridTopSection = document.createElement("div");
    contentGridTopSection.setAttribute("id", "contentGridTopSection");

    var projectHeader = document.createElement("h1");
    projectHeader.textContent = `Task(s) for ${project.projectName}`;

    var addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    addTaskButton.setAttribute("id", "add-task-button");
    addTaskButton.addEventListener("click", (e) => {
        displayAddNewTask(project);
        
    });

    var deleteProject = document.createElement("button");
    deleteProject.textContent = "Delete Project";
    deleteProject.setAttribute("class", "delete-project-button");

    deleteProject.addEventListener("click", (e) => {
        Project.deleteProject(project, );
    });

    contentGridTopSection.appendChild(projectHeader);
    contentGridTopSection.appendChild(addTaskButton);
    contentGridTopSection.appendChild(deleteProject);

    contentGrid.appendChild(contentGridTopSection);

    article.appendChild(contentGrid);

    project.tasks.forEach((t) => {
        Task.displayTask(t, project);
    });
}

export { resetDiv, displayCurrentProject, displayAllTasks, displayMonthsTask, displayAddNewTask, displayAddNewProject, displayTodaysTasks, editTask };