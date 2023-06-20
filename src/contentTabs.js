function resetDiv() {
    var content = document.querySelector("article");
    content.innerHTML = "";
}

function displayAddNewProject() {

    resetDiv();

    console.log("In `displayAddNewProject()`");

    var content = document.querySelector("article");
    var text = document.createElement("p");
    text.textContent = "New Project";

    content.appendChild(text);
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