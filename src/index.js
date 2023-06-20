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
    addProjects.setAttribute("id", "addProjects");
    addProjects.textContent = "+ Add Project";
    
    projectsSection.appendChild(projectsText);
    projectsSection.appendChild(addProjects);

    navbar.appendChild(tasksSection);
    navbar.appendChild(projectsSection);
}


// MAIN CODE
createInitialWebpage();
populateNavbar();