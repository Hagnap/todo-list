import * as content from "./contentTabs";

function Task(name, description, dueDate, priority) {

    dueDate = dueDate.toLocaleString().split(',')[0];
    dueDate = `Due: ${dueDate}`;
    priority = `Priority: ${priority}`;
    
    return { name, description, dueDate, priority };
}

/*
function addTask(task) {

    content.displayAllTasks();

    var contentGrid = document.querySelector("#content-grid");
    console.log(contentGrid);
    var taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task-div");
    var taskDivRight = document.createElement("div");
    taskDivRight.setAttribute("class", "task-div-right");
    var taskDivLeft = document.createElement("div");
    taskDivLeft.setAttribute("class", "task-div-left");

    for(var property in task) {
        var propertyElement = document.createElement("p");
        propertyElement.textContent = `${task[property]}`;
        propertyElement.setAttribute("class", `task-div-${property}`);

        if(property == "description") { 
            taskDivRight.appendChild(propertyElement);
        }
        else {
            taskDivLeft.appendChild(propertyElement);
        }
    }

    taskDiv.appendChild(taskDivLeft);
    taskDiv.appendChild(taskDivRight);

    contentGrid.appendChild(taskDiv);

    allTasks.push(task);

    console.log(allTasks);
    window.localStorage.setItem("all-tasks", JSON.stringify(allTasks));
}

function displayTask(task) {

    var contentGrid = document.querySelector("#content-grid");
    //console.log(contentGrid);
    var taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task-div");
    var taskDivRight = document.createElement("div");
    taskDivRight.setAttribute("class", "task-div-right");
    var taskDivLeft = document.createElement("div");
    taskDivLeft.setAttribute("class", "task-div-left");

    for(var property in task) {
        var propertyElement = document.createElement("p");
        propertyElement.textContent = `${task[property]}`;
        propertyElement.setAttribute("class", `task-div-${property}`);

        if(property == "description") { 
            taskDivRight.appendChild(propertyElement);
        }
        else {
            taskDivLeft.appendChild(propertyElement);
        }
    }

    taskDiv.appendChild(taskDivLeft);
    taskDiv.appendChild(taskDivRight);

    contentGrid.appendChild(taskDiv);
}
*/

const taskCollection = (() => {
    let tasks = []
    let storedTasks = JSON.parse(window.localStorage.getItem("allTasks"));
    
    if(storedTasks) {
        console.log("Tasks are present");
        for(let index in storedTasks.tasks) {
            console.log(storedTasks.tasks[index]);
            tasks.push(storedTasks.tasks[index]);
        }
    }
    else {
        console.log("No tasks are present");
    }

    /*
    if(storedTasks != null) {
        console.log(typeof(storedTasks.tasks));

        console.log(storedTasks.tasks);

        Array(storedTasks.tasks).forEach(element => {
            tasks.push(element);
        });
    }*/

    //tasks = tasks == null ? [] : Array(tasks);
    /*
    if(storedTasks != null) {
        storedTasks.array.forEach(element => {
            tasks.push(element);
        });
    }
    */
    console.table(tasks);
    return { tasks };
})();

function addTask(task) {
    taskCollection.tasks.push(task);
    console.table(taskCollection.tasks);

    window.localStorage.setItem("allTasks", JSON.stringify(taskCollection));
    //console.log(JSON.parse(localStorage.getItem("allTasks")));
}

function displayTask(task) {

}


export {Task, addTask, displayTask};