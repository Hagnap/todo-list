import * as content from "./contentTabs";
import * as task from "./task";
import * as project from "./project";

function createInitialWebpage() {

    // Create container that stores ALL of the content
    var container = document.createElement('div');
    container.setAttribute("id", "container");

    var header = document.createElement("header");
    header.textContent = "✔ To-Do List";

    var content = document.createElement("main");
    content.setAttribute("id", "content");

    var navbar = document.createElement("navbar");

    var todoSection = document.createElement("article");
    todoSection.textContent = "To Do";

    var footer = document.createElement("footer");
    footer.textContent = "Copyright © 2023 jhagg26";


    content.appendChild(navbar);
    content.appendChild(todoSection);
    
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    document.body.appendChild(container);
}

function populateNavbar() {
    var navbar = document.querySelector("navbar");

    var tasksSection = document.createElement('div');
    tasksSection.setAttribute("id", "tasksSection");

    var tasks = document.createElement('div');
    tasks.setAttribute("id", "tasks");
    var tasksImg = document.createElement('img');
    tasksImg.src = "../images/tasks.svg";
    tasks.appendChild(tasksImg);
    var tasksText = document.createElement('p');
    tasksText.textContent = "Tasks";
    tasks.appendChild(tasksText);

    var today = document.createElement('div');
    today.setAttribute("id", "today");
    var todayImg = document.createElement('img');
    todayImg.src = "../images/today.svg";
    today.appendChild(todayImg);
    var tasksText = document.createElement('p');
    tasksText.textContent = "Today";
    today.appendChild(tasksText);

    var month = document.createElement('div');
    month.setAttribute("id", "month");
    var monthImg = document.createElement('img');
    monthImg.src = "../images/month.svg";
    month.appendChild(monthImg);
    var monthText = document.createElement('p');
    monthText.textContent = "Month";
    month.appendChild(monthText);

    tasksSection.appendChild(tasks);
    tasksSection.appendChild(today);
    tasksSection.appendChild(month);

    var projectsSection = document.createElement('div');
    projectsSection.setAttribute("id", "projectsSection");

    var projectsText = document.createElement("h1");
    projectsText.textContent = "Projects";

    var addProjects = document.createElement('div');
    addProjects.setAttribute("id", "addProject");
    addProjects.textContent = "+ Add Project";
    
    projectsSection.appendChild(projectsText);
    projectsSection.appendChild(addProjects);

    navbar.appendChild(tasksSection);
    navbar.appendChild(projectsSection);
}

function addEventLisiteners() {
    var divs = document.querySelectorAll("navbar > div > div");
    divs.forEach(item => {

        item.addEventListener("click", () => {
            
            switch(item.getAttribute("id")) {
                case "tasks":
                    content.displayAllTasks();
                    break;
            
                case "today":
                    content.displayTodaysTasks();
                    break;
                    
                case "month":
                    content.displayMonthsTask();
                    break;
            
                case "addProject":
                    content.displayAddNewProject();
                    break;
    
                default:
                    content.displayAllTasks();
            }
        })
    }) 
}

// MAIN CODE
var allTasks = [];
createInitialWebpage();
populateNavbar();
addEventLisiteners();
content.displayAllTasks();


var taskOne = task.Task("Task One", "An easy task", new Date("2002-02-02"), 1);
task.addTask(taskOne);
var taskTwo = task.Task("Task Two", "An easy-ish task", new Date("2022-02-02"), 1);
task.addTask(taskTwo);
var taskThree = task.Task("Task Three", "An easy task", new Date("2002-02-02"), 1);
task.addTask(taskThree);
var taskFour = task.Task("Task Four", "An easy-ish task", new Date("2022-02-02"), 1);
task.addTask(taskFour);
var taskFive = task.Task("Task Five", "An easy task", new Date("2002-02-02"), 1);
task.addTask(taskFive);
var taskSix = task.Task("Task Six", "An easy-ish task", new Date("2022-02-02"), 1);
task.addTask(taskSix);
var taskSeven = task.Task("Task Seven", "An easy task", new Date("2002-02-02"), 1);
task.addTask(taskSeven);
var taskEight = task.Task("Task Eight", "An easy-ish task", new Date("2022-02-02"), 1);
task.addTask(taskEight);