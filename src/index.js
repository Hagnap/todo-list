import * as content from "./contentTabs";
import * as Task from "./task";
import * as Project from "./project";
import { displayTask } from "./task";

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
    
    var footerText = document.createElement("p");
    footerText.textContent = "Copyright © 2023 jhagg26";
    var githubLogoLink = document.createElement("button");
    githubLogoLink.innerHTML = "<img src='github-logo.svg'>";
    githubLogoLink.setAttribute("id", "github-button");
    githubLogoLink.addEventListener("click", (e) => {
        var win = window.open("https://github.com/jhagg26/todo-list", '_blank');
        win.focus();
    });
    
    footer.appendChild(footerText);
    footer.appendChild(githubLogoLink);
    

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
    tasksImg.src = "tasks.svg";
    tasks.appendChild(tasksImg);
    var tasksText = document.createElement('p');
    tasksText.textContent = "Tasks";
    tasks.appendChild(tasksText);

    var today = document.createElement('div');
    today.setAttribute("id", "today");
    var todayImg = document.createElement('img');
    todayImg.src = "today.svg";
    today.appendChild(todayImg);
    var tasksText = document.createElement('p');
    tasksText.textContent = "Today";
    today.appendChild(tasksText);

    var month = document.createElement('div');
    month.setAttribute("id", "month");
    var monthImg = document.createElement('img');
    monthImg.src = "month.svg";
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

    var addProjectsButton = document.createElement('div');
    addProjectsButton.setAttribute("id", "addProject");
    addProjectsButton.textContent = "+ Add Project";

    var projectsDiv = document. createElement('div');
    projectsDiv.setAttribute("id", "projects-div")
    
    projectsSection.appendChild(projectsText);
    projectsSection.appendChild(addProjectsButton);
    projectsSection.appendChild(projectsDiv);

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
            
                /*
                case "projects-div":
                    content.displayCurrentProject();
                    break;
                    
                default:
                    content.displayAllTasks();
                */
            }
        })
    }) 
}

function resetNavBarProjects() {
    var div = document.querySelector("#projects-div");
    div.innerHTML = "";
}

function fillNavBarProjects() {
    if( Project.projectCollection.projects) {
        Project.projectCollection.projects.forEach((project) => {
            Project.displayProject(project);
        });
    }
}

// MAIN CODE
createInitialWebpage();
populateNavbar();
addEventLisiteners();
content.displayAllTasks();
fillNavBarProjects();

export {resetNavBarProjects, fillNavBarProjects, createInitialWebpage, populateNavbar, addEventLisiteners}